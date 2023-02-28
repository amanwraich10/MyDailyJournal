import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
			<form className="mainpage__first" onSubmit={(e) => onSubmit(e)}>
				<p className="question">
					What is the most important task for today?
				</p>
				<input
					name="Answer_1"
					onChange={(e) => onInputChange(e)}
				></input>

				<p className="question">
					What are you looking forward to today?
				</p>
				<input
					name="Answer_2"
					onChange={(e) => onInputChange(e)}
				></input>

				<p className="question">Daily Affirmations</p>
				<input
					name="Answer_3"
					onChange={(e) => onInputChange(e)}
				></input>
				<div>
					<Link to="/all-entries">
						<button className="entries__like-button ">
							CANCEL
						</button>
					</Link>

					<button className="entries__like-button ">SAVE</button>
				</div>
			</form>
		</>
	);
}

export default EditEntry;
