import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuthorizationToken } from "./Auth";
import { fetchProductDetails, setAuthToken } from "./GetProductAPI";
import PageHeader from "./pageHeader";
import Footer from "./Footer";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch and set the product details
    const fetchProduct = async () => {
      try {
        // Get the authorization token
        const token = await getAuthorizationToken();
        setAuthToken(token);
        console.log(token);

        // Fetch the product details using the token
        const productDetails = await fetchProductDetails(productId);
        setProduct(productDetails);
        console.log(productDetails);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product details available.</div>;
  }

  return (
    <div>
      <PageHeader />
      <div class="product-details-page">
        <div class="container">
          <div class="yCmsContentSlot">
            <ul class="breadcrumbs" id="breadcrumbStyle">
              <li id="breadcrumbHome">
                <a href="/en-us">Home</a>
              </li>

              <li>
                <a href="https://www.wiley.com/en-us/Subjects-c-subjects">
                  Subjects
                </a>
              </li>
              <li>
                <a href="https://www.wiley.com/en-us/General+%26+Introductory+Computer+Science-c-CS00">
                  General &amp; Introductory Computer Science
                </a>
              </li>
              <li>
                <a href="https://www.wiley.com/en-us/General+%26+Introductory+Computer+Science/Object+Technologies-c-CS60">
                  Object Technologies
                </a>
              </li>
              <li>
                <a href="https://www.wiley.com/en-us/General+%26+Introductory+Computer+Science/Object+Technologies+Java-c-CS66">
                  Object Technologies - Java
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row product-details-wr">
            <div class="col-xs-12 col-sm-2">
              <div class="image-gallery">
                <div class="carousel">
                  <div
                    id="pdp-carousel-sync1"
                    class="owl-carousel owl-loaded owl-drag"
                  >
                    <div class="owl-stage-outer">
                      <div
                        class="owl-stage"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          transition: "all 0s ease 0",
                          width: "207px",
                        }}
                      >
                        <div
                          class="owl-item active"
                          style={{
                            width: "206.656px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <div class="item">
                            <div class="item-image">
                              <img
                                class="lazyOwl"
                                src={product.images[0].url}
                                data-src={product.images[0].url}
                                data-zoom-image=""
                                alt={product.images[0].altText}
                              />
                            </div>
                          </div>
                          <img
                            role="presentation"
                            alt=""
                            src={product.images[0].url}
                            class="zoomImg"
                            style={{
                              position: "absolute",
                              top: "0px",
                              left: "0px",
                              opacity: "0",
                              width: "240px",
                              height: "300.8px",
                              border: "none",
                              maxWidth: "none",
                              maxHeight: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="dropdown-block read-excerpt hidden-xs">
                <button
                  data-toggle="collapse"
                  data-target="#read-excerpt-files"
                  class="collapsed"
                >
                  Read an Excerpt
                </button>
                <nav
                  id="read-excerpt-files"
                  class="collapse"
                  style={{ height: "1px" }}
                >
                  <a
                    href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-34.pdf"
                    target="_blank"
                    title=""
                  >
                    Table of Contents (PDF)
                  </a>
                  <a
                    href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-29.pdf"
                    target="_blank"
                    title=""
                  >
                    Chapter 1 (PDF)
                  </a>
                  <a
                    href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-19.pdf"
                    target="_blank"
                    title=""
                  >
                    Index (PDF)
                  </a>
                </nav>
              </div>
              <input
                type="hidden"
                value={`https://www.wiley.com/en-us/exportProduct/pdf/${product.code}`}
                id="productFlyerURL"
              />
              <div class="page-sections-menu initialized">
                <span class="active-pointer" style={{ top: "64px" }}></span>
                <ul>
                  <li class="active">
                    <a
                      href="#download-product-flyer"
                      onclick="downloadProductFlyer()"
                      rel="nofollow"
                    >
                      Download Product Flyer
                    </a>
                  </li>
                  <li>
                    <a href="#description-section" title="Description">
                      Description
                    </a>
                  </li>
                  <li>
                    <a href="#author-section" title="About the Author">
                      About the Author
                    </a>
                  </li>
                  <li>
                    <a href="#permission-section" title="Permissions">
                      Permissions
                    </a>
                  </li>
                  <li>
                    <a href="#content-section" title="Table of contents">
                      Table of contents
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xs-12 col-sm-10 product-details-content">
              <section class="product-details-sidebar">
                <div class="product-add-to-cart">
                  <div class="type-of-book">
                    <span class="hidden-xs">Selected type:</span>
                    <b>E-Book</b>
                  </div>

                  <div class="product-qty site-form">
                    <div class="form-field">
                      <div class="product-quantity">
                        <input
                          type="hidden"
                          class="pquantity9781119861683"
                          aria-label="product quantity"
                          value="1"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="product-price-wr">
                    <p class="pr-price">{product.price.formattedValue}</p>
                  </div>
                </div>
              </section>
              <section class="product-details">
                <h1 class="hidden-xs">{product.name}</h1>
                <div class="product-summary">
                  <p class="author">
                    <a
                      class="product-authors"
                      href="/en-us/search?filters%5Bauthor%5D=Barry+Burd&amp;pq=++"
                    >
                      Barry Burd
                    </a>
                  </p>
                  <p>
                    <span>ISBN: 978-1-119-86168-3</span>
                    <span>March 2022</span>
                    <span>512&nbsp;Pages</span>
                  </p>
                </div>
              </section>
              <section class="choose-type-of-book">
                <section
                  class="container fullTabWidth"
                  id="productTableBodySection"
                >
                  <section class="row">
                    <div class="col-sm-12">
                      <div id="eBundlePlpTabMainTabPanel" role="tabpanel">
                        <ul
                          id="eBundlePlpTab"
                          class="nav nav-tabs eBundlePlpTab hidden-xs"
                          role="tablist"
                        >
                          <li role="presentation" class="active">
                            <a
                              href="#E-Book"
                              aria-controls="digital"
                              role="tab"
                              data-toggle="tab"
                              class="tabPanelVal groupNameWithPrice"
                              onclick="showVariantOption('/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861683','E-Book')"
                            >
                              <div class="productButtonGroupName">E-Book</div>
                              <div class="productButtonPrice">
                                Starting at just&nbsp;$18.00
                              </div>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#Print"
                              aria-controls="digital"
                              role="tab"
                              data-toggle="tab"
                              class="tabPanelVal groupNameWithPrice"
                              onclick="showVariantOption('/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861645','Print')"
                            >
                              <div class="productButtonGroupName">Print</div>
                              <div class="productButtonPrice">
                                Starting at just&nbsp;$23.99
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div
                          class="panel-group visible-xs"
                          id="eBundlePlpTab-accordion"
                        ></div>
                        <div
                          class="tab-content tabContentHeight hidden-xs"
                          id="tabContentStyle"
                        >
                          <div
                            role="tabpanel"
                            class="tab-pane active"
                            id="E-Book"
                          >
                            <input
                              type="hidden"
                              name="semesterAccessType"
                              value=""
                            />
                            <input
                              type="hidden"
                              name="wileyPlus"
                              value="false"
                            />
                            <input
                              type="hidden"
                              name="showWileyPlusNgProducts"
                              value="true"
                            />
                            <input type="hidden" name="rguroo" value="false" />
                            <div class="tab-content">
                              <form action="#">
                                <div class="row">
                                  <div class="col-sm-6 col-xs-7 typeOfProductCol">
                                    <input
                                      type="radio"
                                      class="overrideGenricRadioCss"
                                      name="purchasedProduct"
                                      id="9781119861683"
                                      value="/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861683"
                                      onclick="variantProductLoad('/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861683')"
                                      checked=""
                                    />
                                    <span class="typeOfProductSpan">
                                      E-Book
                                    </span>
                                    <i
                                      role="menuitem"
                                      tabindex="0"
                                      aria-label="Purchase option description"
                                      data-content='<p>Information about E-books:</p>
<ul>
	<li>To download and read E-books offered from Wiley.com, you will access either Wiley Reader or the VitalSource Bookshelf Software.</li>
	<li>E-books have DRM protection on them, which means only the person who purchases and downloads the e-book can access it.</li>
	<li>E-books are non-returnable and non-refundable.</li>
	<li>To learn more about our e-books, please refer to our&amp;nbsp;<a href="https://www.wiley.com/wiley-ebooks" target="_blank">FAQ</a>.</li>
</ul>
'
                                      class="icon-info black"
                                      data-original-title=""
                                      title=""
                                    ></i>
                                  </div>

                                  <div class="col-sm-2 col-xs-2 stockMessage"></div>
                                  <div class="col-sm-4 col-xs-3 typeOfProductPriceCol">
                                    <span class="item-price item-price-value">
                                      $18.00
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div role="tabpanel" class="tab-pane" id="Print">
                            <input
                              type="hidden"
                              name="semesterAccessType"
                              value=""
                            />
                            <input
                              type="hidden"
                              name="wileyPlus"
                              value="false"
                            />
                            <input
                              type="hidden"
                              name="showWileyPlusNgProducts"
                              value="true"
                            />
                            <input type="hidden" name="rguroo" value="false" />
                            <div class="tab-content">
                              <form action="#">
                                <div class="row">
                                  <div class="col-sm-6 col-xs-7 typeOfProductCol">
                                    <input
                                      type="radio"
                                      class="overrideGenricRadioCss"
                                      name="purchasedProduct"
                                      id="9781119861645"
                                      value="/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861645"
                                      onclick="variantProductLoad('/en-us/Java+For+Dummies%2C+8th+Edition-p-9781119861645')"
                                    />
                                    <span class="typeOfProductSpan">
                                      Paperback
                                    </span>
                                  </div>

                                  <div class="col-sm-2 col-xs-2 stockMessage"></div>
                                  <div class="col-sm-4 col-xs-3 typeOfProductPriceCol">
                                    <span class="priceSavingsTag">
                                      Save 20%
                                    </span>
                                    <span class="pdpPageProductActualPrice">
                                      <span class="pdpPageProductActualPriceCurrency">
                                        $
                                      </span>
                                      <span class="pdpPageProductActualPriceValue">
                                        29.99
                                      </span>
                                    </span>
                                    <span class="item-price item-price-value pdpPageCurrentValue">
                                      $23.99
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>

                <div class="product-editions"></div>
                <div class="dropdown-block read-excerpt visible-xs">
                  <button
                    data-toggle="collapse"
                    data-target="#read-excerpt-files-mobile"
                    class="collapsed"
                  >
                    Read an Excerpt
                  </button>
                  <nav
                    id="read-excerpt-files-mobile"
                    class="collapse"
                    style={{ height: "1px" }}
                  >
                    <a
                      href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-34.pdf"
                      target="_blank"
                      title=""
                    >
                      Table of Contents (PDF)
                    </a>
                    <a
                      href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-29.pdf"
                      target="_blank"
                      title=""
                    >
                      Chapter 1 (PDF)
                    </a>
                    <a
                      href="https://media.wiley.com/product_data/excerpt/40/11198616/1119861640-19.pdf"
                      target="_blank"
                      title=""
                    >
                      Index (PDF)
                    </a>
                  </nav>
                </div>
              </section>

              <a
                href="/en-us/exportProduct/pdf/9781119861683"
                target="_blank"
                id="downloadPDFPdpMobile"
                rel="nofollow"
              >
                Download Product Flyer
              </a>
              <section id="download-product-flyer" class="page-section">
                <h2 class="section-title">Download Product Flyer</h2>
                <div class="description">
                  Download Product Flyer is to download PDF in new tab. This is
                  a dummy description. Download Product Flyer is to download PDF
                  in new tab. This is a dummy description. Download Product
                  Flyer is to download PDF in new tab. This is a dummy
                  description. Download Product Flyer is to download PDF in new
                  tab. This is a dummy description.
                </div>
              </section>
              <section
                id="description-section"
                class="page-section product-long-description"
              >
                <h2 class="section-title">Description</h2>
                <div class="description">
                  <p>
                    <b>
                      Learn to write practical, reusable code with the straight
                      forward tutorials and tips in the newest edition of this
                      For Dummies bestseller{" "}
                    </b>
                  </p>{" "}
                  <p>
                    Do you speak Java? No, we’re not talking about your morning
                    cup ‘o joe. We mean the world’s most popular programming
                    language that runs on almost any computer!
                  </p>{" "}
                  <p>
                    If you’re looking to get started—or up your game—with Java,
                    then <i>Java For Dummies</i>&nbsp;is the guide you need.In
                    this book, you’ll:
                  </p>{" "}
                  <ul>
                    {" "}
                    <li>Take control of your program flow</li>{" "}
                    <li>Program with classes, objects, and methods</li>{" "}
                    <li>Use Java's functional programming features</li>{" "}
                    <li>
                      Explore Java 17, the latest long-term support release
                    </li>{" "}
                  </ul>{" "}
                  <p>
                    This up-to-date handbook covers the latest developments in
                    Java, including the new ‘switch’ statement syntax. So, if
                    you’re ready to dive into one of the most practical (and
                    coolest!)&nbsp;programming languages around, it’s time you
                    picked up<i>Java For Dummies.</i>
                  </p>
                </div>
              </section>
              <section
                id="author-section"
                class="page-section section-author-wr"
              >
                <div class="page-section-content section-author">
                  <h2
                    data-toggle="collapse"
                    data-target="#author-section-item"
                    class="section-title collapsed"
                  >
                    About the Author
                  </h2>
                  <div id="author-section-item" class="collapse">
                    <p>
                      <b>Dr. Barry Burd</b> holds an M.S. in Computer Science
                      from Rutgers University and a Ph.D. in Mathematics from
                      the University of Illinois. Barry is also the author of{" "}
                      <i>
                        Beginning Programming with Java For Dummies, Java for
                        Android For Dummies,
                      </i>{" "}
                      and <i>Flutter For Dummies.</i>
                    </p>{" "}
                  </div>
                </div>
                <div id="permission-section" class="section-permissions">
                  <h2
                    data-toggle="collapse"
                    data-target="#permission-section-item"
                    class="section-title collapsed"
                  >
                    Permissions
                  </h2>
                  <div id="permission-section-item" class="collapse">
                    <p>
                      <a
                        href="https://s100.copyright.com/AppDispatchServlet?publisherName=wiley&amp;publication=Book&amp;title=Java For Dummies%2C 8th Edition&amp;bookTitle=Java For Dummies%2C 8th Edition&amp;publicationDate=APR+2022&amp;author=Barry+Burd&amp;sc=US&amp;numPages=0&amp;copyright=&amp;contentID=978-1-119-86164-5&amp;orderBeanReset=True"
                        target="_blank"
                      >
                        Request permission
                      </a>{" "}
                      to reuse content from this site
                    </p>
                  </div>
                </div>
              </section>
              <section id="content-section" class="page-section">
                <div class="page-section-content">
                  <h2
                    data-toggle="collapse"
                    data-target="#content-section-item"
                    class="section-title collapsed"
                  >
                    Table of contents
                  </h2>
                  <div id="content-section-item" class="collapse">
                    <p>Introduction 1</p>{" "}
                    <p>
                      <b>Part 1: Getting Started with Java 5</b>
                    </p>{" "}
                    <p>Chapter 1: All about Java 7</p>{" "}
                    <p>Chapter 2: All about Software 21</p>{" "}
                    <p>Chapter 3: Using the Basic Building Blocks 33</p>{" "}
                    <p>
                      <b>Part 2: Writing Your Own Java Programs 55</b>
                    </p>{" "}
                    <p>
                      Chapter 4: Making the Most of Variables and Their Values
                      57
                    </p>{" "}
                    <p>
                      Chapter 5: Controlling Program Flow with Decision-Making
                      Statements 97
                    </p>{" "}
                    <p>Chapter 6: Controlling Program Flow with Loops 135</p>{" "}
                    <p>
                      <b>
                        Part 3: Working with the Big Picture: Object-Oriented
                        Programming 155
                      </b>
                    </p>{" "}
                    <p>Chapter 7: The Inside scOOP 157</p>{" "}
                    <p>
                      Chapter 8: Saving Time and Money: Reusing Existing Code
                      199
                    </p>{" "}
                    <p>Chapter 9: Constructing New Objects 233</p>{" "}
                    <p>
                      <b>Part 4: Smart Java Techniques 259</b>
                    </p>{" "}
                    <p>
                      Chapter 10: Putting Variables and Methods Where They
                      Belong 261
                    </p>{" "}
                    <p>Chapter 11: Using Arrays to Juggle Values 295</p>{" "}
                    <p>
                      Chapter 12: Using Collections and Streams (When Arrays
                      Aren’t Good Enough) 323
                    </p>{" "}
                    <p>
                      Chapter 13: Looking Good When Things Take Unexpected Turns
                      355
                    </p>{" "}
                    <p>
                      Chapter 14: Sharing Names among the Parts of a Java
                      Program 385
                    </p>{" "}
                    <p>Chapter 15: Fancy Reference Types 411</p>{" "}
                    <p>Chapter 16: Java’s Juggling Act 431</p>{" "}
                    <p>Chapter 17: Using Java Database Connectivity 451</p>{" "}
                    <p>
                      <b>Part 5: The Part of Tens 463</b>
                    </p>{" "}
                    <p>Chapter 18: Ten Packs of Java Websites 465</p>{" "}
                    <p>
                      Chapter 19: Ten Bits of Advice for New Software Developers
                      469
                    </p>{" "}
                    Index 475
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
