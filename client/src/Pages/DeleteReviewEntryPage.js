import DeleteReviewEntry from "../components/DeleteReviewEntry/DeleteReviewEntry";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DeleteReviewEntryPage() {
	const [delRevEntry, setDelRevEntry] = useState(null);
	let { entryRevId } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8082/entriesrev/${entryRevId}`)
			.then((res) => {
				setDelRevEntry(res.data.id);
			});
	}, [entryRevId]);
	return (
		<>
			<DeleteReviewEntry delRevEntry={delRevEntry} />
		</>
	);
}

export default DeleteReviewEntryPage;
