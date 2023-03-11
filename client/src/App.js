import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.scss";

import StartPage from "./Pages/StartPage";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Quotes from "./Pages/Quotes";
import Entries from "./Pages/Entries";
import CalendarPage from "./Pages/CalendarPage";
// import "react-calendar/dist/Calendar.css";
import EditEntryPage from "./Pages/EditEntryPage";
import DeleteEntryPage from "./Pages/DeleteEntryPage";
import EditReviewEntryPage from "./Pages/EditReviewEntryPage";
import DeleteReviewEntryPage from "./Pages/DeleteReviewEntryPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";

function App() {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoginError, setIsLoginError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	// const [users, setUsers] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [userInfo, setUserInfo] = useState([]);
	const [userDetails, setUserDetails] = useState("");

	// // __________________????////
	const [users, setUsers] = useState([]);
	const [singleUser, setSingleUser] = useState("");
	const { userId } = useParams();

	// const getUser = async () => {
	// 	try {
	// 		const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
	// 		const { data } = await axios.get(url, { withCredentials: true });
	// 		setUser(data.user._json);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// useEffect(() => {
	// 	getUser();
	// }, []);
	// // __________________????////

	// console.log(id);

	useEffect(() => {
		const token = sessionStorage.getItem("authToken");

		if (!token) {
			return;
		}

		axios
			.get("http://localhost:8082/profile", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				console.log(response);
				setSingleUser(response.data);
				// setUser(response.data.us.id);
				setIsLoading(false);
				setUserInfo(response.data);
			});
	}, []);

	useEffect(() => {
		axios.get("http://localhost:8082/users").then((response) => {
			setUsers(response.data);
		});
	}, []);

	const handleSignup = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8082/signup", {
				username: e.target.username.value,
				name: e.target.name.value,
				password: e.target.password.value,
			})
			.then((res) => {
				const d = JSON.parse(res.config.data);
				// console.log(d);
				setUserDetails(d);
				setIsSignedUp(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleLogin = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8082/login", {
				username: e.target.username.value,
				password: e.target.password.value,
			})
			.then((response) => {
				console.log(response);
				// setUserDetails(response.data.password);
				sessionStorage.authToken = response.data.token;
				setIsLoggedIn(true);
				setIsLoginError(false);
				setErrorMessage("");
			})
			.catch((error) => {
				setIsLoginError(true);
				// setErrorMessage(error.response.data.error.message);
			});
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/welcome" element={<StartPage />} />
					<Route
						path="/login"
						element={
							isLoggedIn ? (
								<Navigate to="/" />
							) : (
								<LoginPage
									singleUser={singleUser}
									users={users}
									userDetails={userDetails}
									userInfo={userInfo}
									isLoggedIn={isLoggedIn}
									isLoginError={isLoginError}
									errorMessage={errorMessage}
									handleLogin={handleLogin}
								/>
							)
						}
					/>
					<Route
						path="/signup"
						element={
							isSignedUp ? (
								<Navigate to="/login" />
							) : (
								<SignUpPage
									isSignedUp={isSignedUp}
									handleSignup={handleSignup}
								/>
							)
						}
					/>
					<Route
						path="/"
						element={<Home userDetails={userDetails} />}
					/>
					<Route path="/liked-quotes" element={<Quotes />} />
					<Route path="/all-entries" element={<Entries />} />
					<Route path="/calender" element={<CalendarPage />} />
					<Route
						path="/edit-entry/:entryId"
						element={<EditEntryPage />}
					/>
					<Route
						path="/delete-entry/:entryId"
						element={<DeleteEntryPage />}
					/>
					<Route
						path="/edit-review-entry/:entryRevId"
						element={<EditReviewEntryPage />}
					/>
					<Route
						path="/delete-review-entry/:entryRevId"
						element={<DeleteReviewEntryPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
