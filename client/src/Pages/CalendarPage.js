import Navbar from "../components/Navbar/Navbar";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import axios from "axios";

function CalendarPage() {
	const [dates, setDate] = useState(new Date());
	const onChange = (date) => {
		setDate(date);
	};

	const [entries, setEntries] = useState(null);
	useEffect(() => {
		axios.get("http://localhost:8082/entries").then((res) => {
			setEntries(res.data);
		});
	}, []);

	const [entriesRev, setEntriesRev] = useState(null);
	useEffect(() => {
		axios.get("http://localhost:8082/entriesrev").then((res) => {
			setEntriesRev(res.data);
		});
	}, []);

	const clicked_Date = dates.toDateString();
	let noEntriesFound = false;
	let noRevEntriesFound = false;
	return (
		<>
			<Navbar />
			<Calendar calendarType="US" onChange={onChange} value={dates} />

			{entries?.map((entry) => {
				const d = entry.date;
				const fd = new Date(d);
				const final_Entry_Date = fd.toDateString();

				if (final_Entry_Date === clicked_Date) {
					return (
						<div key={entry.id}>
							<p>{final_Entry_Date}</p>
							<p>{entry.Question_1}</p>
							<p>{entry.Answer_1}</p>
							<p>{entry.Question_2}</p>
							<p>{entry.Answer_2}</p>
							<p>{entry.Question_3}</p>
							<p>{entry.Answer_3}</p>
						</div>
					);
				} else {
					if (noEntriesFound === false) {
						noEntriesFound = true;
						return (
							<div key={entry.id}>
								<p>no</p>
							</div>
						);
					}
				}
			})}
			{entriesRev?.map((entry) => {
				const d = entry.date;
				const fd = new Date(d);
				const final_Entry_Date = fd.toDateString();

				if (final_Entry_Date === clicked_Date) {
					return (
						<div key={entry.id}>
							<p>{final_Entry_Date}</p>
							<p>{entry.Question_review_1}</p>
							<p>{entry.Answer_review_1}</p>
							<p>{entry.Question_review_2}</p>
							<p>{entry.Answer_review_2}</p>
						</div>
					);
				} else {
					if (noRevEntriesFound === false) {
						noRevEntriesFound = true;
						return (
							<div key={entry.id}>
								<p>no</p>
							</div>
						);
					}
				}
			})}
		</>
	);
}

export default CalendarPage;
