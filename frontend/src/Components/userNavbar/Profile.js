// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";

const Profile = ({ userId }) => {
    console.log(userId);
  const API = `https://cashflow-dwee.onrender.com/accounts/${userId}`;
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios.get(API).then((res) => {
      const updateProfile = res.data.map((profile) => {
        return {
          ...profile,
          editing: false,
          avatar_url: profile.avatar_url || "",
          phone_number: profile.phone_number || "",
          username: profile.name || "",
          id_number: profile.id_number || "",
          account_number: profile.account_number || "",
        };
      });
      setProfiles(updateProfile);
    });
  }, [API]);

  // Delete a profile with the specified ID
  const handleDelete = (id) => {
    axios
      .delete(API + `/${id}`)
      .then((res) => {
        console.log(res.data);
        // Update the profile list in state
        setProfiles(profiles.filter((profile) => profile.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update a profile with the specified ID
  const handleUpdate = (id, updatedData) => {
    axios
      .put(API + `/${id}`, updatedData)
      .then((res) => {
        console.log(res.data);
        // Update the profile list in state
        setProfiles(
          profiles.map((profile) => {
            if (profile.id === id) {
              return { ...profile, ...updatedData, editing: false };
            }
            return profile;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Cancel editing for a profile
  const handleCancel = (id) => {
    setProfiles(
      profiles.map((profile) => {
        if (profile.id === id) {
          return { ...profile, editing: false };
        }
        return profile;
      })
    );
  };

  // Start editing for a profile
  const handleEdit = (id) => {
    setProfiles(
      profiles.map((profile) => {
        if (profile.id === id) {
          return { ...profile, editing: true };
        }
        return profile;
      })
    );
  };

  // Save changes for a profile
  const handleSave = (id, updatedData) => {
    handleUpdate(id, updatedData);
  };
  return (
    <>
      <div className="container-profile">
        <div className="main-body">
          {profiles.map((profile) => (
            <div className="row gutters-sm" key={profile.id}>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={
                          profile.avatar_url ||
                          "https://bootdey.com/img/Content/avatar/avatar7.png"
                        }
                        alt="Avatar"
                        className="rounded-circle"
                        width={250}
                      />
                      <div className="mt-3">
                        <h4>{profile.username}</h4>
                        <p className="text-secondary mb-1">Profile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.editing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={profile.username}
                            onChange={(e) =>
                              setProfiles(
                                profiles.map((p) => {
                                  if (p.id === profile.id) {
                                    return { ...p, username: e.target.value };
                                  }
                                  return p;
                                })
                              )
                            }
                          />
                        ) : (
                          profile.username
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.editing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={profile.phone_number}
                            onChange={(e) =>
                              setProfiles(
                                profiles.map((p) => {
                                  if (p.id === profile.id) {
                                    return {
                                      ...p,
                                      phone_number: e.target.value,
                                    };
                                  }
                                  return p;
                                })
                              )
                            }
                          />
                        ) : (
                          profile.phone_number
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.editing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={profile.id_number}
                            onChange={(e) =>
                              setProfiles(
                                profiles.map((p) => {
                                  if (p.id === profile.id) {
                                    return { ...p, id_number: e.target.value };
                                  }
                                  return p;
                                })
                              )
                            }
                          />
                        ) : (
                          profile.id_number
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Account Number</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {profile.editing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={profile.account_number}
                            onChange={(e) =>
                              setProfiles(
                                profiles.map((p) => {
                                  if (p.id === profile.id) {
                                    return {
                                      ...p,
                                      account_number: e.target.value,
                                    };
                                  }
                                  return p;
                                })
                              )
                            }
                          />
                        ) : (
                          profile.account_number
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12 d-flex justify-content-end">
                        {profile.editing ? (
                          <>
                            <button
                              className="btn btn-primary mr-2"
                              onClick={() => handleSave(profile.id, profile)}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-secondary mr-2"
                              onClick={() => handleCancel(profile.id)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-primary mr-2"
                              onClick={() => handleEdit(profile.id)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(profile.id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Profile;
