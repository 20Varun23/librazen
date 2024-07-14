import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import ParticlesComponent from "./Components/Particle";
import Profile from "./pages/Profile";
import React, { useState } from "react";
import TakeBooks from "./pages/TakeBooks";
import IssueBook from "./pages/IssueBook";
import Admin from "./pages/Admin/Admin";
import AdminPage from "./pages/Admin/AdminPage";
import Create from "./pages/Admin/Create";
import Delete from "./pages/Admin/Delete";
import Update from "./pages/Admin/Update";
import UpdateBook from "./pages/Admin/UpdateBook";
import DeleteBook from "./pages/Admin/DeleteBook";
import ReturnPage from "./pages/ReturnPage";
import Register from "./pages/Register";
import BookList from "./pages/BookList";
import LeaderBoard from "./pages/LeaderBoard";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import supabase from "./pages/L";
import UpdateProfile from "./pages/UpdateProfile";
import PasswordChange from "./pages/PasswordChange";
import PassChange from "./pages/Admin/PassChange";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Profile/:id/:password",
    element: <Profile />,
  },
  {
    path: "/Profile/:id/:password/BooksSearch",
    element: <TakeBooks />,
  },
  {
    path: "/Profile/:id/:password/:book_id/Issue",
    element: <IssueBook />,
  },
  {
    path: "/Profile/:id/:password/:book_id/Return",
    element: <ReturnPage />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/Admin/:id/:password",
    element: <AdminPage />,
  },
  {
    path: "/Admin/:id/:password/Create",
    element: <Create />,
  },
  {
    path: "/Admin/:id/:password/Delete",
    element: <Delete />,
  },
  {
    path: "/Admin/:id/:password/Update",
    element: <Update />,
  },
  {
    path: "/Admin/:id/:password/:book_id/Update",
    element: <UpdateBook />,
  },
  {
    path: "/Admin/:id/:password/:book_id/Delete",
    element: <DeleteBook />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/BookList",
    element: <BookList />,
  },
  {
    path: "/LeaderBoard",
    element: <LeaderBoard />,
  },
  { path: "/Profile/:id/:password/UpdateProfile", element: <UpdateProfile /> },
  {
    path: "/Profile/:id/:password/PasswordChange",
    element: <PasswordChange />,
  },
  {
    path: "/Admin/:id/:password/PassChange",
    element: <PassChange />,
  },
]);

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <div id="background"></div>
      <NavBar />
      <ParticlesComponent id="particles" />
      {loading ? (
        <HashLoader size={100} color="#fb8500" loading={loading} id="loader" />
      ) : (
        <>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </>
      )}
      <Footer />
    </div>
  );
}
export default App;
