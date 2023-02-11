import MainPage from "../components/MainPage/MainPage";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
	const [quote, setQuote] = useState(null);
	useEffect(() => {
		axios.get("http://quotes.rest/qod").then((res) => {
			setQuote(res.data.contents.quotes);
		});
	}, []);

	return (
		<>
			<MainPage quote={quote} />
		</>
	);
}

export default Home;
// {props.map((q) => {
// 	console.log(q);
// 	return (
// 		<>
// 			{/* <h3>{q.date}</h3>
// 			<h3>{q.quote}</h3>
// 			<p>{q.author}</p> */}
// 		</>
// 	);
// })}
