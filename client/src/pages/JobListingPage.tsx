import FilterBtn from "@/components/general/filter/FilterBtn";
import FilterPage from "@/components/general/filter/FilterPage";
import MobileSearchBar from "@/components/general/filter/MobileSearchBar";
import JobListings from "@/features/jobs/JobListings";
import { useState } from "react";

const JobListingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <section>
      {filterOpen ? (
        <FilterPage />
      ) : (
        <>
          <MobileSearchBar />
          <FilterBtn handleFilter={() => setFilterOpen(true)} />

          <JobListings />
        </>
      )}
    </section>
  );
};

export default JobListingPage;
