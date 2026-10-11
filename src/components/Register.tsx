import { useState } from "react";

interface RegisterData {
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	age: number;
	description: string;
	password: string;
}

const inputClass =
	"w-full border-2 border-gray-500 rounded-full px-4 py-1 mb-2 bg-white";

export default function Register() {
	const [registerData, setRegisterData] = useState<RegisterData>({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		age: 0,
		description: "",
		password: "",
	});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSubmitted(true);
	}

	return (
		<div className="size-full flex justify-center items-center">
			<article className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 bg-slate-200 sm:rounded-xl sm:my-5 px-10 py-4 flex flex-col items-center">
				<h1 className="text-2xl font-bold mb-3">Register Form</h1>

				<form onSubmit={handleSubmit} className="w-full">
					<section className="w-full sm:flex justify-between">
						<div className="w-full sm:mr-2 flex flex-col">
							<label htmlFor="firstname" className="font-bold">
								Firstname:
							</label>
							<input
								type="text"
								id="firstname"
								name="firstname"
								required
								className={inputClass}
								onChange={(e) =>
									setRegisterData({ ...registerData, firstname: e.target.value })
								}
							/>
						</div>
						<div className="w-full flex flex-col">
							<label htmlFor="lastname" className="font-bold">
								Lastname:
							</label>
							<input
								type="text"
								id="lastname"
								name="lastname"
								required
								className={inputClass}
								onChange={(e) =>
									setRegisterData({ ...registerData, lastname: e.target.value })
								}
							/>
						</div>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="email" className="font-bold">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							className={inputClass}
							onChange={(e) =>
								setRegisterData({ ...registerData, email: e.target.value })
							}
						/>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="phone" className="font-bold">
							Phone:
						</label>
						<input
							type="text"
							id="phone"
							name="phone"
							required
							className={inputClass}
							onChange={(e) =>
								setRegisterData({ ...registerData, phone: e.target.value })
							}
						/>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="age" className="font-bold">
							Age:
						</label>
						<input
							type="number"
							id="age"
							name="age"
							required
							className={inputClass}
							onChange={(e) =>
								setRegisterData({
									...registerData,
									age: parseInt(e.target.value),
								})
							}
						/>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="description" className="font-bold">
							Description:
						</label>
						<textarea
							id="description"
							name="description"
							required
							className="w-full border-2 border-gray-500 rounded-2xl px-4 py-2 mb-2 bg-white resize-none h-20"
							onChange={(e) =>
								setRegisterData({
									...registerData,
									description: e.target.value,
								})
							}
						></textarea>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="password" className="font-bold">
							Password:
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							className={inputClass}
							onChange={(e) =>
								setRegisterData({ ...registerData, password: e.target.value })
							}
						/>
					</section>

					<section className="w-full flex flex-col">
						<label htmlFor="repeatPassword" className="font-bold">
							Repeat Password:
						</label>
						<input
							type="password"
							id="repeatPassword"
							name="repeatPassword"
							required
							className={inputClass}
						/>
					</section>

					<section className="w-full flex justify-center">
						<button
							type="submit"
							className="bg-gray-500 px-10 mt-1 py-1 rounded-full text-white font-bold cursor-pointer"
						>
							Submit
						</button>
					</section>
				</form>

				{submitted && (
					<p className="mt-4 font-bold text-green-700" role="status">
						¡Formulario enviado, {registerData.firstname || "estudiante"}!
					</p>
				)}
			</article>
		</div>
	);
}
