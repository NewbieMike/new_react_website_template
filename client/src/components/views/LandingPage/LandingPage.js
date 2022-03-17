import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.scss";
const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="landing_page_container">
      <img src="" alt="" />
      <div className="landing_page_content">
        <div className="landing_page_title"></div>
      </div>
    </div>
  );
};

export default LandingPage;
