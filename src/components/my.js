import React from "react";
class My extends React.Component{
constructor(){
super();
this.state={name:"mushu",age:"20"}
}
    render(){
    return <><h1>
        my name is {this.state.name} and i am {this.state.age} year old
    </h1>
    <button onClick={() =>{this.setState(previousstate => {return {...previousstate,name:"musharaf"}})}}>change name</button>
    </>
}
}
export default My;