import "./Menu.css";
import { Link } from "react-router-dom";

function Menu(): JSX.Element {
    return (
        <div className="Menu">			
            <Link to="about">About</Link>
            <Link to="home">Home</Link>
            <Link to="countries">Countries</Link>
        </div>
    );
}

export default Menu;
