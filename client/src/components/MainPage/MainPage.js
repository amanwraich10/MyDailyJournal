function MainPage(props) {
	return (
		<>
			{/* Hamburger menu */}
			<h1> My Daily Journal</h1>
			<div>
				<button>Log In/Out?</button>
				<button>Today</button>
				<button>All Entries</button>
				<button>Calender</button>
				<button>Liked quotes</button>
			</div>

			{props.quote?.map((q) => {
				return (
					<div key={q.id}>
						<h3>{q.date}</h3>
						<h3>{q.quote}</h3>
						<p>{q.author}</p>
					</div>
				);
			})}
			{/* 
			<h3>{props.date}</h3>
			<h3>{props.quote}</h3>
			<p>{props.author}</p> */}
			<div>
				<button>Like</button>
			</div>
			<form>
				<p>How are you feeling today and why?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>

			<form>
				<p>What are you looking forward to today?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>

			<form>
				<p>Daily Affirmations</p> <textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>

			<h3>Review of the day</h3>

			<form>
				<p>What is something you wish to have done differently?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>
			<form>
				<p>What did you learn today?</p>
				<textarea></textarea>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</form>
		</>
	);
}

export default MainPage;
