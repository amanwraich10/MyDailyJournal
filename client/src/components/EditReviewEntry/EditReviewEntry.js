import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditReviewEntry() {
	let navigate = useNavigate();
	let { entryRevId } = useParams();
	const [entry, setEntry] = useState({
		date: "",
		Question_review_1:
			"What is something you wish to have done differently?",

		Answer_review_1: "",
		Question_review_2: "What did you learn today?",
		Answer_review_2: "",
	});
	const onInputChange = (e) => {
		setEntry({ ...entry, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		loadEntry();
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		const toSubmitData = {
			date: entry.date,
			Question_review_1: entry.Question_review_1,
			Answer_review_1: entry.Answer_review_1,
			Question_review_2: entry.Question_review_2,
			Answer_review_2: entry.Answer_review_2,
		};
		console.log(toSubmitData);

		axios
			.put(`http://localhost:8082/entriesrev/${entryRevId}`, toSubmitData)
			.then((res) => {
				navigate("/all-entries");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const loadEntry = () => {
		axios
			.get(`http://localhost:8082/entriesrev/${entryRevId}`)
			.then((res) => {
				const entryData = {
					date: res.data.date,
					Question_review_1: res.data.Question_review_1,
					Answer_review_1: res.data.Answer_review_1,
					Question_review_2: res.data.Question_review_2,
					Answer_review_2: res.data.Answer_review_2,
				};
				setEntry(entryData);
			});
	};
	return (
		<>
			<Navbar />
			<p className="likedquotes__heading">Edit this review entry?</p>
			<form className="mainpage__first" onSubmit={(e) => onSubmit(e)}>
				<p className="mainpage__questions">
					What is something you wish to have done differently?
				</p>
				<input
					name="Answer_review_1"
					className="mainpage__input"
					onChange={(e) => onInputChange(e)}
				></input>

				<p className="mainpage__questions">
					What did you learn today?"
				</p>
				<input
					name="Answer_review_2"
					className="mainpage__input"
					onChange={(e) => onInputChange(e)}
				></input>

				<Link to="/all-entries" className="editentries__cancel-button">
					CANCEL
				</Link>

				<button className="editentries__cancel-button">SAVE</button>
			</form>
		</>
	);
}

export default EditReviewEntry;
