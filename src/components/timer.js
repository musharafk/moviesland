import { useEffect, useState } from "react"

function Timer(){
    const [count,setcount]=useState(0);
    useEffect(() =>{
        console.log('screen rendered') 
        // checkcount()
        // setcount(1)
        setTimeout(() => {
            setcount((previousstate) =>{return previousstate+1})
        }, 1000);
})

function checkcount(){
    if(count>10){
        setcount(1);
    }
}

    function updatecount(){
        setcount((previousstate) => {return previousstate+1})
    }

    return <> <h1>i have rendered {count} times</h1>
    <button onClick={updatecount}>increase count</button>
    </>
}
export default Timer;