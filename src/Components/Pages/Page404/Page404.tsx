import "./Page404.css";
import img_404 from '../../../Assets/Images/404.jpg';

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <img src={img_404} alt="404" /> 
        </div>
    );
}

export default Page404;
