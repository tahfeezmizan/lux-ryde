import { baseApi } from "@/redux/api/baseApi";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    dasboard: builder.query({
      query: () => ({
        url: "orders/stats/dashboard",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    
    
   
  }),
});

export const {
useDasboardQuery} = productsApi;
