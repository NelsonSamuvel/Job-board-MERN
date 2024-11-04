import JobDetails from "@/features/jobs/JobDetails";
import SimilarJobs from "@/features/jobs/SimilarJobs";
import { useGetSingleJobQuery } from "@/redux/services/jobsApi";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const { data: job, isLoading, isError } = useGetSingleJobQuery(Number(jobId));

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Failed To fetch job</p>;
  }

  return (
    <section>
      <div className="container-max padding-x">
        {job ? (
          <div className="lg:flex gap-4">
            <JobDetails job={job} />
            <SimilarJobs job={job} />
          </div>
        ) : (
          <p>Failed To fetch</p>
        )}
      </div>
    </section>
  );
};

export default JobDetailsPage;
