import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

type ProviderRoutesProps = {
	children: ReactNode;
};

const ProviderRoutes: FC<ProviderRoutesProps> = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const isAuth = localStorage.getItem("auth");
	const isAuthResult = !!isAuth;

	useEffect(() => {
		if (isAuthResult && pathname === "/login") {
			navigate("/");
		} else if (isAuthResult && pathname === "/register") {
			navigate("/");
		} else if (!isAuthResult && pathname === "/") {
			navigate("/login");
		}
	}, [pathname]);
	return children;
};

export default ProviderRoutes;
