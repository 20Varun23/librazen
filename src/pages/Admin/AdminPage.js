import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import supabase from "../L";
import { useEffect, useState } from "react";
import PassChange from "./PassChange";

function AdminPage() {
  const navigate = useNavigate();
  const { id, password } = useParams();
  const [admin, setAdmin] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      const { data, error } = await supabase
        .from("Admin")
        .select()
        .eq("id", id)
        .eq("password", password)
        .single();

      if (data) {
        setFetchError(null);
        setAdmin(data);
      }
      if (error) {
        setFetchError("Error occured");
        setAdmin(null);
      }
    };

    fetchAdmin();
  }, []);

  const handleCreate = () => {
    navigate(`/Admin/${id}/${password}/Create`);
  };

  const handleDelete = () => {
    navigate(`/Admin/${id}/${password}/Delete`);
  };

  const handleUpdate = () => {
    navigate(`/Admin/${id}/${password}/Update`);
  };

  const changePassword = () => {
    navigate(`/Admin/${id}/${password}/PassChange`);
  };

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {admin && (
        <>
          <h1 id="Main_heading">Hello {admin.name}</h1>
          <div id="ProfileDiv">
            <p className="mainText" style={{ textAlign: "center" }}>
              Name : {admin.name}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              id : {admin.id}
            </p>
            <p className="mainText" style={{ textAlign: "center" }}>
              email : {admin.email_id}
            </p>
          </div>
          <form action="submit" onSubmit={handleCreate}>
            <button
              className="btn btn-primary"
              style={{ margin: "0 auto", display: "block" }}
            >
              Create
            </button>
          </form>
          <br />
          <form action="submit" onSubmit={handleUpdate}>
            <button
              className="btn btn-primary"
              style={{ margin: "0 auto", display: "block" }}
            >
              Update
            </button>
          </form>
          <br />
          <form action="submit" onSubmit={handleDelete}>
            <button
              className="btn btn-primary"
              style={{ margin: "0 auto", display: "block" }}
            >
              Delete
            </button>
          </form>
          <hr style={{ color: "#fb8500" }} />
          <form action="submit" onSubmit={changePassword}>
            <button
              className="btn btn-primary"
              style={{ margin: "0 auto", display: "block" }}
            >
              Reset password
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default AdminPage;
