import { useState } from "react";

function App2() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [lists, setLists] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstname.trim() || !lastname.trim()) return;

    if (editingId) {
      setLists((currentList) => {
        return currentList.map((list) => {
          if (list.id === editingId) {
            return {
              ...list,
              first: firstname,
              last: lastname,
            };
          }
          return list;
        });
      });
      setEditingId(null);
    } else {
      const alreadyExists = lists.some(
        (list) => list.first === firstname && list.last === lastname
      );
      if (alreadyExists) return;

      setLists((currentList) => [
        ...currentList,
        {
          id: crypto.randomUUID(),
          first: firstname,
          last: lastname,
        },
      ]);
    }

    setFirstname("");
    setLastname("");
  }

  function deletelist(id) {
    setLists((currentlist) => currentlist.filter((list) => list.id !== id));
  }

  function startEdit(list) {
    setFirstname(list.first);
    setLastname(list.last);
    setEditingId(list.id);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label>Last name</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <button>{editingId ? "Update" : "Add"}</button>
      </form>

      <h2>List</h2>

      <ul>
        {lists.length === 0 && "Empty list"}
        {lists.map((list) => (
          <li key={list.id}>
            {list.first} — {list.last}
            <button onClick={() => startEdit(list)}>Edit</button>
            <button onClick={() => deletelist(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App2;
