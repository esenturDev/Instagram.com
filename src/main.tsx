import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ProviderRoutes from "./providers/ProviderRoutes.tsx";
import ProvidersRedux from "./providers/ProvidersRedux.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ProvidersRedux>
			<BrowserRouter>
				<ProviderRoutes>
					<App />
				</ProviderRoutes>
			</BrowserRouter>
		</ProvidersRedux>
	</React.StrictMode>
);
