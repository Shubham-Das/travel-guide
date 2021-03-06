import React from 'react';

const SearchBox = ({onSearchChange}) =>  {
        return ( 
            <div className = 'pa2'>
                <input 
                    className = 'tc bg-lightest-purple'
                    type = 'search'
                    placeholder = 'search countries'
                    style = {
                        {
                            display: "block",
                            margin: "auto",
                            border: "2px solid #a463f2"
                        }
                    }
                    onChange = {onSearchChange}
                /> 
            </div>
        )
}

export default SearchBox;
