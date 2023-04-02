import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			{/* Main */}
            <Routing />
            <Outlet/>
        </div>
    );
}

export default Main;
