import "../Navbar/Navbar.scss";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<div className="navbar__flex-left">
					<NavLink to={"/"} className="navbar__sub-heading">
						Today's Entry
					</NavLink>
					<NavLink
						to={"/all-entries"}
						className="navbar__sub-heading"
					>
						All Entries
					</NavLink>

					<NavLink
						to={"/liked-quotes"}
						className="navbar__sub-heading"
					>
						Liked Quotes
					</NavLink>
				</div>

				<Link to={"/"} className="navbar__heading">
					My Daily Journal
				</Link>
				<div className="navbar__div">
					<NavLink to={"/calender"} className="navbar__sub-heading">
						Calender
					</NavLink>
					<NavLink className="navbar__sub-heading">Account</NavLink>
				</div>
			</div>
		</>
	);
}

export default Navbar;
