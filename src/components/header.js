import './header.css';
import styles from './header.module.css';
function Header(){
    const mystyle={
        color:"red",
        backgroundColor:"blue",
        padding:"10px",
        fontFamily:"sans-serif"
    }
    return <>
    {/* <h1 style={mystyle}>helooooo</h1> */}
    <h1 className={styles.bigblue}>hellooo</h1>
    <p>add css</p>
    </>
}
export default Header;