import { Route, Routes, useLocation } from "react-router";
import { Header } from "./Header/Header";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Login from "../pages/Login";
import { Register } from "../pages/Register";
import Home from "../pages/Home";
import ErrorPages from "../pages/ErrorPages";
import UserProfile from "../pages/UserProfile";
import { Message } from "../pages/Message";
import Search from "../pages/Search";
import { Interesting } from "../pages/Interesting";
import { AddedPost } from "../pages/AddedPost";
import { useState } from "react";
import { Settings } from "../pages/Settings";

const Layout = () => {
	const [layoutBekColor, setLayoutBekColor] = useState<string>("");
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/register") {
		return (
			<Routes>
				<Route path="/register" element={<Register />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<ErrorPages />} />
					<Route path="/userProfile" element={<UserProfile />} />
					<Route path="/messageUsers" element={<Message />} />
					<Route path="/Search" element={<Search />} />
					<Route path="/Interesting" element={<Interesting />} />
					<Route path="/addedPost" element={<AddedPost />} />
					<Route path="/Settings" element={<Settings />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
