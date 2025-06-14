import { baseApi } from "@/redux/api/baseApi";

export const refaralApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    
    refaral: builder.query({
      query: ( ) => ({
        url: `user/referrals`,
        method: "GET",
        
      }),
      providesTags: ["User"],
    }),
    

  }),
});

export const {
    
useRefaralQuery

} = refaralApi;
