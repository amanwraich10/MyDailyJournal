import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DeleteReviewEntry.scss";

function DeleteReviewEntry(props) {
	let navigate = useNavigate();
	const idToDelete = props.delRevEntry;
	const deleteRevEnt = async (idToDelete) => {
		await axios.delete(`http://localhost:8082/entriesrev/${idToDelete}`);
		navigate("/all-entries");
	};
	return (
		<>
			<Navbar />
			<p className="likedquotes__heading">
				Are you sure you want to delete this Entry?
			</p>
			<button
				className="editentries__delete-button"
				onClick={() => {
					deleteRevEnt(idToDelete);
				}}
			>
				YES
			</button>
			<Link className="editentries__cancl-button " to="/all-entries">
				NO
			</Link>
		</>
	);
}

export default DeleteReviewEntry;
