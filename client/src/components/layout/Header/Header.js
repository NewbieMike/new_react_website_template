import React, { useState } from "react";
import PropTypes from "prop-types";

import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import "./Header.scss";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pl",
    name: "Polski",
    country_code: "pl",
  },
  {
    code: "cn",
    name: "中國",
    country_code: "cn",
  },
  {
    code: "ua",
    name: "中國",
    country_code: "ua",
  },
];

const Component = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={`header_main_container ${header ? "small" : ""}`}>
      <div className="header_container container">
        <div className="header_column">
          <HashLink to="/" className="header_link">
            <img src="" alt="" />
            BUSINESS LOGO
          </HashLink>
        </div>
        <div className="header_column">
          <HashLink to="/" className="header_link">
            {t("app_title")}
          </HashLink>
          <HashLink to="/" className="header_link">
            {t("app_title")}
          </HashLink>
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
        <div className="header_column">
          <ul className="language_list" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className={`dropdown-item ${
                    code === currentLanguageCode ? "disabled-item" : ""
                  }`}
                  onClick={() => i18next.changeLanguage(code)}
                  disabled={code === currentLanguageCode}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                  ></span>
                  {/* {name} */}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as Header, Component as HeaderComponent };
