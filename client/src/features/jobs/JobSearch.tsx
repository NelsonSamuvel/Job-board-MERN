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

const JobSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchedVal, setSearchedVal] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {searchedVal
            ? searchJobs.find((job) => job.value === searchedVal)?.label
            : "Select Jobs..."}
          <HiChevronUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
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
                    setSearchedVal(
                      currentValue === searchedVal ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <HiCheck
                    className={cn(
                      "mr-2 h-4 w-4",
                      searchedVal === job.value ? "opacity-100" : "opacity-0"
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
