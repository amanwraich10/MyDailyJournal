import "./AccountCreate.scss";

function AccountCreate() {
	return (
		<div className="a">
			<p>Create an Account</p>
			<form>
				<label>First Name</label>
				<input></input>
				<label>Last Name</label>
				<input></input>
				<label>Email</label>
				<input></input>
				<label>Password</label>
				<input></input>
				<label>Confirm Password</label>
				<input></input>
				<button>Sign Up</button>
				<p>or</p>
				<button>I already have an account</button>
			</form>
		</div>
	);
}

export default AccountCreate;
