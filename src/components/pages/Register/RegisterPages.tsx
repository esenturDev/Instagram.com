import { useState } from "react";
import scss from "./RegisterPages.module.scss";
import { usePostRegisterMutation } from "../../../redux/api/auth";
import { useNavigate } from "react-router";

const RegisterPages = () => {
	const [postRegister] = usePostRegisterMutation();
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [photo, setPhoto] = useState<string>("");
	const handlePostRegister = async () => {
		const newUsers = {
			email,
			password,
			photo,
		};
		await postRegister(newUsers);
		navigate("/login");
	};
	return (
		<div className={scss.registerPages}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.forms}>
						<h1>Instagram</h1>
						<div>
							<p>
								Зарегистрируйтесь, чтобы <br />
								смотреть фото и видео ваших <br />
                друзей.</p>
						</div>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="email"
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="password"
						/>
						<input
							type="url"
							value={photo}
							onChange={(e) => setPhoto(e.target.value)}
							placeholder="photo"
						/>
						<button onClick={handlePostRegister}>Register</button>
						<button onClick={() => navigate("/login")}>Login</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPages;
