import FilterBtn from "@/components/general/filter/FilterBtn";
import FilterPage from "@/components/general/filter/FilterPage";
import FilterSidebar from "@/components/general/filter/FilterSidebar";
import ErrorMsg from "@/components/ui/ErrorMsg";
import Loader from "@/components/ui/Loader";
import JobListings from "@/features/jobs/JobListings";
import JobSearch from "@/features/jobs/JobSearch";
import { useGetJobsQuery } from "@/redux/services/jobsApi";
import { useState } from "react";

const JobListingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const { data: jobs, isError, isLoading } = useGetJobsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMsg message="Failed to fetch ❌" />;
  }

  return (
    <section>
      {filterOpen ? (
        <FilterPage handleFilterToggle={() => setFilterOpen(false)} />
      ) : (
        <div>
          <div className="px-6 max-lg:block hidden">
            <JobSearch />
          </div>
          <FilterBtn handleFilterToggle={() => setFilterOpen(true)} />
          {/* large screens */}
          <div>
            <FilterSidebar filterOpen={filterOpen}>
              <JobListings jobs={jobs ? jobs : []} />
            </FilterSidebar>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobListingPage;
