import "./Start.scss";
import { Link } from "react-router-dom";

function GetStartedPage() {
	return (
		<>
			<div className="div">
				<p>My Daily Journal</p>
				<p>
					"Journaling is a good way to help us stop, take a step back
					and reflect on ourselves."
				</p>
				{/* <Link to={"create-account"}>
					<button>Create Account</button>
				</Link>
				<Link to={"login"}>
					<button>I have an Account</button>
				</Link> */}

				{/* <button>I have an Account</button> */}
			</div>
		</>
	);
}

export default GetStartedPage;
