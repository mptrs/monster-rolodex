import React from 'react';

import './search-box.styles.css';

//functional component
// get some props and return html
export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className="search"
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);
