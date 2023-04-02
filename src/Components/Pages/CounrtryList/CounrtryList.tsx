import "./CounrtryList.css";
import { CountryModel } from "../../../Models/CountryModel";
import { useEffect, useState , ChangeEvent} from "react";
import axios from "axios";

function CounrtryList(): JSX.Element {
  const tableHeaders = ["Country", "Capital", "Population", "Flag"];
  const [countries, setCountries] = useState<CountryModel[]>([]);
  const [filtertext, setFiltertext] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setFiltertext(e.target.value);
  };

  let filterCountries = countries.filter(function (el) {
    return el.name.includes(filtertext);
  });
  
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
      <span>Filter Country by name: </span>
      <input type="text" onChange={handleChange}  />      
      {/* <h3>{filtertext}</h3> */}
    
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
  );
}

export default CounrtryList;

// import RandomChar from "../../Shared/RandomChar/RandomChar";
// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let randomC = () => {
//   return characters.charAt(Math.floor(Math.random() * characters.length));
// };
{/* <h2>
<RandomChar />
</h2>
<h3>random {xxx} len {filterCountries.length}</h3> */}
// let xxx = randomC();
//let xxx = filtertext;
//console.table(filterCountries);
