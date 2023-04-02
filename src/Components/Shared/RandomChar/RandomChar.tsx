import "./RandomChar.css";

function RandomChar(): JSX.Element {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(characters.charAt(Math.floor(Math.random() * characters.length)));
  return (
    <div className="RandomChar">
      Random Char: {characters.charAt(Math.floor(Math.random() * characters.length))}
    </div>
  );
}

export default RandomChar;
