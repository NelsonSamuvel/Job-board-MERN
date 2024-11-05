import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import JobListingPage from "./pages/JobListingPage";
import BookmarksPage from "./pages/BookmarksPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/jobs" />,
      },
      {
        path: "/jobs",
        element: <JobListingPage />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetailsPage />,
      },
      {
        path: "/bookmarks",
        element: <BookmarksPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
