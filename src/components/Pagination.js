import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "../css/Pagination.css";

function Pagination(props) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  let updatedSearchParams = new URLSearchParams(queryParams.toString());
  //Using queryParam instead of searchParams solved the authro query issue

  //let updatedSearchParams = new URLSearchParams(searchParams.toString());
  const [currentPage, setCurrentPage] = useState(1); // Default current page
  const [pageInput, setPageInput] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Number of items per page
  const itemsPerPageOptions = [1, 2, 5, 10];

  //to handle the items per page dropdown
  const handleItems = (e) => {
    setItemsPerPage(e.target.value);
    updatedSearchParams.set("size", e.target.value);
    setSearchParams(updatedSearchParams.toString());
  };

  const handlePreviousButtonClick = () => {
    setPageInput(currentPage - 1);
    setCurrentPage(currentPage - 1);
    updatedSearchParams.set("page", currentPage - 1);
    setSearchParams(updatedSearchParams.toString());
  };

  const handleNextButtonClick = () => {
    setPageInput(currentPage + 1);
    setCurrentPage(currentPage + 1);
    updatedSearchParams.set("page", currentPage + 1);
    setSearchParams(updatedSearchParams.toString());
  };

  // Update the page based on URL parameter change
  useEffect(() => {
    const urlPage = parseInt(new URLSearchParams(location.search).get("page"));
    if (urlPage !== currentPage) {
      setPageInput(urlPage);
      setCurrentPage(urlPage);
    }
  }, [location.search]);

  // Update the items per page based on URL parameter change
  useEffect(() => {
    const urlSize = parseInt(new URLSearchParams(location.search).get("size"));
    if (urlSize !== itemsPerPage) {
      setItemsPerPage(urlSize);
      updatedSearchParams.set("page", 1);
      setSearchParams(updatedSearchParams.toString());
    }
  }, [location.search]);

  // Calculate pagination
  const startIndex = 1;
  const totalProduct = props.total;
  const endIndex = Math.ceil(totalProduct / itemsPerPage);

  //Upon directly changing the input box manually
  const handlePageNo = (e) => {
    const current = parseInt(e.target.textContent);
    setPageInput(current);
    setCurrentPage(current);
    updatedSearchParams.set("page", current);
    setSearchParams(updatedSearchParams.toString());
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 4; // Maximum visible page buttons

    if (endIndex <= maxPageButtons) {
      for (let i = 1; i <= endIndex; i++) {
        pageNumbers.push(
          <li
            key={i}
            className={`numbers ${i === currentPage ? "current-page" : ""}`}
          >
            <button onClick={handlePageNo}>{i}</button>
          </li>
        );
      }
    } else {
      if (currentPage <= maxPageButtons - 2) {
        // When on the left side of pagination
        for (let i = 1; i <= maxPageButtons - 1; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`numbers ${i === currentPage ? "current-page" : ""}`}
            >
              <button onClick={handlePageNo}>{i}</button>
            </li>
          );
        }
        pageNumbers.push(<li key="ellipsis">.</li>);
        pageNumbers.push(
          <li key={endIndex} className="numbers">
            <button onClick={handlePageNo}>{endIndex}</button>
          </li>
        );
      } else if (currentPage >= endIndex - maxPageButtons + 2) {
        // When on the right side of pagination
        pageNumbers.push(
          <li key={1} className="numbers">
            <button onClick={handlePageNo}>1</button>
          </li>
        );
        pageNumbers.push(<li key="ellipsis">.</li>);
        for (let i = endIndex - maxPageButtons + 2; i <= endIndex; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`numbers ${i === currentPage ? "current-page" : ""}`}
            >
              <button onClick={handlePageNo}>{i}</button>
            </li>
          );
        }
      } else {
        // When in the middle of pagination
        pageNumbers.push(
          <li key={1} className="numbers">
            <button onClick={handlePageNo}>1</button>
          </li>
        );
        pageNumbers.push(<li key="ellipsis">.</li>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={`numbers ${i === currentPage ? "current-page" : ""}`}
            >
              <button onClick={handlePageNo}>{i}</button>
            </li>
          );
        }
        pageNumbers.push(<li key="ellipsis">.</li>);
        pageNumbers.push(
          <li key={endIndex} className="numbers">
            <button onClick={handlePageNo}>{endIndex}</button>
          </li>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <span className="page-display">
        Displaying : {startIndex + itemsPerPage * (pageInput - 1)} -{" "}
        {itemsPerPage * pageInput} of {props.total}
      </span>
      <button
        className="prev"
        disabled={currentPage <= startIndex}
        onClick={handlePreviousButtonClick}
      >
        <span class="left-arrow">&lt; Prev</span>
      </button>
      <ul className="pageNumbers">{generatePageNumbers()}</ul>
      <button
        className="next"
        disabled={currentPage >= endIndex}
        onClick={handleNextButtonClick}
      >
        <span class="right-arrow">Next &gt;</span>
      </button>
      {/*<div className="itemsDropdown">
        <label>Items per page:</label>
        <select id="itemsPerPage" value={itemsPerPage} onChange={handleItems}>
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
          </div>*/}
    </div>
  );
}

export default Pagination;
