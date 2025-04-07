
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const residenceapi = createApi({
  reducerPath: 'residenceapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://aonebackend-production.up.railway.app/api',

  }),
  endpoints: (builder) => ({
    uploadresidencedoc: builder.mutation({
      query: (formData) => ({
        url: '/residence/upload', 
        method: 'POST',
        credentials:'include',
        body: formData,
      }),
    }),
  }),
});

export const { useUploadresidencedocMutation } = residenceapi;
