interface CourseProps {
	name: string;
	isCompleted: boolean;
}

export default function Course({ name, isCompleted }: CourseProps) {
	if (isCompleted) return <li className="py-1">{name} ✅</li>;
	return <li className="py-1">{name} ❌</li>;
}
