function LoginPage(props) {
	if (!props.isLoggedIn) {
		return (
			<>
				<div>
					<h1>Login</h1>
					{props.isLoginError && (
						<label style={{ color: "red" }}>
							{props.errorMessage}
						</label>
					)}
					<form onSubmit={props.handleLogin}>
						<div className="form-group">
							Username:
							<input type="text" name="username" />
						</div>
						<div className="form-group">
							Password:
							<input type="password" name="password" />
						</div>
						<button className="btn btn-primary" type="submit">
							Login
						</button>
					</form>
				</div>
			</>
		);
	}
}

export default LoginPage;
