import "../MainPage/MainPage.scss";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage(props) {
	const [entry, setEntry] = useState({});

	// PROBLEM - issue with accessing text

	function ClickLikeButton(e) {
		e.preventDefault();

		let text = document.querySelector(".mainpage__quote").innerText;
		const requestBody = { text: text };

		// const rb = requestBody.text;
		// console.log(rb);
		axios
			.post("http://localhost:8082/entries/liked-quotes", requestBody)
			.then(alert("Liked Quote"));
	}

	function UploadEntryInfo(e) {
		e.preventDefault();

		const uploadEntry = {
			Answer_1: entry.Answer_1,
			Answer_2: entry.Answer_2,
			Answer_3: entry.Answer_3,
		};

		if (
			uploadEntry.Answer_1 &&
			uploadEntry.Answer_2 &&
			uploadEntry.Answer_3
		) {
			axios
				.post("http://localhost:8082/entries/add", uploadEntry)
				.then(alert("Upload Successful"))
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert("H You must fill all areas.");
		}
	}

	function UploadReview(e) {
		e.preventDefault();
		const uploadEntryReview = {
			Answer_review_1: entry.Answer_review_1,
			Answer_review_2: entry.Answer_review_2,
		};
		if (
			uploadEntryReview.Answer_review_1 &&
			uploadEntryReview.Answer_review_2
		) {
			axios
				.post(
					"http://localhost:8082/entriesrev/review",
					uploadEntryReview
				)
				.then(alert("Upload Successful"))
				.catch((err) => {
					console.log(err);
				});
		} else {
			alert(" R You must fill all areas.");
		}
	}

	function input(e) {
		e.preventDefault();
		let { name, value } = e.target;
		setEntry((values) => ({
			...values,
			[name]: value,
		}));
	}
	return (
		<>
			{props.quote?.map((quotes) => {
				return (
					<div className="mainpage" key={quotes.id}>
						<div key={quotes.id} className="mainpage__div">
							<h3 className="mainpage__date">{quotes.date}</h3>
							<h3 className="mainpage__quote">{quotes.quote}</h3>
							<p className="mainpage__author">
								- {quotes.author}
							</p>

							<button
								className="mainpage__like-button"
								onClick={ClickLikeButton}
							>
								LIKE
							</button>

							{/* <button onClick={ClickLikeButton}>LIKE</button> */}
						</div>
						<div className="mainpage__journal">
							<div className="mainpage__card">
								<form className="mainpage__first">
									<p className="mainpage__questions">
										What is the most important task for
										today?
									</p>
									<input
										className="mainpage__input"
										name="Answer_1"
										onChange={input}
									></input>

									<p className="mainpage__questions">
										What are you looking forward to today?
									</p>
									<input
										className="mainpage__input"
										name="Answer_2"
										onChange={input}
									></input>

									<p className="mainpage__questions">
										Daily Affirmations
									</p>
									<input
										className="mainpage__input"
										name="Answer_3"
										onChange={input}
									></input>

									<button
										className="mainpage__save-button"
										onClick={UploadEntryInfo}
									>
										SAVE
									</button>
								</form>
								<form className="mainpage__second">
									<h2 className="mainpage__review">
										Review of the day
									</h2>
									<p className="mainpage__questions">
										What is something you wish to have done
										differently?
									</p>
									<input
										className="mainpage__input"
										name="Answer_review_1"
										onChange={input}
									></input>

									<p className="mainpage__questions">
										What did you learn today?
									</p>
									<input
										className="mainpage__input"
										name="Answer_review_2"
										onChange={input}
									></input>

									<button
										className="mainpage__save-button"
										onClick={UploadReview}
									>
										SAVE
									</button>
								</form>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default MainPage;
