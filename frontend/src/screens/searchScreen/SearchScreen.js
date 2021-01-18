import React, { useState } from 'react';
import FormSearch from '../../components/formSearch/FormSearch';
import SavedSearches from '../../components/savedSearches/SavedSearches';
import SearchResult from '../../components/searchResult/SearchResult';

const SearchScreen = () =>{
    const [result, setResult] = useState({});
    const [stateDisplay, setStateDisplay] = useState('initial');


    return (
        <>
            <FormSearch functionSetState={setResult} 
                setStateDisplay={setStateDisplay}
            />
            <SearchResult result={result}
                stateDisplay={stateDisplay}
                setStateDisplay={setStateDisplay}
            />
            <SavedSearches/>
        </>
    );
}

export default SearchScreen