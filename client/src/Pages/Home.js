import MainPage from "../components/MainPage/MainPage";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

function Home() {
	const [quote, setQuote] = useState(null);

	useEffect(() => {
		axios.get("http://quotes.rest/qod").then((res) => {
			setQuote(res.data.contents.quotes);
		});
	}, []);

	return (
		<>
			<Navbar />
			<MainPage quote={quote} />
		</>
	);
}

export default Home;
