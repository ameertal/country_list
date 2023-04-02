import "./About.css";

function About(): JSX.Element {
  return (
    <div className="About">
      <p>
        This site shows a list of countries retrieved from:<br/>
        https://restcountries.com/v2/all
      </p>
      <p>
        The list is presented as a table or by cards with search & filter functionality, both by 
        country name and by capital 
      </p>
      <p>
        The site was created using React.ts as a single page application
      </p>      
    </div>
  );
}

export default About;
