import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProvidersReduxProps {
	children: ReactNode;
}
const ProvidersRedux: FC<ProvidersReduxProps> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default ProvidersRedux;
