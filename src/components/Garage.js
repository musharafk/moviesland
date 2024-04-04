import Car from './Car';
import Apple from './Apple';

function Garage() {
    //const brand='bugatti'
    const isdooropened=false;
 const carinfo={brand:"bugatti", color:"blue"}
//  const carinfo={}
const carlist=[

  {brand:"bmw", color:"black"},
  {brand:"lambogini", color:"yellow"},
  {brand:"ford", color:"brown"}
];
const numberlist=[
  1,2,3,4,5,6
]
const showcarinfo=  carinfo.brand!==undefined &&carinfo.color!==undefined;

const appleinfo={type:"fuji",color:"red"};
    return (
      <div>
        <h1>Who lives inside my garage</h1>
       {/* <Car brand={brand} color='red'/> */}
       {showcarinfo && <Car carinfo={carinfo}/>}
        <Apple appleinfo={appleinfo}/>
        {isdooropened?<h2>garage door is opened</h2>:<h2>garage door is closed</h2>}
        <ul>
          
            { carlist.map((carinfo) => <li key={carinfo.brand}><Car carinfo={carinfo} /></li>)}
         
          
        </ul>
        <ul>
          {numberlist.map((e,index) => <p key={index}>{e}</p>)}
        </ul>
        </div>
    )
  }
export default   Garage;