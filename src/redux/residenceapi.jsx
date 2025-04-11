
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const residenceapi = createApi({
  reducerPath: 'residenceapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    // baseUrl: 'https://aonebackend-production.up.railway.app/api',

  }),
  tagTypes:["docs"],
  endpoints: (builder) => ({

    uploadresidencedoc: builder.mutation({
      query: (formData) => ({
        url: '/residence/upload', 
        method: 'POST',
        credentials:'include',
        body: formData,
      }),
      invalidatesTags:["docs"]
    }),

    getallresidencialdocs:builder.query({
      query:()=>'/residence/all/getdata',
      invalidatesTags:["docs"]
    })
  }),
});

export const { useUploadresidencedocMutation,useGetallresidencialdocsQuery } = residenceapi;
