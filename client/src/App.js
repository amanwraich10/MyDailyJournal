import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
// import MainPage from "./components/MainPage/MainPage";
import StartPage from "./Pages/StartPage";
import Home from "./Pages/Home";
import WelcomePage from "./Pages/WelcomePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StartPage />} />
					<Route path="/create-account" element={<CreateAccount />} />
					<Route path="/login" element={<Login />} />
					<Route path="/journal" element={<Home />} />
					<Route path="/welcome" element={<WelcomePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
