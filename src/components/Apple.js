import React from "react";
class Apple extends React.Component{
render(){
    const {appleinfo}=this.props;
    const{type,color}=appleinfo;
    return(
        <h2>i am {color} {type} apple</h2>
    )
}
}
export default Apple