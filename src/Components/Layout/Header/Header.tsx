import "./Header.css";


import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../Redux/searchSlice';
import type { RootState } from '../../../Redux/reducers';
import { useState } from "react";
import { CountryModel } from "../../../Models/CountryModel";

function Header(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const searchResults = useSelector((state: RootState) => state.search.searchResults);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    dispatch(setSearchTerm(value));
  };

  const [countries, setCountries] = useState<CountryModel[]>([]);
  const filterCstore = countries.filter((el) => {
    return (
      el.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      el.capital?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="Header">
      <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
      <h1>Country list</h1>
    </div>
  );
}

export default Header;
