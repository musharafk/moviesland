import { useState } from "react"

function List(){
    const [list,setlist]=useState([]);
    const [count,setcount]=useState(1)
    function additem(){
const itemname='item'+count;
setlist((previousstate) => {return [...previousstate,itemname]})
setcount( (previousstate) => { return previousstate+1})
    }
    console.log('current state',list)
    return<>
    <h1>list</h1>
    <button onClick={additem}>add items</button>
    <ul>{
        list.map((el,index) =>   <li key={index}>{el}</li> )
        }
      
    </ul>
    </>
}
export default List