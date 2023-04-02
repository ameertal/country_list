import { useEffect, useState } from "react";
import "./CounrtryList.css";
import { CountryModel } from "../../../Models/CountryModel";
import axios from "axios";
import CountryCard from "../../Shared/CountryCard/CountryCard";
import RandomChar from "../../Shared/RandomChar/RandomChar";

function CounrtryList(): JSX.Element {
    const [countries, setCountries] = useState<CountryModel[]>([]);
    const tableHeaders = ["Country", "Capital", "Population", "Flag"];
    // Mounting
    useEffect(() => {
        axios.get<CountryModel[]>('https://restcountries.com/v2/all')
            .then(res => { setCountries(res.data) })
            .catch(err => { console.log(err); })
    }, []);

    return (
        <div className="CounrtryList">
			{/* <h1>Country List</h1>
            <div className="cards-display">
                {countries.map(c => <CountryCard key={'country' + c.name} country={c} />)}
            </div> */}


            <h1>Country List using Table</h1>
            <h2><RandomChar/></h2>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map(str => <th key={str}>{str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {countries.map(c =>
                        <tr key={'c'+'country' + c.name}>
                            <td>{c.name}  </td>
                            <td>{c.capital}</td>
                            <td>{c.population.toLocaleString("en-US")}</td>
                            <td>
                                <img src={c.flag} alt={c.name} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CounrtryList;
