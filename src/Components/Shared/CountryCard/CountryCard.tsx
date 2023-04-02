import { CountryModel } from "../../../Models/CountryModel";
import "./CountryCard.css";


interface CountryCardProps{
    country: CountryModel;
}

function CountryCard(props:CountryCardProps): JSX.Element {
    return (
        <div className="CountryCard">
            <p>name : {props.country.name}</p>
            <p>capital : {props.country.capital}</p>
            <p>population : {props.country.population}</p>            
            <img src={props.country.flag} alt={props.country.name} />
        </div>
    );
}

export default CountryCard;
