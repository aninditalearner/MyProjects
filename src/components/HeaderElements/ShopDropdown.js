import React from "react";
import "../../css/HeaderElements/HeaderDropdown.css";

function ShopDropdown() {
  return (
    <div class="sub-menu nav-sub">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/shop/books">
                  <strong class="sub-title">Books</strong>
                </a>
              </span>
              <span class="view-all">
                <a href=""></a>
              </span>
            </div>
            <ul>
              <li>
                <a href="/subjects">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/search_subjects.svg"
                      alt="search book"
                    />
                  </div>
                  <div class="text">
                    <strong>Search By Subject</strong>
                    <span>Browse our catalog of books by subject</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/etextbooks-and-courseware">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/mthree.svg"
                      alt="textbook"
                    />
                  </div>
                  <div class="text">
                    <strong>Browse Textbooks</strong>
                    <span>Browse our catalog of textbooks and eBooks</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/Lifestyle-c-LF00">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/journals.svg"
                      alt="lifestyle book"
                    />
                  </div>
                  <div class="text">
                    <strong>Browse Lifestyle Books</strong>
                    <span>
                      Browse our catalog of lifestyle, hobby, and general
                      interest books
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/shop/courseware">
                  <strong class="sub-title">Courseware</strong>
                </a>
              </span>
              <span class="view-all">
                <a href=""></a>
              </span>
            </div>
            <ul>
              <li>
                <a href="https://www.wileyplus.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_plus.svg"
                      alt="Wileyplus"
                    />
                  </div>
                  <div class="text">
                    <strong>WileyPLUS</strong>
                    <span>Ignite student potential</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.knewton.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/knewton_alta.svg"
                      alt="Knewton Alta"
                    />
                  </div>
                  <div class="text">
                    <strong>Knewton Alta</strong>
                    <span>Put achievement within reach</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.zybooks.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_science_solutions.svg"
                      alt="zybooks"
                    />
                  </div>
                  <div class="text">
                    <strong>ZyBooks</strong>
                    <span>
                      Build confidence through interactive STEM learning
                      solutions
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/shop/test-prep">
                  <strong class="sub-title">Admission Tests</strong>
                </a>
              </span>
            </div>
            <ul>
              <li>
                <a href="https://www.efficientlearning.com/act/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/cpa.svg"
                      alt="ACT® Exam Guide"
                    />
                  </div>
                  <div class="text">
                    <strong>ACT® Exam Guide</strong>
                    <span>Pass the first time with personalized exam prep</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.efficientlearning.com/gmat/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/cma.svg"
                      alt="GMAT™ Official Guides"
                    />
                  </div>
                  <div class="text">
                    <strong>GMAT™ Official Guides</strong>
                    <span>Study on your time and propel your career</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 border-start extras">
            <span>
              <a href="/shop/imprints">
                <strong class="sub-title">Brands And Imprints</strong>
              </a>
            </span>
            <span class="view-all">
              <a href="/shop/imprints">(View All)</a>
            </span>
            <ul>
              <li>
                <a href="https://www.dummies.com/" class="extras">
                  <strong>Dummies</strong>
                  <span>
                    Build your skills with trusted guides and expert how to's
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.jklasser.com/" class="extras">
                  <strong>JK Lasser</strong>
                  <span>Easy-to-use tax guide</span>
                </a>
              </li>
              <li>
                <a href="/learn/jossey-bass/" class="extras">
                  <strong>Jossey Bass</strong>
                  <span>
                    Improve student outcomes through meaningful teacher
                    development
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.leadershipchallenge.com/" class="extras">
                  <strong>The Leadership Challenge</strong>
                  <span>
                    Leadership practices that lead to a more effective and
                    engaged organization
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDropdown;
