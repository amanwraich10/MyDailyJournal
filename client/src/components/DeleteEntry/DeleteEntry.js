import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../DeleteEntry/DeleteEntry.scss";

function DeleteEntry(props) {
	let navigate = useNavigate();
	const idToDelete = props.delEntry;
	// console.log(idToDelete);
	const deleteEnt = async (idToDelete) => {
		await axios.delete(`http://localhost:8082/entries/${idToDelete}`);
		navigate("/all-entries");
		// props.setModalActive(false);
	};
	return (
		<>
			<Navbar />
			<p className="likedquotes__heading">
				Are you sure you want to delete this Entry?
			</p>
			<div className="del__div">
				{/* <Link to="/all-entries"> */}
				<button
					className="likedquotes__b "
					onClick={() => {
						deleteEnt(idToDelete);
					}}
				>
					YES
				</button>
				{/* </Link> */}

				<Link to="/all-entries">
					<button className="likedquotes__b ">NO</button>
				</Link>
			</div>
		</>
	);
}

export default DeleteEntry;
