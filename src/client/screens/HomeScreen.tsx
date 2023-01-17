import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { FloatingAction } from "react-native-floating-action";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import Categories from "../components/Categories";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies, selectMovie } from "../features/movieSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


interface Props {
  movie: NativeStackNavigationProp<any>;
}


export default function Homepage({ movie }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const route = useRoute()

  const movieId = route.params?.movieId

  const navigate = useNavigation();

  // const { movies, loading } = useSelector((state) => state.movies);

  const upcoming = useSelector((state) => state.movies.upcoming);


  useEffect(() => {
    dispatch(fetchUpcomingMovies());
    dispatch(selectMovie(movieId))
  }, [movieId]);

  return (
    <MainLayout>
      <Categories />
      <ScrollView>
        <View>
          <Text className="text-white font-bold text-xl py-2">
            New Releases
          </Text>
          <ScrollView horizontal>
            {upcoming?.map(
              (
                movie: {
                  poster_path: any;
                  title:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined;
                },
                id: Key | null | undefined
              ) => (
                <TouchableOpacity
                  key={id}
                  onPress={() => navigate.navigate("MovieDetails", { movie })}
                >
                  <View className="mx-2">
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                      }}
                      style={{ width: 150, height: 200 }}
                    />
                    {/* <Text className="text-white text-center">
                      {movie.title}
                    </Text> */}
                  </View>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </MainLayout>
  );
}
