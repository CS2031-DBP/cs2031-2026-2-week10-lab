import Course from "./Course";

export default function CourseList() {
	const courses = [
		{ id: 1, name: "DBP", isCompleted: true },
		{ id: 2, name: "BD1", isCompleted: false },
		{ id: 3, name: "EDO", isCompleted: true },
	];

	return (
		<article className="w-full flex justify-center my-5">
			<section className="w-full px-4 sm:w-4/5 md:w-3/5 lg:w-2/5">
				<h1 className="text-xl font-bold mb-2">Course List</h1>
				<ul>
					{courses.map((course) => (
						<Course
							key={course.id}
							name={course.name}
							isCompleted={course.isCompleted}
						/>
					))}
				</ul>
			</section>
		</article>
	);
}
