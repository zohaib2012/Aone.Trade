
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const  baseQuery: fetchBaseQuery({
//   baseUrl: 'http://localhost:3000/api',
//   // baseUrl: 'https://aonebackend-production.up.railway.app/api',
//   credentials:"include"
// }),
// export const documentapi = createApi({
//   reducerPath: 'documentapi',
//   baseQuery,
//   tagTypes:["docs"],
//   endpoints: (builder) => ({
//     uploadDocument: builder.mutation({
//       query: (formData) => ({
//         url: '/documents/upload', 
//         method: 'POST',
//         credentials:'include',
//         body: formData,
//       }),
//       invalidatesTags:["docs"]

//     }),

// getlldocuments:builder.query({
//   query:()=>`/all/getdata`,
//   invalidatesTags:[""]
// })
//   }),
// // });

// export const { useUploadDocumentMutation } = documentapi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentapi = createApi({
  reducerPath: 'documentapi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000/api',
    baseUrl: 'https://aonebackend-production.up.railway.app/api',
    credentials: "include"
  }),
  tagTypes: ["docs"],
  endpoints: (builder) => ({
    uploadDocument: builder.mutation({
      query: (formData) => ({
        url: '/documents/upload', 
        method: 'POST',
        credentials: 'include',
        body: formData,
      }),
      invalidatesTags: ["docs"]
    }),

    getlldocuments: builder.query({
      query: () => `/documents/all/getdata`,
      providesTags: ["docs"]
    })
  }),
});

export const { 
  useUploadDocumentMutation,
  useGetlldocumentsQuery 
} = documentapi;