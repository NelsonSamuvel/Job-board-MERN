import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import JobListingPage from "./pages/JobListingPage";
import BookmarksPage from "./pages/BookmarksPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/jobs",
        element: <JobListingPage />,
      },
      {
        path: "/bookmarks",
        element: <BookmarksPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
