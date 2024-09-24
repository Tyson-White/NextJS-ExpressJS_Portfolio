import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const portfolioApi = createApi({
    reducerPath: "portfolioApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080", credentials: "include" }),
    endpoints: (builder) => ({
       getMe: builder.query({
        query: () => `/auth/me`
       }),
       register: builder.mutation({
        query: (userInfo) => ({
            url: '/auth/register',
            method: 'POST',
            body: userInfo
        })
       })
    })
})

export const { useGetMeQuery, useRegisterMutation } = portfolioApi

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEyLCJpYXQiOjE3MjcyMDA5OTQsImV4cCI6MTcyNzIwNDU5NH0.h63Xrf--QdBETPZBk_jZLcIEU6xa8j2IpJl3tEyeyEA