
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  // baseUrl: "https://aonebackend-production.up.railway.app/api",
  credentials: "include", // Ensures cookies are sent with requests

});

export const commonapi = createApi({
  reducerPath: "commonapi",
  baseQuery,
  tagTypes: ["Messages", "User"], // Defined tag types properly
  endpoints: (builder) => ({


    // User Registration
    registerUser: builder.mutation({
      query: ({ country, email, password }) => ({
        method: "POST",
        url: "/users/register",
        body: { country, email, password },
      }),
      invalidatesTags: ["User"],
    }),

    // User Login
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        method: "POST",
        url: "/users/login",
        body: { email, password },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      // Optionally invalidate other cached data on logout
      invalidatesTags: ['User']
    }),


    usersList: builder.query({
      query: () => "/users/get",
      providesTags: ["accounts"],
    }),



    // send code
    sendCode: builder.mutation({
      query: ({ email }) => ({
        method: "POST",
        url: "/users/send-code",
        body: { email },
      }),
      invalidatesTags: ["User"],
    }),

    // verify code
    verifyCode: builder.mutation({
      query: ({ code }) => ({
        method: "POST",
        url: "/users/verify-code",
        body: { code },
      }),
    }),



    forgetPassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        method: 'post',
        url: "/users/forgetpassword",
        body: { email, newPassword }
      }),
      invalidatesTags: ["User"]

    }),

    updatePassword: builder.mutation({
      query: ({ password, updatedPassword }) => ({
        method: "post",
        url: "/users/updatepassword",
        body: { password, updatedPassword }
      }),
      invalidatesTags: ["User"]
    })
  }),
});

export const {

  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useUsersListQuery,
  useSendCodeMutation,
  useVerifyCodeMutation,
  useForgetPasswordMutation,
  useUpdatePasswordMutation
} = commonapi;
