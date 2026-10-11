import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="w-full bg-slate-200 py-3 px-4 sm:px-8 flex justify-between items-center">
			<div className="text-xl font-bold">Sparky Students</div>
			<ul className="flex">
				<li className="py-2 px-4 hover:bg-slate-300 rounded-full">
					<Link to="/register">Register</Link>
				</li>
				<li className="py-2 px-4 hover:bg-slate-300 rounded-full">
					<Link to="/courses">Courses</Link>
				</li>
			</ul>
		</nav>
	);
}
