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
						<p className="allentries__date">
							Review of {entryDate.toDateString()}
						</p>
						<p className="allentries__question">
							{ent.Question_review_1}
						</p>
						<p className="allentries__answer">
							{ent.Answer_review_1}
						</p>
						<p className="allentries__question">
							{ent.Question_review_2}
						</p>
						<p className="allentries__answer">
							{ent.Answer_review_2}
						</p>
						<div className="allentries__flex">
							<Link
								to={`/edit-review-entry/${ent.id}`}
								className="allentries__edit-button"
							>
								EDIT
							</Link>
							<Link
								to={`/delete-review-entry/${ent.id}`}
								className="allentries__edit-button"
							>
								DELETE
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default ReviewEntries;
