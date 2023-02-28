import "../AllEntry/AllEntry.scss";
import { Link } from "react-router-dom";

function AllEntry(props) {
	// console.log(props);
	return (
		<>
			{/* <p className="allentries__heading">ENTRIES</p> */}
			{props.entries?.map((entry) => {
				const date = entry.date;
				const entryDate = new Date(date);
				// console.log(entry);
				return (
					<div key={entry.id} className="allentries__div">
						<p className="answer">{entryDate.toDateString()}</p>
						<p className="question">{entry.Question_1}</p>
						<p className="answer">{entry.Answer_1}</p>
						<p className="question">{entry.Question_2}</p>
						<p className="answer">{entry.Answer_2}</p>
						<p className="question">{entry.Question_3}</p>
						<p className="answer">{entry.Answer_3}</p>
						<Link to={`/edit-entry/${entry.id}`}>
							<button className="entries__like-button">
								edit
							</button>
						</Link>
						<Link to={`/delete-entry/${entry.id}`}>
							<button className="entries__like-button">
								delete
							</button>
						</Link>
					</div>
				);
			})}
		</>
	);
}

export default AllEntry;
