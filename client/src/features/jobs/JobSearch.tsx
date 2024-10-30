import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { searchJobs } from "@/utils/ui-data";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSearchedJobVal } from "@/redux/features/filters/filterSlice";

const JobSearch = () => {
  const [open, setOpen] = useState(false);

  const searchedJobVal = useSelector(
    (state: RootState) => state.filter.searchedJobVal
  );

  const dispatch = useDispatch();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] max-lg:w-full justify-between"
        >
          {searchedJobVal
            ? searchJobs.find((job) => job.value === searchedJobVal)?.label
            : "Select Jobs..."}
          <HiChevronUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] max-lg:w-[100%] p-0">
        <Command>
          <CommandInput placeholder="Search Jobs..." />
          <CommandList>
            <CommandEmpty>No jobs found.</CommandEmpty>
            <CommandGroup>
              {searchJobs.map((job) => (
                <CommandItem
                  key={job.value}
                  value={job.value}
                  onSelect={(currentValue) => {
                    dispatch(
                      setSearchedJobVal(
                        currentValue === searchedJobVal ? "" : currentValue
                      )
                    );
                    setOpen(false);
                  }}
                >
                  <HiCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      searchedJobVal === job.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {job.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default JobSearch;
