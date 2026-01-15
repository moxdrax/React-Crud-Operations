import { useState } from "react"

function App3(){
    const [firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[lists,setLists] = useState([])
    const[editingId,setEditingId] = useState(null)
    function handleSubmit(e){
        e.preventDefault()
        if(!firstname.trim()||!lastname.trim())return
        
        setLists(currentlist=>[
            ...currentlist,
            {id:crypto.randomUUID(),first:firstname,last:lastname}
        ])
        setEditingId("")
        setFirstname("")
        setLastname("")
    }
    function deletelist(id){
        setLists(lists.filter(list=>list.id!=id))
    }
    function startEdit(list){
        // setEditingId(list.id)
        // setFirstname(list.first)
        // setLastname(list.last)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                First Name
            </label><br/>
            <input type="text" value={firstname} onChange={e=>setFirstname(e.target.value)}/><br/><br/>
            <label>
                Last Name
            </label><br></br>
            <input type="text"value={lastname} onChange={e=>setLastname(e.target.value)}/><br/><br/>
            <button>Add</button>
        </form>
        <div>
            <h1>List</h1>
            {lists.length==0 && "Empty List"}
            <ul>
            {lists.map(list=>(
                <li key={list.id}>
                    {list.first}--{list.last}
                    <button onClick={()=>deletelist(list.id)}>delete</button>
                    <button onClick={startEdit(list)}>Update</button>
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}
export default App3