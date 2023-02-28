import { Link } from "react-router-dom";
import "../ReviewEntries/ReviewEntries.scss";
function ReviewEntries(props) {
	// console.log(props);
	return (
		<>
			{/* <p>Review</p> */}
			{props.entriesRev?.map((ent) => {
				const date = ent.date;
				const entryDate = new Date(date);
				return (
					<div key={ent.id} className="allentries__div">
						<p className="review">Review</p>
						<p className="date">{entryDate.toDateString()}</p>
						<p className="question">{ent.Question_review_1}</p>
						<p className="answer">{ent.Answer_review_1}</p>
						<p className="question">{ent.Question_review_2}</p>
						<p className="answer">{ent.Answer_review_2}</p>

						<Link to={`/edit-review-entry/${ent.id}`}>
							<button className="entries__like-button ">
								edit
							</button>
						</Link>
						<Link to={`/delete-review-entry/${ent.id}`}>
							<button className="entries__like-button ">
								Delete
							</button>
						</Link>
					</div>
				);
			})}
		</>
	);
}

export default ReviewEntries;
