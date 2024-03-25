import { useState } from "react";
import scss from "./RegisterPages.module.scss";
import { usePostRegisterMutation } from "../../../redux/api/auth";
import { useNavigate } from "react-router";

import icon from "../../../assets/facebook-circle-fill.svg";
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
						<i>Instagram</i>
						<div className={scss.textsDiv}>
							<p>
								Зарегистрируйтесь, чтобы <br />
								смотреть фото и видео ваших <br />
								друзей.
							</p>
						</div>
						<button className={scss.buttonIcon}>
							<img src={icon} alt="icon" />
							<span>Войти через Facebook</span>
						</button>
						<div className={scss.and}>
							<div></div>
							<p>ИЛИ</p>
							<div></div>
						</div>
						<div className={scss.inputs}>
							<input type="text" placeholder="Моб, телефон или эл. адрес" />
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
							<p>
								Люди, которые пользуются нашим сервисом, <br /> могли загрузить
								вашу контактную информацию <br /> в Instagram. Подробнее
							</p>
							<p>
								Регистрируясь, вы принимаете наши Условия, <br /> Политику
								конфиденциальности и Политику в <br /> отношении файлов cookie.
							</p>
							<button onClick={handlePostRegister}>Register</button>
							{/* <button onClick={() => navigate("/login")}>Login</button> */}
						</div>
					</div>
					<div className={scss.forms2Div}>
						<p>
							Есть аккаунт? <span onClick={() => navigate("/login")}>Вход</span>
						</p>
					</div>
					<h3>Установите приложение.</h3>
					<div className={scss.divButtons}>
						<img
							src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png"
							alt=""
						/>
						<img
							className={scss.img}
							src="https://static.cdninstagram.com/rsrc.php/v3/yv/r/_UbeIRgTpG-.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPages;
