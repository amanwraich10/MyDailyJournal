{
	/* <BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							// userInfo ? (
							<WelcomePage
							// isLoading={isLoading}
							// userInfo={userInfo}
							/>
							// ) : (
							// <Navigate to="/login" />
							// )
						}
					/>
					{/* <Route path="/" element={<StartPage />} /> */
}
{
	/* <Route path="/create-account" element={<CreateAccount />} /> */
}
{
	/* <Route path="/login" element={<Login />} /> */
}
{
	/* <Route path="/login" element={<Home />} /> */
}
{
	/* <Route path="/welcome" element={<WelcomePage />} /> */
}
{
	/* </Routes> */
}
{
	/* </BrowserRouter> */
}

// const [isSignedUp, setIsSignedUp] = useState(false);
// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [isLoginError, setIsLoginError] = useState(false);
// const [errorMessage, setErrorMessage] = useState("");
// const [userInfo, setUserInfo] = useState({});
// const [isLoading, setIsLoading] = useState(true);

// const handleSignup = (e) => {
// 	e.preventDefault();

// 	axios
// 		.post("http://localhost:8080/signup", {
// 			username: e.target.username.value,
// 			name: e.target.name.value,
// 			password: e.target.password.value,
// 		})
// 		.then(() => {
// 			setIsSignedUp(true);
// 		});
// };

// const handleLogin = (e) => {
// 	e.preventDefault();

// 	axios
// 		.post("http://localhost:8080/login", {
// 			username: e.target.username.value,
// 			password: e.target.password.value,
// 		})
// 		.then((response) => {
// 			console.log(response);
// 			sessionStorage.setItem("JWT_token", response.data.token);
// 			setIsLoggedIn(true);
// 			setIsLoginError(false);
// 			setErrorMessage("");
// 		})
// 		.catch((error) => {
// 			setIsLoginError(true);
// 			setErrorMessage(error.response.data.error.message);
// 			console.log(error.response.data.error.message);
// 		});
// };

// const renderSignUp = () => (
// 	<div>
// 		<h1>My Daily Journal</h1>
// 		<form onSubmit={handleSignup}>
// 			<div className="form-group">
// 				Username: <input type="text" name="username" />
// 			</div>
// 			<div className="form-group">
// 				Name: <input type="text" name="name" />
// 			</div>
// 			<div className="form-group">
// 				Password: <input type="password" name="password" />
// 			</div>
// 			<button className="btn btn-primary" type="submit">
// 				Signup
// 			</button>
// 		</form>
// 	</div>
// );

// const renderLogin = () => (
// 	<div>
// 		<h1>Login</h1>
// 		{isLoginError && (
// 			<label style={{ color: "red" }}>{errorMessage}</label>
// 		)}
// 		<form onSubmit={handleLogin}>
// 			<div className="form-group">
// 				Username: <input type="text" name="username" />
// 			</div>
// 			<div className="form-group">
// 				Password: <input type="password" name="password" />
// 			</div>
// 			<button className="btn btn-primary" type="submit">
// 				Login
// 			</button>
// 		</form>
// 	</div>
// );

// useEffect(() => {
// 	const token = sessionStorage.getItem("JWT_token");

// 	if (!token) {
// 		return;
// 	}

// 	axios
// 		.get("http://localhost:8080/profile", {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 		.then((response) => {
// 			setIsLoading(false);
// 			setUserInfo(response.data.username);
// 		});
// }, []);

// if (!isSignedUp) return renderSignUp();
// if (!isLoggedIn) return renderLogin();

// const baseUrl = "http://localhost:8080";
// const loginUrl = `${baseUrl}/login`;
// const signupUrl = `${baseUrl}/signup`;
// const profileUrl = `${baseUrl}/profile`;

// const [isLoading, setIsLoading] = useState(true);
// const [userInfo, setUserInfo] = useState({});
// useEffect(() => {
// 	const token = sessionStorage.getItem("JWT_token");
// 	if (!token) {
// 		return;
// 	}
// 	axios
// 		.get(profileUrl, {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 		.then((response) => {
// 			setIsLoading(false);
// 			setUserInfo(response.data.username);
// 		});
// }, []);
// return loading ? <h1>Loading...</h1> : <h1>Welcome {props.userInfo}!</h1>;
// return loading ? <h1>Loading...</h1> : <h1>Welcome {props.userInfo}!</h1>;

{
	/* 
			<h3>{props.date}</h3>
			<h3>{props.quote}</h3>
			<p>{props.author}</p> */
}
{
	/* <div>
				<button>Like</button>
			</div> */
}
{
	/* <form>
				<p>How are you feeling today and why?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>

			<form>
				<p>What are you looking forward to today?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>

			<form>
				<p>Daily Affirmations</p> <textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form> */
}

{
	/* <h3>Review of the day</h3>

			<form>
				<p>What is something you wish to have done differently?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>
			<form>
				<p>What did you learn today?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form> */
}

{
	/* <div>
				<button>Log In/Out?</button>
				<button>Today</button>
				<button>All Entries</button>
				<button>Calender</button>
				<button>Liked quotes</button>
			</div> */
}
