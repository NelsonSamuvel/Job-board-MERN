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
import {
  HiOutlineBookmark,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineCurrencyRupee,
  HiOutlineMapPin,
} from "react-icons/hi2";

const JobListings = () => {
  const { data: jobs, isError, isLoading } = useGetJobsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Failed to fetch an API</p>;
  }

  return (
    <section className="py-6">
      <div className="container-max px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs &&
            jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <CardTitle>{job.jobTitle}</CardTitle>
                      <CardDescription>{job.companyName}</CardDescription>
                    </div>
                    <div className="self-start">
                      <HiOutlineBookmark className="icon-size" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="flex gap-2 ">
                    <span>
                      {" "}
                      <HiOutlineMapPin className="icon-size stroke-muted-foreground" />
                    </span>
                    {job.companyLocation}
                  </p>
                  <div className="flex items-center gap-4">
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
