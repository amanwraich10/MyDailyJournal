import "../LikedQuotes/LikedQuotes.scss";

function LikedQuotes(props) {
	// console.log(props.quote);
	// const arr = [];

	return (
		<>
			<h1>All Liked quotes</h1>
			{props.quote?.map((q) => {
				return (
					<div key={q.id}>
						<h2></h2>
					</div>
				);

				// console.log(q.text);
			})}
		</>
	);
}

export default LikedQuotes;
