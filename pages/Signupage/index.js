import Signup from '../../components/Form/Signup';
import classes from '../../styles/Signup.module.css';

function Signuppage() {
	return (
		<div className={classes.Main_Register_div}>
			<div className={classes.Loginpage_up}>
				<img src='torus.svg' alt='' />
			</div>
			<Signup />
			<div className={classes.Loginpage_Down}>
				<img src='Logindown.svg' alt='' />
			</div>
		</div>
	);
}

export default Signuppage;
