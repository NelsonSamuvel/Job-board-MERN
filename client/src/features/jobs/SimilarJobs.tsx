import { useGetJobsQuery } from "@/redux/services/jobsApi";
import { JobDetailsType } from "./JobDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  //   HiOutlineBookmark,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { differenceInDateObj } from "@/utils/helper";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SimilarJobs = ({ job }: JobDetailsType) => {
  const { data: jobs } = useGetJobsQuery();
  

  const similarJobs = jobs
    ? jobs.filter(
        (curJob) =>
          curJob.id !== job.id &&
          curJob.jobTitle?.split(" ").join("").toLowerCase() ===
            job.jobTitle?.split(" ").join("").toLowerCase()
      )
    : [];

  return (
    <section className="max-lg:py-4  h-screen scrollbar-thin">
      {similarJobs.length > 0 ? (
        <>
          <h2 className="pb-4 text-stone-800">Similar Jobs</h2>
          {similarJobs.map((job) => (
            <Card className="mb-4" key={job.id}>
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
                    {/* <HiOutlineBookmark
                      className={`icon-size ${
                        isBookmarks || isBookmarkedJob
                          ? "fill-primary stroke-none"
                          : ""
                      }`}
                      onClick={() => handleBookmarks(job)}
                    /> */}
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
              <CardFooter className="flex items-center gap-2 justify-between">
                <Badge variant={"secondary"}>
                  <p className="flex items-center gap-2  text-muted-foreground">
                    <HiOutlineClock className="" />
                    <span>
                      {differenceInDateObj(new Date(job.createdAt), new Date())}{" "}
                      ago
                    </span>
                  </p>
                </Badge>
                <NavLink to={`/jobs/${job.id}`}>
                  <Button size={"sm"}>Apply Now</Button>
                </NavLink>
              </CardFooter>
            </Card>
          ))}
        </>
      ) : (
        <p>No Similar Jobs Found</p>
      )}
    </section>
  );
};

export default SimilarJobs;
