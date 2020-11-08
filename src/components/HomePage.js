import React from "react";
import { getUserInfo } from "../helpers/auth";
import UploadForm from "./UploadForm";

const HomePage = () => {
  const userName = getUserInfo().name;
  return (
    <div className="home-page">
      Welcome {userName}
      <UploadForm />
    </div>
  );
};

export default HomePage;
