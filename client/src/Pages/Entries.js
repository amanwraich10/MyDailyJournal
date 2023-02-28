import AllEntry from "../components/AllEntry/AllEntry";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import ReviewEntries from "../components/ReviewEntries/ReviewEntries";

function Entries() {
	const [entries, setEntries] = useState([]);
	const [entriesRev, setEntriesRev] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8082/entries").then((res) => {
			setEntries(res.data);
			// console.log(res.data);
		});
	}, []);
	useEffect(() => {
		axios.get("http://localhost:8082/entries/rev").then((res) => {
			setEntriesRev(res.data);
			// console.log(res.data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<div className="div">
				<AllEntry entries={entries} />
				<ReviewEntries entriesRev={entriesRev} />
			</div>
		</>
	);
}

export default Entries;
