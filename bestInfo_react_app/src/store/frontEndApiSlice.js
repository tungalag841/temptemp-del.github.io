import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const frontEndApiSlice = createApi({
  reducerPath: 'frontendapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bestinfo.mn/news' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getNewsAll: builder.query({
      query: () => ({
        url: '/all',
        method: 'GET'
      }),
    }),

    getBanners: builder.query({
      query: (id) => `/banners/${id}`,
    }),
    getBannerAll: builder.query({
      query: () => "/bannerAll",
    }),
    getCategory: builder.query({
      query: () => '/category',
    }),
    getCategoryById: builder.query({
      query: ({ id, id1 }) => `/category/${id}/${id1}`,
    }),
    getVideos: builder.query({
      query: () => ({
        url: '/videos',
        method: 'POST'
      })
    }),
    getNewsDetailById: builder.query({
      query: (id) => `/newsDetail/${id}/`,
    }),
    getBlogger: builder.query({
      query: () => '/blogger',
    }),
    // Comment---------
    getComment: builder.query({
      query: (id) => ({
        url: `/news/comment/${id}`,
      }),
      // providesTags: ['Post']
    }),
    addNewComment: builder.mutation({
      query: initialPost => ({
        url: '/insertComment',
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    }),
    addReaction: builder.mutation({
      query: initialREaction =>({
        url: '/insertReaction',
        method: 'POST',
        body: initialREaction
      })
    }),
    addReactionLike: builder.mutation({
      query: initialREaction =>({
        url: '/insertReactionLIke',
        method: 'POST',
        body: initialREaction
      })
    }),
  })

})

export const {
  useGetNewsAllQuery,
  useGetBannersQuery,
  useGetCategoryQuery,
  useGetCategoryByIdQuery,
  useGetVideosQuery,
  useGetNewsDetailByIdQuery,
  useGetBloggerQuery,
  useGetBannerAllQuery,
  useGetCommentQuery,
  useAddNewCommentMutation,
  useAddReactionMutation,
  useAddReactionLikeMutation
} = frontEndApiSlice