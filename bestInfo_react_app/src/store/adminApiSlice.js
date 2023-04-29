import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminApiSlice = createApi({
  reducerPath: 'adminapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bestinfo.mn/backend/admin' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => ({
      url: '/getNewsIdTitleAll',
      method: 'POST',
      body: {
        token: localStorage.getItem('token')
      }
      })
    }),
    getPost: builder.query({
      query: postId =>({
        url: `/getNewsById/${postId}`,
        method: 'POST',
        body: {
          token: localStorage.getItem('token')
        }
      }) 
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/insertUpdateDeleteNews',
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    }),

    getVideos: builder.query({
      query: () =>({
        url: '/getVideosIdTitleAll',
        method: 'POST',
        body: {
          token: localStorage.getItem('token')
        }
      }) ,
      // providesTags: ['Post']
    }),
    getVideo: builder.query({
      query: (postId)=> ({
        url: `/getVideoById/${postId}`,
        method: 'POST',
        body: {
          token: localStorage.getItem('token')}
      })
    }),

    addNewVideo: builder.mutation({
      query: initialVideo => ({
        url: '/insertUpdateDeleteVideo',
        method: 'POST',
        body: {
          initialVideo: initialVideo,
          token: localStorage.getItem('token'),
          
      },
      }),
      // invalidatesTags: ['Post']
    }),

    //Banner

    getBanners: builder.query({
    query: () => ({
      url: '/getBannersIdTitleAll',
      method: 'POST',
      body: {
        token: localStorage.getItem('token')
      }
    }) ,
    // providesTags: ['Post']
    }),
    getBanner: builder.query({
      query: postId => ({
        url: `/getBannerById/${postId}`,
        method: 'POST',
        body: {
          token: localStorage.getItem('token')
        }
      })  
    }),

    addNewBanner: builder.mutation({
      query: initialBanner => ({
        url: '/insertUpdateDeleteBanner',
        method: 'POST',
        body: initialBanner
      }),
      // invalidatesTags: ['Post']
    }),
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useGetVideosQuery,
  useGetVideoQuery,
  useAddNewVideoMutation,
  useGetBannersQuery,
  useGetBannerQuery,
  useAddNewBannerMutation,
} = adminApiSlice