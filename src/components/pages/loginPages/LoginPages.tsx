import { useNavigate } from "react-router";
import scss from "./LoginPages.module.scss";
import { useGetUsersQuery } from "../../../redux/api/auth";
import { useState } from "react";
import logo from "../../..//assets/photos/screenshot2.png";
import icon from "../../../assets/facebook-circle-fill.svg";
export const LoginPages = () => {
	const { data } = useGetUsersQuery();
	// const [postLogin] =  usePostLoginMutation();
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const resultUsers = data?.find(
		(item) => item.email === email && item.password === password
	);

	const handleLogin = async () => {
		// const newUsers = {
		//   email,
		//   password,
		// };
		if (resultUsers) {
			// await postLogin(newUsers);
			localStorage.setItem("auth", JSON.stringify(email));
			navigate("/");
		} else {
			alert("Пароль или Email не правильный!");
		}
	};

	return (
		<div className={scss.loginPages}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.loginPhotos}>
						<img src={logo} alt="logo photo loginPages" />
					</div>
					<div className={scss.forms}>
						<i>Instagram</i>
						<div className={scss.inputsDiv}>
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
							<button onClick={handleLogin}>Login</button>
							{/* <button onClick={() => navigate("/register")}>Register</button> */}
							<div className={scss.and}>
								<div></div>
								<p>ИЛИ</p>
								<div></div>
							</div>
							<button className={scss.buttonIcon}>
								<img src={icon} alt="icon is Facebook" />
								<span>Войти через Facebook</span>
							</button>
							<p className={scss.p}>Забыли пароль?</p>
						</div>
					</div>
				</div>
				<div className={scss.forms2}>
					<div className={scss.divContents2}>
						<p>У вас ещё нет аккаунта?</p>
						<span onClick={() => navigate("/register")}>
							Зарегистрироваться
						</span>
					</div>
					<h3>Установите приложение.</h3>
					<div className={scss.divButtons}>
						<img
							src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png"
							alt=""
						/>
						<img className={scss.img}
							src="https://static.cdninstagram.com/rsrc.php/v3/yv/r/_UbeIRgTpG-.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
