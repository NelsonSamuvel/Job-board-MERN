import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useGetJobsQuery } from "@/redux/services/jobsApi";
import { differenceInDateObj, searchFilter } from "@/utils/helper";
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
import { JobsType } from "@/types/jobsType";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

enum FilterNames {
  fullTime = "Full-time",
  partTime = "Part-time",
  remote = "Remote",
  contract = "Contract",
  freelance = "Freelance",
}

// interface HandleBookmarksType {
//   ({ jobId, jobName }: { jobId: number; jobName: string }): void;
// }

interface JobListingType {
  jobs?: JobsType[];
  isBookmarks?: boolean;
}

const JobListings = ({ jobs, isBookmarks = false }: JobListingType) => {
  const { jobType, experience, salary, searchedJobVal } = useSelector(
    (state: RootState) => state.filter
  );

  const { bookmarks } = useSelector((state: RootState) => state.bookmarks);

  // const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const dispatch = useDispatch();

  const handleBookmarks = (job: JobsType) => {
    // setSelectedJob((cur) => (cur === job.id ? null : job.id));
    dispatch(addToBookmarks(job));
  };

  let filteredJobs = jobs ? jobs : [];

  const errorMsg = isBookmarks ? "No Bookmarks found" : "No Job Found";

  if (jobs && !isBookmarks) {
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
      filteredJobs = searchFilter<JobsType>(filteredJobs, searchedJobVal);
    }
  }

  return (
    <section>
      <div className="container-max px-6">
        {filteredJobs && !filteredJobs.length && <p>{errorMsg}</p>}
        <div className="  grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs &&
            filteredJobs.map((job) => {
              const isBookmarkedJob = bookmarks.some(
                (book) => book.id === job.id
              );
              return (
                <Card key={job.id} className="">
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
                          className={`icon-size ${
                            isBookmarks || isBookmarkedJob
                              ? "fill-primary stroke-none"
                              : ""
                          }`}
                          onClick={() => handleBookmarks(job)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 max-sm:space-y-4 text-sm">
                    <p className="flex items-center gap-2 ">
                      <span>
                        {" "}
                        <HiOutlineMapPin className="icon-size stroke-muted-foreground" />
                      </span>
                      {job.companyLocation}
                    </p>
                    <p className="flex items-center gap-2">
                      <HiOutlineCalendar className="icon-size stroke-muted-foreground" />
                      <span>{job.experience}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <HiOutlineCurrencyRupee className="icon-size stroke-muted-foreground" />
                      <span>{job.ctc}</span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
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
                    <NavLink to={`${job.id}`}>
                      <Button size={"sm"}>Apply Now</Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
