import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/pageHeader.css";
import logo from "../images/logo.svg";
import account from "../images/account.png";
import cartIcon from "../images/cart.png";
import navIcon from "../images/nav.png";
import arrowDown from "../images/angle-down.svg";
import ShopDropdown from "./HeaderElements/ShopDropdown";
import ReasearchLibraryDropDown from "./HeaderElements/ResearchLibrary";
import PublishingServicesDropdown from "./HeaderElements/PublishingServicesDropdown";
import EducationResourcesDropdown from "./HeaderElements/EducationResourcesDropdown";
import ProfessionalDevelopmentDropdown from "./HeaderElements/ProfessionalDevelopmentDropdown";

function PageHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const query = new URLSearchParams(location.search).get("query");
  let placeholder = "Search Wiley for what you're looking for";
  if (query) {
    placeholder = query;
  }
  const [shopDropDown, setShopDropDown] = useState(false);
  const [reasearchLibraryDropDown, setreasearchLibraryDropDown] =
    useState(false);
  const [publishingServiceDropdown, setPublishingServiceDropdown] =
    useState(false);
  const [educationResourcesDropdown, setEducationResourcesDropdown] =
    useState(false);
  const [professionalDevelopmentDropdown, setProfessionalDevelopmentDropdown] =
    useState(false);
  const toggleShopDropDown = () => {
    setreasearchLibraryDropDown(false);
    setPublishingServiceDropdown(false);
    setEducationResourcesDropdown(false);
    setProfessionalDevelopmentDropdown(false);
    setShopDropDown(!shopDropDown);
  };

  const toggleReasearchLibraryDropDown = () => {
    setShopDropDown(false);
    setPublishingServiceDropdown(false);
    setEducationResourcesDropdown(false);
    setProfessionalDevelopmentDropdown(false);
    setreasearchLibraryDropDown(!reasearchLibraryDropDown);
  };

  const togglePublishingServiceDropdown = () => {
    setShopDropDown(false);
    setreasearchLibraryDropDown(false);
    setEducationResourcesDropdown(false);
    setProfessionalDevelopmentDropdown(false);
    setPublishingServiceDropdown(!publishingServiceDropdown);
  };

  const toggleEducationResourcesDropdown = () => {
    setShopDropDown(false);
    setreasearchLibraryDropDown(false);
    setPublishingServiceDropdown(false);
    setProfessionalDevelopmentDropdown(false);
    setEducationResourcesDropdown(!educationResourcesDropdown);
  };

  const toggleProfessionalDevelopmentDropdown = () => {
    setShopDropDown(false);
    setreasearchLibraryDropDown(false);
    setPublishingServiceDropdown(false);
    setEducationResourcesDropdown(false);
    setProfessionalDevelopmentDropdown(!professionalDevelopmentDropdown);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(
        `/search?query=${encodeURIComponent(searchTerm)}&sort=rel&page=1&size=2`
      );
    }
  };

  const handleInputBoxValue = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };
  return (
    <div>
      <header className="search-header">
        <div className="upperRowInHeader">
          <nav className="navbar">
            <Link to={`/`}>
              <img className="brand-logo" src={logo} alt="logo" />
            </Link>
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleInputBoxValue}
              onKeyDown={handleSearch}
            />
            <div>
              <a href="/my-account">
                <img className="account-icon" src={account} alt="account" />
              </a>
              <a href="/cart">
                <img className="cart-icon" src={cartIcon} alt="cart icon" />
              </a>
              <a href="/menu">
                <img className="nav-icon" src={navIcon} alt="nav icon" />
              </a>
            </div>
          </nav>
        </div>
        <div className="lowerRowInHeader">
          <ul className="nav-menu">
            <li onClick={toggleShopDropDown}>
              <span className={`dropdown ${shopDropDown ? "active" : ""}`}>
                Shop <img src={arrowDown} alt="arrow-down" />
              </span>
            </li>
            <li onClick={toggleReasearchLibraryDropDown}>
              <span
                className={`dropdown ${
                  reasearchLibraryDropDown ? "active" : ""
                }`}
              >
                Research Libraries <img src={arrowDown} alt="arrow-down" />
              </span>
            </li>
            <li onClick={togglePublishingServiceDropdown}>
              <span
                className={`dropdown ${
                  publishingServiceDropdown ? "active" : ""
                }`}
              >
                Publishing Services <img src={arrowDown} alt="arrow-down" />
              </span>
            </li>
            <li onClick={toggleEducationResourcesDropdown}>
              <span
                className={`dropdown ${
                  educationResourcesDropdown ? "active" : ""
                }`}
              >
                Education Resources <img src={arrowDown} alt="arrow-down" />
              </span>
            </li>
            <li onClick={toggleProfessionalDevelopmentDropdown}>
              <span
                className={`dropdown ${
                  professionalDevelopmentDropdown ? "active" : ""
                }`}
              >
                Professional Development{" "}
                <img src={arrowDown} alt="arrow-down" />
              </span>
            </li>
            <li className="institutionButtonHeader">
              <a href="/business">Institutions and Businesses</a>
            </li>
          </ul>
        </div>
      </header>
      {shopDropDown && <ShopDropdown />}
      {reasearchLibraryDropDown && <ReasearchLibraryDropDown />}
      {publishingServiceDropdown && <PublishingServicesDropdown />}
      {educationResourcesDropdown && <EducationResourcesDropdown />}
      {professionalDevelopmentDropdown && <ProfessionalDevelopmentDropdown />}
    </div>
  );
}

export default PageHeader;
