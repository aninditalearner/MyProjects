import React, { useState, useEffect } from 'react';
import '../css/FilterPanel.css';

function AuthorFilter({ authors, onAuthorFilterChange }) {
    const [selectedAuthors, setSelectedAuthors] = useState([]);
  
    const handleAuthorChange = (authorName) => {
      const updatedAuthors = selectedAuthors.includes(authorName)
        ? selectedAuthors.filter((author) => author !== authorName)
        : [...selectedAuthors, authorName];
  
      setSelectedAuthors(updatedAuthors);
      onAuthorFilterChange(updatedAuthors);
    };
  
    return (
      <div className="filter-panel">
        <div className='applied-facets'>
            {selectedAuthors.map((appliedAuthor) => (
               <div className='facets-panel-item'>
                 <span>{appliedAuthor}</span>
               </div> 
            ))}
        </div>
        <h3>Filter by Author</h3>
        <div className='facets-panel-list'>
        {authors.map((author) => (
          <label key={author}>
            <input
              type="checkbox"
              value={author}
              checked={selectedAuthors.includes(author)}
              onChange={() => handleAuthorChange(author)}
            />
            {author}
          </label>
        ))}
        </div>
      </div>
    );
  }

export default AuthorFilter;