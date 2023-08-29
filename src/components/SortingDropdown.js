import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import '../css/SortingDropdown.css';

function SortingDropdown(){
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    let updatedSearchParams = new URLSearchParams(searchParams.toString());
   
    const [sortBy, setSortBy] = useState('rel');
    const sortOptions = [
        { value: 'rel', label: 'Releavance' },
        { value: 'name', label: 'Product\'s Name (A to Z)' },
        { value: 'author', label: 'Author\'s Name (A to Z)' },
        { value: 'price', label: 'Product\'s Price' },
    ];

    const handleChange = (e) => {
        setSortBy(e.target.value);
        updatedSearchParams.set('sort', e.target.value);
        setSearchParams(updatedSearchParams.toString());
    }

    // Update the sort option based on URL parameter change
    useEffect(() => {
        const urlSortBy = new URLSearchParams(location.search).get('sort');
        if (urlSortBy && sortOptions.some(option => option.value === urlSortBy)) {
            setSortBy(urlSortBy);
        }
    }, [location.search]);

    return (
        <div className="sort-dropdown">
            <label htmlFor="sort">Sort by</label>
            <select
                id="sort"
                value={sortBy}
                onChange={handleChange}
            >
            {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
            ))}
            </select>
        </div>
    );
}

export default SortingDropdown;