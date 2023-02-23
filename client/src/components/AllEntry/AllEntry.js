import "../AllEntry/AllEntry.scss";

function AllEntry(props) {
	return (
		<>
			{props.entries?.map((entry) => {
				return (
					<div key={entry.id}>
						<p>{entry.Answer_1}</p>
						<p>{entry.Answer_2}</p>
						<p>{entry.Answer_3}</p>
						<p>{entry.title}</p>
					</div>
				);
			})}
		</>
	);
}

export default AllEntry;
