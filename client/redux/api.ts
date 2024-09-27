import { IComment, ICreatePost } from './../types/post';
import { PostCardProps } from "@/types/post"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const portfolioApi = createApi({
    tagTypes: ["User", "Post"],
    reducerPath: "portfolioApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080", credentials: "include", }),
    endpoints: (builder) => ({
        // AUTH REQUESTS
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
        // POSTS REQUESTS
        getPosts: builder.query({
            query: () => `/posts`
        }),
        getOnePost: builder.query<PostCardProps, string>({
            query: (url) => `/posts/${url}`,
            providesTags: ['Post']
        }),
        // COMMENTS REQUESTS
        getComments: builder.query<IComment[], number | undefined>({
            query: (postId) => `/comments?post=${postId}`
        }),
        createComment: builder.mutation({
            query: (commentData: ICreatePost) => ({
                url: '/comments/create',
                method: "POST",
                body: commentData
            }),
            invalidatesTags: ['Post']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: "POST",
            }),
            invalidatesTags: ["User"]
        }),
    })
})

export const { 
    useGetMeQuery, 
    useRegisterMutation, 
    useLoginMutation, 
    useGetPostsQuery, 
    useGetOnePostQuery,
    useGetCommentsQuery,
    useCreateCommentMutation,
    useLogoutMutation
} = portfolioApi

