import LikedQuotes from "../components/LikedQuotes/LikedQuotes";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const [quote, setQuote] = useState(null);
	useEffect(() => {
		axios.get("http://localhost:8082/quotes", config).then((res) => {
			setQuote(res.data);
		});
	}, []);
	return (
		<>
			<Navbar />
			<LikedQuotes quote={quote} />
		</>
	);
}

export default Quotes;
