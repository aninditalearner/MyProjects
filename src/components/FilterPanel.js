import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import '../css/FilterPanel.css';

function AuthorFilter({ authors, authorsWithCount, onAuthorFilterChange }) {
    const location = useLocation();
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const handleAuthorChange = (authorName) => {
      const updatedAuthors = selectedAuthors.includes(authorName)
        ? selectedAuthors.filter((author) => author !== authorName)
        : [...selectedAuthors, authorName];
  
      setSelectedAuthors(updatedAuthors);
      onAuthorFilterChange(updatedAuthors);
      updateURL(updatedAuthors);
    };

    // Update the author based on URL parameter change
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const selectedAuthors = queryParams.getAll('author');
      if (selectedAuthors.length > 0) {
          setSelectedAuthors(selectedAuthors);
          onAuthorFilterChange(selectedAuthors);
      }
    }, [location.search]);

    //Updating the URL with on Select event
    function updateURL(selectedAuthors) {
      const currentURL = new URL(window.location.href);
      currentURL.searchParams.delete('author'); // Remove any existing author query parameter
      selectedAuthors.forEach((author) => {
        currentURL.searchParams.append('author', author);
      });
      window.history.pushState({}, '', currentURL);
    }

    function handleRemoveFilter(authorName){
        const updatedAuthors = selectedAuthors.filter((author) => author !== authorName);
          onAuthorFilterChange(updatedAuthors);
          updateURL(updatedAuthors);
          setSelectedAuthors(updatedAuthors);
          
    }
  
    return (
      <div className="filter-panel">
        <h2 className='filterHeading'>filters</h2>
        <div className='applied-facets'>
            {selectedAuthors.map((appliedAuthor) => (
               <div className="facets-panel-item" key={appliedAuthor}>
            {appliedAuthor}&nbsp;
            <button
              className="remove-filter-button"
              onClick={() => handleRemoveFilter(appliedAuthor)}
            >
              &#x2716; {/* Close (cross) icon */}
            </button>
          </div> 
            ))}
        </div>
        <div className='facet-categories'>
        <h3 className="filter-section-title">AUTHOR</h3>
        <ul className='facets-panel-list'>
        {authors.map((author) => (
          <label key={author}>
            <input
              type="checkbox"
              value={author}
              checked={selectedAuthors.includes(author)}
              onChange={() => handleAuthorChange(author)}
            />
            {author}<span className='filterCount'>{authorsWithCount[author]}</span>
          </label>
        ))}
        </ul>
        </div>
      </div>
    );
  }

export default AuthorFilter;