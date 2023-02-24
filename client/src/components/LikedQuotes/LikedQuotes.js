import "../LikedQuotes/LikedQuotes.scss";

function LikedQuotes(props) {
	console.log(props.quote);

	return (
		<>
			<h1>All Liked quotes</h1>
			{props.quote?.map((q) => {
				console.log(q.text);
				return (
					<div key={q.id}>
						<h2>{q.id}</h2>
						<h2></h2>
					</div>
				);
				// console.log(q.text);
			})}
		</>
	);
}

export default LikedQuotes;
