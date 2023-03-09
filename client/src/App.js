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
	const [users, setUsers] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [userInfo, setUserInfo] = useState([]);
	const [userDetails, setUserDetails] = useState("");
	const { userId } = useParams();

	useEffect(() => {
		const token = sessionStorage.getItem("JWT_token");

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
				console.log(response.data);
				setIsLoading(false);
				setUserInfo(response.data);
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
				// console.log(res.config.data);

				setIsSignedUp(true);
				// setUserDetails()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		// const userLogIn = {
		// 	username: e.target.username.value,
		// 	password: e.target.password.value,
		// };

		axios
			.post("http://localhost:8082/login", {
				username: e.target.username.value,
				password: e.target.password.value,
			})
			.then((response) => {
				// console.log(response.data);
				setUserDetails(response.data.password);
				sessionStorage.setItem("JWT_token", response.data.token);
				setIsLoggedIn(true);
				setIsLoginError(false);
				setErrorMessage("");
			})
			.catch((error) => {
				setIsLoginError(true);
				console.log(error);
				// setErrorMessage(error.response.data.error.message);
			});
	};

	useEffect(() => {
		axios.get(`http://localhost:8082/users`).then((res) => {
			// console.log(res.data);
			setUsers(res.data);
			// console.log(id);
		});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/welcome" element={<StartPage />} />
					{/* <Route
						path="/login"
						element={
							isLoggedIn ? (
								<Navigate to="/:userId" />
							) : (
								<LoginPage
									// users={users}
									userDetails={userDetails}
									userInfo={userInfo}
									isLoggedIn={isLoggedIn}
									isLoginError={isLoginError}
									errorMessage={errorMessage}
									handleLogin={handleLogin}
								/>
							)
						}
					/> */}
					{/* <Route
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
					/> */}
					<Route
						// path="/:userId"
						path="/"
						element={
							<Home users={users} userDetails={userDetails} />
						}
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
