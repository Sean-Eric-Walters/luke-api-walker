import React from 'react';
import { navigate } from '@reach/router';

const Search = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const resource = e.target.resource.value;
        const idAPI = e.target.idAPI.value;
        props.setInput(resource, idAPI)
        navigate(`/${resource}/${idAPI}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="resource">Search for: </label>
            {/* <input type="text" name="resource"></input> */}
            <select name="resource" id="resource">
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
            </select>
            <label htmlFor="idAPI">ID: </label>
            <input type="number" name="idAPI"></input>
            <button>Search</button>
        </form>
    )
}

export default Search;