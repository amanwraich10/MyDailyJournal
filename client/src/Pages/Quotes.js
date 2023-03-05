import LikedQuotes from "../components/LikedQuotes/LikedQuotes";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {
	const config = {
		headers: {
			// accept: "application/json",
			// Accept: "application/json",
			"Content-Type": "application/json",
		},
	};
	const [quote, setQuote] = useState(null);
	useEffect(() => {
		axios.get("http://localhost:8082/quotes", config).then((res) => {
			// console.log(res.data);
			setQuote(res.data);
		});
	}, []);

	// console.log("hello");
	return (
		<>
			<Navbar />
			<LikedQuotes quote={quote} />
		</>
	);
}

export default Quotes;
