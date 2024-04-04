import { useState } from "react"

function Myform(){
    // const [name,setname]=useState("");
    // const [age,setage]=useState("");
    // const [email,setemail]=useState("");

const [inputs,setinputs]=useState({email:"@gmail.com",country:"india",about:"i am mush"});
    // console.log('current state',name)
    function handlesubmit(e){
       e.preventDefault();
        console.log('form submitted')
        console.log('current state',inputs);
    }
    function handlechange(e){
        const name=e.target.name
        const value=e.target.value

setinputs(( previousstate) =>{ return{...previousstate,[name]:value}})
    }
    return <form onSubmit={handlesubmit}>
        <label>Enter your name: <input  type="text" name="name" onChange={handlechange} /></label><br/>
        <label>Enter your age :  <input  type="text" name="age" onChange={handlechange} /></label><br/>
        <label>Enter your email : <input  type="text" name="email"onChange={handlechange} value={inputs.email}/></label><br/>
        <label>Enter your country :
             <select name="country" i am student value={inputs.country}>
            <option value="">select</option>
            <option value="aus">aus</option>
            <option value="ind">ind</option>
            <option value="usa">usa</option>
            </select></label><br/>
            <label>enter about you : <textarea name="about" value={inputs.about} onChange={handlechange}></textarea></label>

        <input type="submit" value="submit form"/>
        
    </form>
}
export default Myform