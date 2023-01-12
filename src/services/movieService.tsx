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
          url: ``,
          method: "get"
        }
      },
    }),
  }),
});


export const { useGetMoviesMutation } = movieApi
