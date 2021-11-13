import Login from "../../components/Form/Login"
import classes from "../../styles/Register.module.css"

function Loginpage(){

    return(
<div className={classes.Main_Register_div}>
    <div className={classes.Loginpage_up}>
        <img src="torus.svg" alt="" />
    </div>
    <Login/>
    <div className={classes.Loginpage_Down}>
        <img src="Logindown.svg" alt="" />
    </div>
</div>
    )
}
export default Loginpage