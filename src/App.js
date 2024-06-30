import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ParticlesComponent from "./Components/Particle";
import Profile from "./pages/Profile";
import React from "react";
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

function App() {
  return (
    <div className="App">
      <NavBar />
      <ParticlesComponent id="particles" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Profile/:id/:password" element={<Profile />} />
          <Route
            path="/Profile/:id/:password/BooksSearch"
            element={<TakeBooks />}
          />
          <Route
            path="/Profile/:id/:password/:book_id/Issue"
            element={<IssueBook />}
          />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/:id/:password" element={<AdminPage />} />
          <Route path="/Admin/:id/:password/Create" element={<Create />} />
          <Route path="/Admin/:id/:password/Delete" element={<Delete />} />
          <Route path="/Admin/:id/:password/Update" element={<Update />} />
          <Route
            path="/Admin/:id/:password/:book_id/Update"
            element={<UpdateBook />}
          />
          <Route
            path="/Admin/:id/:password/:book_id/Delete"
            element={<DeleteBook />}
          />
          <Route
            path="/Profile/:id/:password/:book_id/Return"
            element={<ReturnPage />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/BookList" element={<BookList />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
