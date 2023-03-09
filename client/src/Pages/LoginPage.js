import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage(props) {
	let navigate = useNavigate();
	const [usersPassword, setUsersPassword] = useState([]);
	const [password, setPassword] = useState("");
	const handleLogin = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8082/login", {
				username: e.target.username.value,
				password: e.target.password.value,
			})
			.then((response) => {
				setPassword(response.data.password);
				console.log(response.data);
			});
	};
	// handleLogin();
	useEffect(() => {
		axios.get(`http://localhost:8082/users`).then((res) => {
			console.log(res.data);
			setUsersPassword(res.data);
			// console.log(id);
		});
	}, []);
	return (
		<>
			<div>
				<h1>Login</h1>
				{props.isLoginError && (
					<label style={{ color: "red" }}>{props.errorMessage}</label>
				)}
				<form onSubmit={handleLogin}>
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
			{usersPassword?.map((u) => {
				if (u.password === password) {
					console.log(u.id);
					// <button>yes</button>;
					// <Link to="/u.id">hg</Link>;
					// navigate(`/${u.id}`);
				}
			})}
		</>
	);
}

export default LoginPage;
