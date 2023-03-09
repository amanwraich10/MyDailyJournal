function SignUpPage(props) {
	if (!props.isSignedUp)
		return (
			<>
				<div>
					<h1>My Daily Journal</h1>
					<form onSubmit={props.handleSignup}>
						<div className="form-group">
							Username: <input type="text" name="username" />
						</div>
						<div className="form-group">
							Name: <input type="text" name="name" />
						</div>
						<div className="form-group">
							Password: <input type="password" name="password" />
						</div>
						<button className="btn btn-primary" type="submit">
							Signup
						</button>
					</form>
				</div>
			</>
		);
}

export default SignUpPage;
