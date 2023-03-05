import DeleteEntry from "../components/DeleteEntry/DeleteEntry";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeleteEntryPage() {
	const [delEntry, setDelEntry] = useState(null);

	// let navigate = useNavigate();
	let { entryId } = useParams();
	// console.log(entryId);
	useEffect(() => {
		axios.get(`http://localhost:8082/entries/${entryId}`).then((res) => {
			setDelEntry(res.data[0].id);
		});
	}, [entryId]);
	return (
		<>
			<DeleteEntry delEntry={delEntry} />
		</>
	);
}

export default DeleteEntryPage;
