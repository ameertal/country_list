import { useEffect, useState } from "react";
import "./CounrtryList.css";
import { CountryModel } from "../../../Models/CountryModel";
import axios from "axios";
import CountryCard from "../../Shared/CountryCard/CountryCard";
import RandomChar from "../../Shared/RandomChar/RandomChar";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomC = () => {
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

// console.log(randomC());

function CounrtryList(): JSX.Element {
  const [countries, setCountries] = useState<CountryModel[]>([]);
  const tableHeaders = ["Country", "Capital", "Population", "Flag"];
  let xxx = randomC();
  let newArray = countries.filter(function (el) {
    return el.name.startsWith(xxx);
  });
  console.table(newArray);
  // Mounting
  useEffect(() => {
    axios
      .get<CountryModel[]>("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="CounrtryList">
      {/* <h1>Country List</h1>
            <div className="cards-display">
                {countries.map(c => <CountryCard key={'country' + c.name} country={c} />)}
            </div> */}

      <h1>Country List using Table</h1>
      <h2>
        <RandomChar />
      </h2>
      <h3>random {xxx}</h3>
      <h3>len {newArray.length}</h3>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((str) => (
              <th key={str}>{str}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {newArray.map((c) => (
            <tr key={"c" + "country" + c.name}>
              <td>{c.name} </td>
              <td>{c.capital}</td>
              <td>{c.population.toLocaleString("en-US")}</td>
              <td>
                <img src={c.flag} alt={c.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CounrtryList;
