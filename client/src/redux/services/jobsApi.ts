import { JobsType } from "@/types/jobsType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getJobs: builder.query<JobsType[], void>({
      query: () => "/jobs",
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
