import React, { useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import "./HeaderMobile.scss";

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
const HeaderMobile = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  return (
    <div className="mobile_header">
      <div className="mobile_header_top_nav">
        <div className="mobile_header_top_nav_img">
          <HashLink to="/">
            <img src="" alt="" />
          </HashLink>
        </div>
        <div className="mobile_header_icon" onClick={() => setActive(!active)}>
          {active ? (
            <div>
              <CloseIcon />
            </div>
          ) : (
            <div>
              <MenuIcon />
            </div>
          )}
        </div>
      </div>
      <div
        className={`mobile_header_content ${
          !active ? "mobile_header_content_active" : ""
        }`}
      >
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
        <div className="language_container">
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

export default HeaderMobile;
