import MainPage from "../components/MainPage/MainPage";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

function Home() {
	const [quote, setQuote] = useState(null);
	// const [isLoading, setIsLoading] = useState(true);
	const [userInfo, setUserInfo] = useState({});
	const { userId } = useParams();

	useEffect(() => {
		axios.get("http://quotes.rest/qod").then((res) => {
			setQuote(res.data.contents.quotes);
		});
	}, []);
	// useEffect(() => {
	// 	axios.get("http://localhost:8082/users").then((res) => {
	// 		console.log(res.data);
	// 	});
	// }, []);

	return (
		<>
			<Navbar />
			<MainPage quote={quote} />
		</>
	);
}

export default Home;
