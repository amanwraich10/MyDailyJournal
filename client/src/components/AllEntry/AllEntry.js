import "../AllEntry/AllEntry.scss";

function AllEntry(props) {
	// console.log(props);
	return (
		<>
			{props.entries?.map((entry) => {
				const date = entry.date;
				const entryDate = new Date(date);
				return (
					<div key={entry.id}>
						<p>{entryDate.toDateString()}</p>
						<p>{entry.Answer_1}</p>
						<p>{entry.Answer_2}</p>
						<p>{entry.Answer_3}</p>
						<p>{entry.title}</p>
						<button>edit</button>
						<button>delete</button>
					</div>
				);
			})}
		</>
	);
}

export default AllEntry;
