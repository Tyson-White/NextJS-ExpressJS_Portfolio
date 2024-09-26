import { PostCardProps } from "@/types/post"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const portfolioApi = createApi({
    tagTypes: ["User"],
    reducerPath: "portfolioApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080", credentials: "include" }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => `/auth/me`,
            providesTags: ["User"]
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/register',
                method: 'POST',
                body: userInfo
            }),
            invalidatesTags: ["User"]
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo
            }),
            invalidatesTags: ["User"]
        }),
        getPosts: builder.query({
            query: () => `/posts`
        }),
        getOnePost: builder.query<PostCardProps, string>({
            query: (url) => `/posts/${url}`
   }),
    })
})

export const { useGetMeQuery, useRegisterMutation, useLoginMutation, useGetPostsQuery, useGetOnePostQuery } = portfolioApi

