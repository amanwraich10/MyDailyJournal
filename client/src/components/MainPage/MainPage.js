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
		axios
			.post("http://localhost:8082/entries/liked-quotes", text)
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
			alert("You must fill all areas.");
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

							<button onClick={ClickLikeButton}>LIKE</button>

							{/* <button onClick={ClickLikeButton}>LIKE</button> */}
						</div>
						<div className="mainpage__journal">
							<div className="mainpage__card">
								<form className="mainpage__first">
									<p>
										What is the most important task for
										today?
									</p>
									<input
										name="Answer_1"
										onChange={input}
									></input>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>
									<p>
										What are you looking forward to today?
									</p>
									<input
										name="Answer_2"
										onChange={input}
									></input>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>
									<p>Daily Affirmations</p>
									<input
										name="Answer_3"
										onChange={input}
									></input>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>

									<button onClick={UploadEntryInfo}>
										SAVE
									</button>
								</form>
								<form className="mainpage__second">
									<h2>Review of the day</h2>
									<p>
										What is something you wish to have done
										differently?
									</p>
									<textarea></textarea>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>

									<p>What did you learn today?</p>
									<textarea></textarea>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>
									<button>SAVE</button>
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
