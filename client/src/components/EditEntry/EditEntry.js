import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./EditEntry.scss";

function EditEntry() {
	let navigate = useNavigate();
	let { entryId } = useParams();
	// console.log(entryId);
	const [entry, setEntry] = useState({
		date: "",
		Question_1: "What is the most important task for today?",
		Answer_1: "",
		Question_2: "What are you looking forward to today?",
		Answer_2: "",
		Question_3: "Daily Affirmations",
		Answer_3: "",
	});
	const onInputChange = (e) => {
		// console.log(e);
		setEntry({ ...entry, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		loadEntry();
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();

		//add both inputs together
		const toSubmitData = {
			date: entry.date,
			Question_1: entry.Question_1,

			Answer_1: entry.Answer_1,
			Question_2: entry.Question_2,

			Answer_2: entry.Answer_2,
			Question_3: entry.Question_3,
			Answer_3: entry.Answer_3,
		};
		console.log(toSubmitData);

		axios
			.put(`http://localhost:8082/entries/${entryId}`, toSubmitData)
			.then((res) => {
				// console.log(toSubmitData);
				// console.log(res);
				navigate("/all-entries");
			})
			.catch((err) => {
				console.log(err);
			});

		// navigate("/all-entries");
	};

	const loadEntry = () => {
		axios.get(`http://localhost:8082/entries/${entryId}`).then((res) => {
			const entryData = {
				date: res.data.date,
				Question_1: res.data.Question_1,
				Answer_1: res.data.Answer_1,
				Question_2: res.data.Question_2,
				Answer_2: res.data.Answer_2,
				Question_3: res.data.Question_3,
				Answer_3: res.data.Answer_3,
			};
			setEntry(entryData);
			// console.log(entry);
		});
	};
	return (
		<>
			<Navbar />
			<p className="likedquotes__heading">Edit this entry?</p>
			<form className="mainpage__first" onSubmit={(e) => onSubmit(e)}>
				<p className="mainpage__questions">
					What is the most important task for today?
				</p>
				<input
					name="Answer_1"
					className="mainpage__input"
					onChange={(e) => onInputChange(e)}
				></input>

				<p className="mainpage__questions">
					What are you looking forward to today?
				</p>
				<input
					name="Answer_2"
					className="mainpage__input"
					onChange={(e) => onInputChange(e)}
				></input>

				<p className="mainpage__questions">Daily Affirmations</p>
				<input
					name="Answer_3"
					className="mainpage__input"
					onChange={(e) => onInputChange(e)}
				></input>
				<div>
					<Link
						to="/all-entries"
						className="editentries__cancel-button"
					>
						CANCEL
					</Link>

					<button className="editentries__cancel-button">SAVE</button>
				</div>
			</form>
		</>
	);
}

export default EditEntry;
