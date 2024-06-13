const names = ["Gerald", "Coreliad", "Buster", "George", "Obi", "Fee", "Dinah"];

export default function App() {
  return (
    <div>
      <h1>Maps are cool, and so is you</h1>

      {names.map(function (name) {
        return <p key={name}>{name}</p>;
      })}

      <p>
        The above map will run the callback function for each item in the array
      </p>
      <p>
        map always returns something, so we are using that to our advantage to
        return something onto the page
      </p>
    </div>
  );
}
