import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.scss";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="main_footer_container">
      <div className="container flex-container">
        <div className="footer_column">
          <h3>{t("app_title")}</h3>
          <div className="social_media_icons">
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
          </div>
        </div>
        <div className="footer_column">
          <h3>{t("app_title")}</h3>
          <div className="social_media_icons">
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
            <HashLink to="/" className="header_link">
              {t("app_title")}
            </HashLink>
          </div>
        </div>
        <div className="footer_column">
          <h3>{t("app_title")}</h3>
          <div className="social_media_icons">
            <HashLink to="/" className="header_link">
              <InstagramIcon />
            </HashLink>
            <HashLink to="/" className="header_link">
              <YouTubeIcon />
            </HashLink>
            <HashLink to="/" className="header_link">
              <FacebookIcon />
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
