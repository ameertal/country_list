import "./CounrtryList.css";
import { CountryModel } from "../../../Models/CountryModel";
import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import CountryCard from "../../Shared/CountryCard/CountryCard";
import { StringifyOptions } from "querystring";

function CountryList(): JSX.Element {
  const countriesUrl = "https://restcountries.com/v2/all";
  const tableHeaders = ["Country", "Capital", "Population", "Flag"];
  const [countries, setCountries] = useState<CountryModel[]>([]);
  const [filtertext, setFiltertext] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setFiltertext(e.target.value);
  };

  const filterCountries = countries.filter((el) => {
    return (
      el.name.toLowerCase().includes(filtertext.toLowerCase()) ||
      el.capital?.toLowerCase().includes(filtertext.toLowerCase())
    );
  });

  // Mounting
  useEffect(() => {
    axios
      .get<CountryModel[]>(countriesUrl)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // ---------------------------------------------------------
  const getInitialState = () => {
    const display = "Table";
    return display;
  };
  const [display, setDisplay] = useState<string>(getInitialState);
  const handleChange1 = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplay(e.target.value);
  };
  // ---------------------------------------------------------

  return (
    <div className="CountryList">
      <span>Display results by: </span>
      <select value={display} onChange={handleChange1}>
        <option value="Table">Table</option>
        <option value="Cards">Cards</option>
      </select>
      <br /><br />
      <span>Filter Country by name: </span>
      <input type="text" onChange={handleChange} />

      {display === "Table" ? (
        <div>
          <h1>Country List using Table</h1>
          <table>
            <thead>
              <tr>
                {tableHeaders.map((str) => (
                  <th key={str}>{str}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterCountries.map((c) => (
                <tr key={"country" + c.name}>
                  <td>{c.name} </td>
                  <td>{c.capital}</td>
                  <td>{c.population.toLocaleString("he-IL")}</td>
                  <td>
                    <img src={c.flag} alt={c.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1>Country List using Cards</h1>
          <div className="cards-display">
            {filterCountries.map((c) => (
              <CountryCard key={"country" + c.name} country={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryList;

// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let randomC = () => {
//   return characters.charAt(Math.floor(Math.random() * characters.length));
// };

// let xxx = randomC();
//let xxx = filtertext;
//console.table(filterCountries);
