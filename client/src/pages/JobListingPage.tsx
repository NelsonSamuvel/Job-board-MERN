import FilterBtn from "@/components/general/filter/FilterBtn";
import FilterPage from "@/components/general/filter/FilterPage";
import FilterSidebar from "@/components/general/filter/FilterSidebar";
import MobileSearchBar from "@/components/general/filter/MobileSearchBar";
import JobListings from "@/features/jobs/JobListings";
import { useState } from "react";

const JobListingPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <section>
      {filterOpen ? (
        <FilterPage handleFilterToggle={() => setFilterOpen(false)} />
      ) : (
        <div className="max-lg:pt-24">
          <MobileSearchBar />
          <FilterBtn handleFilterToggle={() => setFilterOpen(true)} />
          {/* large screens */}
          <div className=" hidden lg:block">
            <FilterSidebar>
              <JobListings />
            </FilterSidebar>
          </div>
          <div className="lg:hidden">
            <JobListings />
          </div>
        </div>
      )}
    </section>
  );
};

export default JobListingPage;
