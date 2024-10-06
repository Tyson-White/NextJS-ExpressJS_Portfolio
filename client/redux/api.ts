import { Post } from '@/types/create-post-types';
import { IComment, ICreatePost } from './../types/post';
import { PostCardProps } from "@/types/post"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const portfolioApi = createApi({
    tagTypes: ["User", "Post", "Comment"],
    reducerPath: "portfolioApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080", credentials: "include", 
        prepareHeaders(headers, api) {
            headers.set('authorization', `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE1LCJyb2xlIjozLCJpYXQiOjE3MjgwNDE5NjcsImV4cCI6MTczMDYzMzk2N30.cYMZWu4yNBVWUk8nukPs3cbfvWeQNO8a-pjlOI34Hoc`)
        },

    }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => {
                return {
                    url: "/auth/me",
                    headers: {
                        
                    }
                }
            },
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
        createPost: builder.mutation<string, Post>({
            query: (post) => ({
                url: '/posts/create',
                method: 'POST',
                body: {
                    title: post.title,
                    tags: post.tags,
                    preview: post.preview,
                    content: post.paragraphs,
                    url: post.title
                }
            }),
            invalidatesTags: ["Post"]
        }),
        getOnePost: builder.query<PostCardProps, string>({
            query: (url) => `/posts/${url}`,
            providesTags: ['Post', 'Comment']
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
        deleteComment: builder.mutation({
            query: (id) => ({
                url:  '/comments/delete/' + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Comment"]
        }),
        uploadImage: builder.mutation({
            query: (data) => ({
                url: '/upload',
                method: "POST",
                body: data
            }),
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
    useLogoutMutation,
    useDeleteCommentMutation,
    useCreatePostMutation,
    useUploadImageMutation
} = portfolioApi

