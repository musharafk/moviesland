import { useState } from "react";
function Favor(){
// let color='rose'
 const[color,setColor]=useState('blue')
    return <>
    <h1> my favorite color is {color} </h1>
    <button onClick={() =>{setColor('red')}}>change color</button></>

}
export default Favor;