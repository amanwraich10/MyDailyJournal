import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeleteReviewEntry(props) {
	let navigate = useNavigate();
	const idToDelete = props.delRevEntry;
	// console.log(idToDelete);
	const deleteRevEnt = async (idToDelete) => {
		await axios.delete(`http://localhost:8082/entriesrev/${idToDelete}`);
		navigate("/all-entries");
		// props.setModalActive(false);
	};
	return (
		<>
			<Navbar />
			<p>Are you sure you want to delete this Entry?</p>
			<button
				onClick={() => {
					deleteRevEnt(idToDelete);
				}}
			>
				YES
			</button>
			<Link to="/all-entries">
				<button>NO</button>
			</Link>
		</>
	);
}

export default DeleteReviewEntry;
