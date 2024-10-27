import { Button } from "@/components/ui/button";
import { filterTypes } from "@/utils/ui-data";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../../ui/select";

const FilterPage = () => {
  return (
    <section className="">
      <div className="container-max px-4 min-h-[80vh] grid grid-rows-[1fr_auto]">
        {/* Job Type */}
        <div className="">
          <div className="pb-6">
            <h3 className="text-muted-foreground font-semibold">Job Type</h3>
            <ul className="space-y-2 my-4">
              {filterTypes["jobType"].map((job) => (
                <li key={job.name} className="flex gap-2">
                  <input type="checkbox" id={job.name} />
                  <label htmlFor={job.name} className="text-sm">
                    {job.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-6">
            <h3 className="text-muted-foreground font-semibold mb-4">
              Years of Experience
            </h3>

            <div className="my-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Years of Experience" />
                </SelectTrigger>
                <SelectContent align="start" side="bottom">
                  {filterTypes["experience"].map((experience) => (
                    <SelectItem value={experience.value}>
                      {experience.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Salary */}
          <div className="pb-6">
            <h3 className="text-muted-foreground font-semibold">
              Annual Salary <span className="text-sm">(in lakhs)</span>
            </h3>
            <ul className="my-4 flex items-center gap-4 flex-wrap">
              {filterTypes["salary"].map((salary) => (
                <li key={salary.value} className="flex gap-2">
                  <Button
                    variant={"secondary"}
                    size="sm"
                    className="rounded-full tracking-wide"
                  >
                    {salary.value} lakhs
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
        </div>

        <div>
          <div className="flex gap-4 w-1/2 ml-auto">
            <Button variant="outline">Clear All</Button>
            <Button>Clear All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
