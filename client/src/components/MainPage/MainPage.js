import "../MainPage/MainPage.scss";
import { NavLink, Link } from "react-router-dom";

function MainPage(props) {
	return (
		<>
			{props.quote?.map((quotes) => {
				return (
					<div className="mainpage">
						<div key={quotes.id} className="mainpage__div">
							<h3 className="mainpage__date">{quotes.date}</h3>
							<h3 className="mainpage__quote">
								" {quotes.quote} "
							</h3>
							<p className="mainpage__author">
								- {quotes.author}
							</p>
						</div>
						<div className="mainpage__journal">
							<div className="mainpage__card">
								<form className="mainpage__first">
									<p>
										What is the most important task for
										today?
									</p>
									<textarea></textarea>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>
									<p>
										What are you looking forward to today?
									</p>
									<textarea></textarea>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>
									<p>Daily Affirmations</p>
									<textarea></textarea>
									<div>
										<button>Edit</button>
										<button>Delete</button>
									</div>

									<button>SAVE</button>
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
