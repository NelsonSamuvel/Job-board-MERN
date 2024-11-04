import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JobsType } from "@/types/jobsType";
import {
  HiOutlineBookmark,
  HiOutlineMapPin,
  HiOutlineShare,
} from "react-icons/hi2";

export type JobDetailsType = {
  job: JobsType;
};

const JobDetails = ({ job }: JobDetailsType) => {
  return (
    <div className="max-lg:border-b-2 max-lg:pb-4 flex-1 lg:px-6">
      {/* Job Info */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-stone-700">{job.jobTitle}</h2>
        <div className="flex items-center gap-2">
          <Button>Apply Now</Button>
          <Button variant={"secondary"} size={"icon"}>
            <HiOutlineBookmark className="icon-size" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <HiOutlineShare className="icon-size" />
          </Button>
        </div>
      </div>

      {/* company Info */}
      <div className="pt-6 pb-4 flex items-center gap-4">
        <img
          src={job.companyLogo}
          alt={job.companyName}
          className="w-16 rounded-sm object-cover max-lg:hidden block"
        />
        <div className="space-y-2">
          <p className="md:flex gap-4 items-center max-md:space-y-2">
            <span className="text-primary max-lg:text-xl font-semibold">
              {job.companyName}
            </span>
            <span className="flex gap-2 items-center">
              <HiOutlineMapPin className="icons-size text-muted-foreground" />
              {job.companyLocation}
            </span>
          </p>
          <div className="flex items-center flex-wrap gap-2">
            <Badge variant={"secondary"}>{job.workType}</Badge>
            <Badge variant={"secondary"}>{job.workLocationType}</Badge>
            <Badge variant={"secondary"}>{job.experience}</Badge>
          </div>
        </div>
      </div>

      {/* Role Info */}

      <div className=" py-4">
        <h3>About this role</h3>
        <p className="text-small mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, iure
          quo. Velit beatae asperiores, autem, alias dolor omnis placeat
          voluptate optio sint pariatur tenetur accusantium similique vel
          delectus iusto ex.
        </p>
      </div>

      {/* qualifications info */}

      <div className="py-4">
        <h3>Qualifications</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
          {job.qualifications.map((qualify) => (
            <li key={qualify} className="text-sm">
              {qualify}
            </li>
          ))}
        </ul>
      </div>

      {/* responsibility info */}

      <div className="py-4">
        <h3>Responsibility</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
          {job.responsibilities.map((res) => (
            <li key={res} className="text-sm">
              {res}
            </li>
          ))}
        </ul>
      </div>

      {/* skills */}

      <div className="py-4">
        <h3>Skills</h3>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          {job.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>

      {/* Openings */}

      <div className="py-4">
        <h3>Number of Openings</h3>
        <p className="text-small mt-2">{job.noOfOpenings}</p>
      </div>
    </div>
  );
};

export default JobDetails;
