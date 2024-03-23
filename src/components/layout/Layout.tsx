import { Header } from "./Header/Header";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";

const Layout = () => {
	return (
		<div className={scss.layout}>
			<Header />
			<main></main>
			<Footer />
		</div>
	);
};

export default Layout;
