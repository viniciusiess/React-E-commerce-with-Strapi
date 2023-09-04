import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        // @ts-ignore
        baseUrl: `${import.meta.env.VITE_BASE_URL}/api/`,
    }),
    endpoints: (builder) => ({
        getproductByName: builder.query({
            query: (name) => `${name}`
        })
    })
})

export const { useGetproductByNameQuery } = productApi