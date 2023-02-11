// import { Link } from "react-router-dom";

function AccountLogin() {
	return (
		<>
			<p>Login</p>
			<form>
				<label>Email</label>
				<input></input>
				<label>Password</label>
				<input></input>
				<button>Login</button>
				<p>or</p>
				{/* <Link to={"/journal"}> */}
				<button>I need a new account</button>
				{/* </Link> */}
			</form>
		</>
	);
}

export default AccountLogin;
