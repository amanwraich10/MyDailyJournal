import DeleteEntry from "../components/DeleteEntry/DeleteEntry";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeleteEntryPage() {
	const [delEntry, setDelEntry] = useState(null);

	// let navigate = useNavigate();
	let { entryId } = useParams();
	useEffect(() => {
		axios.get(`http://localhost:8082/entries/${entryId}`).then((res) => {
			console.log(res.data.id);
			setDelEntry(res.data.id);
		});
	}, [entryId]);
	return (
		<>
			<DeleteEntry delEntry={delEntry} />
		</>
	);
}

export default DeleteEntryPage;
