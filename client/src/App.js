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
// import "react-calendar/dist/Calendar.css";
import EditEntryPage from "./Pages/EditEntryPage";
import DeleteEntryPage from "./Pages/DeleteEntryPage";
import EditReviewEntryPage from "./Pages/EditReviewEntryPage";
import DeleteReviewEntryPage from "./Pages/DeleteReviewEntryPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/liked-quotes" element={<Quotes />} />
					<Route path="/all-entries" element={<Entries />} />
					<Route path="/calender" element={<CalenderPage />} />
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
