import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phno, setPhno] = useState("");
  const [lists, setLists] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !phno.trim()
    ) return;

    setLists(currentList => [
      ...currentList,
      {
        id: crypto.randomUUID(),
        first: firstname,
        last: lastname,
        phn: phno
      }
    ]);

    setFirstname("");
    setLastname("");
    setPhno("");
  }
function deleterow(id){
  setLists( currentList =>currentList.filter(list => list.id!==id))
}
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <h5 className="header">First Name</h5>
        <input
          type="text"
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />

        <h5 className="header">Last Name</h5>
        <input
          type="text"
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />

        <h5 className="header">Phone Number</h5>
        <input
          type="text"
          value={phno}
          onChange={e => setPhno(e.target.value)}
        />

        <button className="btn">Add</button>
      </form>

      <h1 className="header">List</h1>

      <ul className="list">
        {lists.length === 0 && "Empty List"}
        <label>
          {lists.map(list => (
          <li key={list.id}>
            {list.first} {list.last} — {list.phn}
          <button className="btn btn-danger" onClick={()=>deleterow(list.id)}>Delete</button>

          </li>

        ))}
        </label>
      </ul>
    </>
  );
}

export default App;
