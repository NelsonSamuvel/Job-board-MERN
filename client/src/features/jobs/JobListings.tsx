import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetJobsQuery } from "@/redux/services/jobsApi";
import { differenceInDateObj } from "@/utils/helper";
import { RootState } from "../../redux/store";
import {
  HiOutlineBookmark,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { addToBookmarks } from "@/redux/features/bookmarks/bookmarkSlice";

enum FilterNames {
  fullTime = "Full-time",
  partTime = "Part-time",
  remote = "Remote",
  contract = "Contract",
  freelance = "Freelance",
}

interface HandleBookmarksType {
  ({ jobId, jobName }: { jobId: number; jobName: string }): void;
}

const JobListings = () => {
  const { data: jobs, isError, isLoading } = useGetJobsQuery();
  const { jobType, experience, salary, searchedJobVal } = useSelector(
    (state: RootState) => state.filter
  );

  const dispatch = useDispatch();

  if (isError) {
    return <p>Failed to fetch an API</p>;
  }

  const handleBookmarks: HandleBookmarksType = ({ jobId, jobName }) => {
    dispatch(addToBookmarks({ jobId, jobName }));
  };

  let filteredJobs;

  if (jobs) {
    filteredJobs = jobs;

    const jobsArr = Object.keys(jobType).reduce(
      (acc: string[], cur: string) => {
        if (jobType[cur]) {
          acc.push(
            FilterNames[cur as keyof typeof FilterNames].toLocaleLowerCase()
          );
        }
        return acc;
      },
      []
    );
    if (jobsArr.length) {
      filteredJobs = jobs.filter((job) =>
        jobsArr.includes(job.workType.toLowerCase())
      );
    }

    if (experience && experience !== "none") {
      filteredJobs = filteredJobs.filter((job) => {
        if (experience === "fresher") {
          return job.experience.toLowerCase() === experience;
        } else {
          const expInNum = Number(job.experience.split("+")[0]);
          return expInNum === Number(experience);
        }
      });
    }

    if (salary) {
      filteredJobs = filteredJobs.filter((job) => {
        const salaryAmt = job.ctc.split(" ")[0].slice(1);
        const salaryInNum = Number(salaryAmt.split(",").join(""));
        return salaryInNum >= salary * 100000;
      });
    }

    if (searchedJobVal) {
      filteredJobs = filteredJobs.filter((job) => {
        const jobTitle = job.jobTitle.split(" ").join("");
        return searchedJobVal.toLowerCase() === jobTitle.toLowerCase();
      });
    }
  }

  return (
    <section className="lg:ml-16">
      <div className="container-max px-6">
        {isLoading && <p>Loading...</p>}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs &&
            filteredJobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2 md:flex md:gap-2 md:items-center">
                      <Avatar className="w-[35px] hidden md:block">
                        <AvatarImage
                          src={job.companyLogo}
                          className="rounded-full object-cover"
                        />
                        <AvatarFallback className="text-xs hidden">
                          {job.companyName}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <CardTitle>{job.jobTitle}</CardTitle>
                        <CardDescription>{job.companyName}</CardDescription>
                      </div>
                    </div>
                    <div className="self-start">
                      <HiOutlineBookmark
                        className="icon-size"
                        onClick={() =>
                          handleBookmarks({
                            jobId: job.id,
                            jobName: job.jobTitle,
                          })
                        }
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 max-sm:space-y-4 text-sm">
                  <p className="flex gap-2 ">
                    <span>
                      {" "}
                      <HiOutlineMapPin className="icon-size stroke-muted-foreground" />
                    </span>
                    {job.companyLocation}
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <p className="flex items-center gap-2">
                      <HiOutlineCalendar className="icon-size stroke-muted-foreground" />
                      <span>{job.experience}</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <HiOutlineCurrencyRupee className="h-6 w-6 stroke-muted-foreground" />
                      <span>{job.ctc}</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant={"secondary"}>
                    <p className="flex items-center gap-2  text-muted-foreground">
                      <HiOutlineClock className="" />
                      <span>
                        {differenceInDateObj(
                          new Date(job.createdAt),
                          new Date()
                        )}{" "}
                        ago
                      </span>
                    </p>
                  </Badge>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
