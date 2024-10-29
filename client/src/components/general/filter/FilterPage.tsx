import { Button } from "@/components/ui/button";
import { filterTypes } from "@/utils/ui-data";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../../ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setExperience,
  setJobType,
  setSalary,
} from "@/redux/features/filters/filterSlice";
import { ChangeEvent } from "react";
import { HiPlus } from "react-icons/hi2";

const FilterPage = () => {
  const {
    jobType,
    experience,
    salary: salaryState,
  } = useSelector((state: RootState) => state.filter);

  const dispatch = useDispatch();

  const handleJobs = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target as HTMLInputElement;
    dispatch(setJobType({ value, checked }));
  };

  const handleExperience = (value: string) => {
    dispatch(setExperience(value));
  };

  const handleSalary = (value: number) => {
    dispatch(setSalary(value));
  };

  return (
    <section className="lg:hidden">
      <div className="container-max px-4 min-h-[80vh] grid grid-rows-[1fr_auto]">
        {/* Job Type */}
        <div className="">
          <div className="pb-6">
            <h3 className="text-muted-foreground font-semibold">Job Type</h3>
            <ul className="space-y-2 my-4">
              {filterTypes["jobType"].map((job) => (
                <li key={job.name} className="flex gap-2">
                  <input
                    type="checkbox"
                    id={job.name}
                    name={job.name}
                    value={job.value}
                    checked={jobType[job.value]}
                    className="w-4 h-4 checked:text-primary"
                    onChange={handleJobs}
                  />
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
              <Select value={experience} onValueChange={handleExperience}>
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
              {filterTypes["salary"].map((salary) => {
                const isSalary = salaryState === salary.value;
                return (
                  <li key={salary.value} className="flex gap-2">
                    <Button
                      variant={`${isSalary ? "default" : "secondary"}`}
                      size="sm"
                      className={`rounded-full tracking-wide`}
                      onClick={() => handleSalary(salary.value)}
                    >
                      {isSalary && <HiPlus />}
                      {salary.value} lakhs
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Experience */}
        </div>

        <div className="">
          <div className="flex gap-4 justify-end">
            <Button variant="outline">Clear All</Button>
            <Button>Apply All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPage;
