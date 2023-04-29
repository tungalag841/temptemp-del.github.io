import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice1 = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: "https://bestinfo.mn/account" }),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    // getSign: builder.query({
    //     query: () => '/signup',
    //     providesTags: ['Auth']
    // }),
    getLogin: builder.mutation({
      query: (info) => ({
        url: '/login',
        providesTags: ['Auth'],
        method: 'POST',
        body: {
          email: info.email.value,
          password: info.password.value
        }
      }),
    }),
    getAuth: builder.query({
      query: () => ({
        url: '/authenticated',
        method: 'POST',
        body: { token: localStorage.getItem("token") },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Auth'],
    }),
    // getAuth: builder.query({
    //   query: () => ({
    //   url: '/authenticated',
    //   method: 'POST',
    //   body: {
    //     token: localStorage.getItem('token')
    //   }
    //   })
    // }),
  })
})

export const {
  useGetSignQuery,
  useGetAuthQuery,
  useGetLoginMutation
} = authSlice1

        // /logout

