import "../LikedQuotes/LikedQuotes.scss";

function LikedQuotes(props) {
	return (
		<>
			<h1 className="likedquotes__heading">Favourite Quotes</h1>
			{props.quote?.map((q) => {
				const liked_quote = q.text;
				return (
					<div key={q.id} className="likedquotes__div">
						<h2 className="likedquotes__text"> {liked_quote}</h2>
					</div>
				);
			})}
		</>
	);
}

export default LikedQuotes;
