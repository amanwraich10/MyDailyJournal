import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteEntry(props) {
	console.log(props.delEntry);
	let navigate = useNavigate();
	const idToDelete = props.delEntry;
	const deleteEnt = async (idToDelete) => {
		await axios.delete(`http://localhost:8082/entries/${idToDelete}`);
		navigate("/all-entries");
	};
	return (
		<>
			<Navbar />
			<p className="likedquotes__heading">
				Are you sure you want to delete this Entry?
			</p>
			<div>
				<button
					className="editentries__delete-button"
					onClick={() => {
						deleteEnt(idToDelete);
					}}
				>
					YES
				</button>

				<Link to="/all-entries" className="editentries__cancl-button ">
					NO
				</Link>
			</div>
		</>
	);
}

export default DeleteEntry;
