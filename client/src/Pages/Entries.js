import AllEntry from "../components/AllEntry/AllEntry";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

function Entries() {
	const [entries, setEntries] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8082/entries").then((res) => {
			setEntries(res.data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<AllEntry entries={entries} />
		</>
	);
}

export default Entries;
