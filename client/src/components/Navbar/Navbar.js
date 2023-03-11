import "../Navbar/Navbar.scss";
import { NavLink, Link } from "react-router-dom";

function Navbar(props) {
	return (
		<>
			<div className="navbar">
				<Link to={"/"} className="navbar__heading">
					My Daily Journal
				</Link>
				<div className="navbar__flex-left">
					<NavLink to={"/"} className="navbar__sub-heading">
						HOME
					</NavLink>
					<NavLink
						to={"/all-entries"}
						className="navbar__sub-heading"
					>
						ENTRIES
					</NavLink>

					<NavLink
						to={"/liked-quotes"}
						className="navbar__sub-heading"
					>
						QUOTES
					</NavLink>

					<NavLink to={"/calender"} className="navbar__sub-heading">
						CALENDAR
					</NavLink>
					<NavLink to={"/login"} className="navbar__sub-heading">
						LOGOUT
					</NavLink>
				</div>
			</div>
		</>
	);
}

export default Navbar;
