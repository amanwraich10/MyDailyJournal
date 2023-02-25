import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import CreateAccount from "./Pages/CreateAccount";
import StartPage from "./Pages/StartPage";
import Home from "./Pages/Home";
import WelcomePage from "./Pages/WelcomePage";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AccountLogin from "./components/AccountLogin/AccountLogin";
import Quotes from "./Pages/Quotes";
import Entries from "./Pages/Entries";
import CalenderPage from "./Pages/CalenderPage";
import "react-calendar/dist/Calendar.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/liked-quotes" element={<Quotes />} />
					<Route path="/all-entries" element={<Entries />} />
					<Route path="/calender" element={<CalenderPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
