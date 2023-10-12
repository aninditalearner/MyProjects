import React from "react";
import "../../css/HeaderElements/HeaderDropdown.css";

const EducationResourcesDropdown = () => {
  return (
    <div class="sub-menu nav-sub">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/education/classroom">
                  <strong class="sub-title">Classroom Resources</strong>
                </a>
              </span>
              <span class="view-all">
                <a href=""></a>
              </span>
            </div>
            <ul>
              <li>
                <a href="/etextbooks-and-courseware">
                  <div class="menu-icon">
                    <img
                      src="https://uat.store.wiley.com/2022-assets/images/icons/course_materials.svg"
                      alt="book reader"
                    />
                  </div>
                  <div class="text">
                    <strong>Course Materials</strong>
                    <span>Course books for your next semester</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.knewton.com/">
                  <div class="menu-icon">
                    <img
                      src="https://uat.store.wiley.com/2022-assets/images/icons/cma.svg"
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
                <a href="https://www.wileyplus.com/">
                  <div class="menu-icon">
                    <img
                      src="https://uat.store.wiley.com/2022-assets/images/icons/wiley_plus.svg"
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
                <a href="https://www.zybooks.com/">
                  <div class="menu-icon">
                    <img
                      src="https://uat.store.wiley.com/2022-assets/images/icons/wiley_vch.svg"
                      alt="zybooks"
                    />
                  </div>
                  <div class="text">
                    <strong>zyBooks</strong>
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
                <a href="/education/learning">
                  <strong class="sub-title">Learning Resources</strong>
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
                      src="https://uat.store.wiley.com/2022-assets/images/icons/search_subjects.svg"
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
                      src="https://uat.store.wiley.com/2022-assets/images/icons/wiley_corporate_solutions.svg"
                      alt="textbook"
                    />
                  </div>
                  <div class="text">
                    <strong>Browse Textbooks</strong>
                    <span>
                      Browse our catalog for academic textbooks and ebooks
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 border-start extras ms-auto">
            <span>
              <strong class="sub-title">Trending on Wiley</strong>
            </span>
            <span class="view-all">
              <a href=""></a>
            </span>
            <ul>
              <li>
                <a
                  href="https://www.wiley.com/network/instructors-students/latest-content/re-entering-the-classroom-in-a-time-of-trauma-and-stress"
                  class="extras"
                >
                  <strong>
                    Re-Entering the Classroom in a Time of Trauma and Stress
                  </strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/instructors-students/education-trends/cultivating-an-inclusive-learning-experience"
                  class="extras"
                >
                  <strong>Cultivating an Inclusive Learning Experience</strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/instructors-students/latest-content/staying-the-course-wiley-stay-the-course-grant-winners-tell-their-stories"
                  class="extras"
                >
                  <strong>
                    Wiley "Stay the Course Grant" Winners Tell Their Stories
                  </strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/instructors-students/technology-and-innovation/4-things-to-consider-when-choosing-an-online-platform-thats-right-for-you"
                  class="extras"
                >
                  <strong>
                    4 Things to Consider When Choosing an Online Platform That's
                    Right for You
                  </strong>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationResourcesDropdown;
