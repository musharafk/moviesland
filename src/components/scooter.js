import { useState } from "react"

function Scooter(){
    // const[color,setColor]=useState("red")
    // const[brand,setbrand]=useState("honda")
    // const[model,setmodel]=useState("activa6g")
    // const[year,setyear]=useState("2020")
const [scooter,setscooter]=useState(
    {color:"red",
    brand:"honda",
model:"activa6g",
year:"2020"})
function updatecolor(){
    setscooter((previousstate) =>{
   
        return{...previousstate,color:"rose"}
    })
}
// console.log('current state',scooter)
    return<>
    <h1>my scooter</h1>
    <p>color: {scooter.color}</p>
    <p>brand: {scooter.brand}</p>
    <p>model: {scooter.model}</p>
    <p>year: {scooter.year}</p>
    <button onClick={updatecolor}>change color</button>
    </>
}
export default Scooter;