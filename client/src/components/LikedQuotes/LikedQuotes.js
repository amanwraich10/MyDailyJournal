import "../LikedQuotes/LikedQuotes.scss";

function LikedQuotes(props) {
	// console.log(props.quote);
	// const arr = [];

	return (
		<>
			<h1 className="likedquotes__heading">Favourite Quotes</h1>
			{props.quote?.map((q) => {
				const liked_quote = q.text;
				// console.log(q.text);
				return (
					<div key={q.id} className="likedquotes__div">
						<h2 className="likedquotes__text"> {liked_quote}</h2>
					</div>
				);

				// console.log(q.text);
			})}
		</>
	);
}

export default LikedQuotes;
