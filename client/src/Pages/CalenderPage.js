import Navbar from "../components/Navbar/Navbar";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import axios from "axios";
// import {
// 	add,
// 	eachDayOfInterval,
// 	endOfMonth,
// 	format,
// 	getDay,
// 	isEqual,
// 	isSameDay,
// 	isSameMonth,
// 	isToday,
// 	parse,
// 	parseISO,
// 	startOfToday,
// } from "date-fns";

function CalenderPage() {
	const [dates, setDate] = useState(new Date());
	const onChange = (date) => {
		setDate(date);
	};

	const [entries, setEntries] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8082/entries").then((res) => {
			setEntries(res.data);
		});
	}, []);

	return (
		<>
			<Navbar />
			<Calendar
				entries={entries}
				calendarType="US"
				onChange={onChange}
				value={dates}
			/>

			{dates.toDateString()}
		</>
	);
}

export default CalenderPage;
