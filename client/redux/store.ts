import { configureStore } from "@reduxjs/toolkit"

import { setupListeners } from "@reduxjs/toolkit/query"

import { portfolioApi } from "./api"

export const store = configureStore({
    reducer: {
        [portfolioApi.reducerPath]: portfolioApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(portfolioApi.middleware)
})

setupListeners(store.dispatch)