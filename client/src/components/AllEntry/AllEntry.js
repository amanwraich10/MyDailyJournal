import "../AllEntry/AllEntry.scss";
import { Link } from "react-router-dom";

function AllEntry(props) {
	return (
		<>
			{props.entries?.map((entry) => {
				const date = entry.date;
				const entryDate = new Date(date);
				return (
					<div key={entry.id} className="allentries__div">
						<p className="allentries__date">
							{entryDate.toDateString()}
						</p>
						<p className="allentries__question">
							{entry.Question_1}
						</p>
						<p className="allentries__answer">{entry.Answer_1}</p>
						<p className="allentries__question">
							{entry.Question_2}
						</p>
						<p className="allentries__answer">{entry.Answer_2}</p>
						<p className="allentries__question">
							{entry.Question_3}
						</p>
						<p className="allentries__answer">{entry.Answer_3}</p>
						<div className="allentries__flex">
							<Link
								to={`/edit-entry/${entry.id}`}
								className="allentries__edit-button"
							>
								EDIT
							</Link>
							<Link
								to={`/delete-entry/${entry.id}`}
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

export default AllEntry;
