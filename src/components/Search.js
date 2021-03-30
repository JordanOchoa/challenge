import './SearchBar.css';
import Search from '../Assets/Icons/Search.svg';
import React, { useState, useEffect } from 'react';

function SearchBar (props) {
    const [searchValue, setSearchValue] = useState('Busca un pokemon!')
    return (
        <div className="container">
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)} className="inputSearch" type="text"></input>
            <div onClick={event => props.onSearch(searchValue)} className="imgSearch">
                <img className="img" src={Search} alt="" width="10" height="10"></img>
            </div>
        </div>
    )
}

export default SearchBar