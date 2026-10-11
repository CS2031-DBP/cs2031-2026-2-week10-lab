import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/register" element={<Register />} />
				<Route path="/courses" element={<CourseList />} />
				<Route path="*" element={<h1 className="text-2xl p-4">Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
