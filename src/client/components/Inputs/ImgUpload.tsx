import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/solid";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const uploadPic = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(null);

      let base64Img = `data:image/jpg;base64,${result.base64}`;

      let apiUrl = "https://api.cloudinary.com/v1_1/mogaka-dev/image/upload";

      let data = {
        file: base64Img,
        upload_preset: "movie_hangouts",
      };

      fetch(apiUrl, {
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      })
        .then(async (r) => {
          let data = await r.json();
          console.log(data.secure_url);
          setImage(data.secure_url);
        })
        .catch((err) => console.log(err));
    }

    console.log(result);

    if (!result.cancelled) {
      // setImage(result.uri);
    }
  };
  return (
    <TouchableOpacity
      className="h-20 border-2 rounded-lg mb-5 items-center justify-center"
      onPress={uploadPic}
    >
      <PlusCircleIcon color="#130824" fill="#130824" />
      <Text className="text-xs mt-1 font-bold">Add Profile Picture</Text>
    </TouchableOpacity>
  );
};

export default ImageUploader;
