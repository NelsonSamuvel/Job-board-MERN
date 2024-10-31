import JobListings from "@/features/jobs/JobListings";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const BookmarksPage = () => {
  const { bookmarks } = useSelector((state: RootState) => state.bookmarks);

  return (
    <section>
      <div className="container-max">
        <h2 className="h2 text-center">My Bookmarks</h2>
        <div className="py-6">
          <JobListings isBookmarks={true} jobs={bookmarks} />
        </div>
      </div>
    </section>
  );
};

export default BookmarksPage;
