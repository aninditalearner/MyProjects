import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import '../css/Pagination.css';

function Pagination(props) {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
    const [currentPage, setCurrentPage] = useState(1); // Default current page
    const [pageInput, setPageInput] = useState(1);
    const itemsPerPage = 2; // Number of items per page

    const handlePreviousButtonClick = () => {
        setPageInput(currentPage - 1);
        setCurrentPage(currentPage - 1);
        updatedSearchParams.set('page', currentPage - 1);
        setSearchParams(updatedSearchParams.toString());
    }

    const handleNextButtonClick = () => {
        setPageInput(currentPage + 1);
        setCurrentPage(currentPage + 1);
        updatedSearchParams.set('page', currentPage + 1);
        setSearchParams(updatedSearchParams.toString());
    }

    // Update the page based on URL parameter change
    useEffect(() => {
        const urlPage = parseInt(new URLSearchParams(location.search).get('page'));
        if (urlPage!=currentPage) {
            setPageInput(urlPage);
            setCurrentPage(urlPage);
            updatedSearchParams.set('page', urlPage);
            setSearchParams(updatedSearchParams.toString());
        }
    }, [location.search]);

    // Calculate pagination
    const startIndex = 1;
    const totalProduct = props.total;
    const endIndex = Math.ceil(totalProduct/itemsPerPage);

    //Upon directly changing the input box manually
    const handlePageNo = (e) => {
        if( e.key === 'Enter' ){
         const current = parseInt(e.target.value);
         if(current>endIndex){
            setPageInput(endIndex);
            setCurrentPage(endIndex);
            updatedSearchParams.set('page', endIndex);
            setSearchParams(updatedSearchParams.toString());
         }
         else if(current<startIndex){
            setPageInput(startIndex);
            setCurrentPage(startIndex);
            updatedSearchParams.set('page', endIndex);
            setSearchParams(updatedSearchParams.toString());
         }
         else{
            setPageInput(current);
            setCurrentPage(current);
            updatedSearchParams.set('page', current);
            setSearchParams(updatedSearchParams.toString());
         }
        }
        }
    
    //To handle the page no input bos value
    const handleInputBoxValue =(e) => {
        const page = e.target.value;
        setPageInput(page);
    }
    return (
            
        <div className="pagination">
            <button
            disabled={currentPage <= startIndex}
            onClick={handlePreviousButtonClick}
            >
            <span class="left-arrow">&lt;</span>
            </button>
            <input 
            type="number" 
            name="page" 
            aria-label="Page Number Input" 
            value={pageInput} 
            onChange={handleInputBoxValue}
            onKeyDown={handlePageNo}
            />
            <button
            disabled={currentPage >= endIndex}
            onClick={handleNextButtonClick}
            >
            <span class="right-arrow">&gt;</span>
            </button>
            <span>of {endIndex} pages</span>
        </div>
    );
}

export default Pagination;