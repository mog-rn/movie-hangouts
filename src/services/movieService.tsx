import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API}`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return {
          url: `https://api.themoviedb.org/3/search/movie?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US&page=1&include_adult=false`,
          method: "get"
        }
      },
    }),
  }),
});


export const { useGetMoviesMutation } = movieApi
