import React from "react";
import "../../css/HeaderElements/HeaderDropdown.css";

const ReasearchLibrary = () => {
  return (
    <div class="sub-menu nav-sub">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/research/libraries">
                  <strong class="sub-title">Research Libraries</strong>
                </a>
              </span>
              <span class="view-all">
                <a href="/research/libraries">(View All)</a>
              </span>
            </div>
            <ul>
              <li>
                <a href="https://onlinelibrary.wiley.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/cochrane_library.svg"
                      alt="books"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley Online Library</strong>
                    <span>
                      Access to journals, books, major reference works, and
                      databases
                    </span>
                  </div>
                </a>
              </li>
              <li class="py-0">
                <div class="menu-icon">
                  <img
                    src="https://www.wiley.com/2022-assets/images/icons/wiley_plus.svg"
                    alt="Oable"
                  />
                </div>
                <div class="text">
                  <strong>Oable</strong>
                  <span>
                    Streamline your institution's open access administration
                    workflows with this management software solution
                  </span>
                </div>
              </li>
              <li class="py-0">
                <a class="pt-0" href="https://www.cochranelibrary.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/cochrane_library.svg"
                      alt="cochrane library"
                    />
                  </div>
                  <div class="text">
                    <strong>Cochrane Library</strong>
                    <span>
                      Access our collection of high-quality, independent
                      evidence to inform
                    </span>
                  </div>
                </a>
              </li>
              <li class="pt-0">
                <a class="pt-0" href="https://www.wileydigitalarchives.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/authorea.svg"
                      alt="wiley digital library"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley Digital Archives</strong>
                    <span>
                      Access centuries-old,unique primary source content on an
                      advance platforms
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/research/journals">
                  <strong class="sub-title">Journal Collections</strong>
                </a>
              </span>
              <span class="view-all">
                <a href="/research/journals">(View All)</a>
              </span>
            </div>
            <ul>
              <li>
                <a href="https://currentprotocols.onlinelibrary.wiley.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/current_protocols.svg"
                      alt="research access"
                    />
                  </div>
                  <div class="text">
                    <strong>Current Protocols</strong>
                    <span>
                      Advance your research with step-by-step techniques
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.wiley-vch.de/de/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_vch.svg"
                      alt="vch"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley VCH</strong>
                    <span>
                      Print and digital publications for the scientific
                      community
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.ernst-und-sohn.de/en/the-publishing-house">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/ernst_and_sohn.svg"
                      alt="publication"
                    />
                  </div>
                  <div class="text">
                    <strong>Ernst and Sohn</strong>
                    <span>
                      Publications for civil engineers in German-speaking
                      countries
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.hindawi.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_open_access_accounts.svg"
                      alt="hindawi journals"
                    />
                  </div>
                  <div class="text">
                    <strong>Hindawi Journals</strong>
                    <span>
                      Open access publishing for the scientific community
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3">
            <div class="category-name">
              <span>
                <a href="/research/databases">
                  <strong class="sub-title">Special Collections</strong>
                </a>
              </span>
              <span class="view-all">
                <a href=""></a>
              </span>
            </div>
            <ul>
              <li>
                <a href="https://sciencesolutions.wiley.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_science_solutions.svg"
                      alt="science solutions"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley Science Solutions</strong>
                    <span>
                      Explore the world's largest spectroscopy collection
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.wileydigitalarchives.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_digital_archives.svg"
                      alt="digital archives"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley Digital Archives</strong>
                    <span>
                      Rare source materials are given a new digital life
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://analyticalscience.wiley.com/">
                  <div class="menu-icon">
                    <img
                      src="https://www.wiley.com/2022-assets/images/icons/wiley_analytical_sciences.svg"
                      alt="analytical science"
                    />
                  </div>
                  <div class="text">
                    <strong>Wiley Analytical Sciences</strong>
                    <span>
                      Find professional and peer-reviewed content in analytical
                      science
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 border-start extras">
            <span>
              <strong class="sub-title">Trending on Wiley</strong>
            </span>
            <span class="view-all">
              <a href=""></a>
            </span>
            <ul>
              <li>
                <a
                  href="https://www.wiley.com/network/this-study-shows-podcast"
                  class="extras"
                >
                  <strong>Listen: This Study Shows Podcast</strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/featured-content/an-article-free-future"
                  class="extras"
                >
                  <strong>An Article Free Future</strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/featured-content/research-supercharged-by-ai"
                  class="extras"
                >
                  <strong>Research Supercharged by AI</strong>
                  <span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.wiley.com/network/researchers/author-experience-innovations/introducing-research-exchange-our-new-submission-platform-for-authors"
                  class="extras"
                >
                  <strong>
                    Introducing Research Exchange, Our New Submission Platform
                    for Authors
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

export default ReasearchLibrary;
