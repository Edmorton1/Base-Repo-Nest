import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PREFIX } from "@libs/shared/CONST";
import Count from "@apps/client/testing/react-testing/Count";
import { useEffect } from "react";

function App() {
	console.log(PREFIX);
	console.log(import.meta.env["VITE_MY_ENV"]);
	console.log(_URL_SERVER);

	useEffect(() => {
		void fetch(_URL_SERVER + "/users")
			.then(data => data.json())
			.then(data => console.log(data));
	}, []);

	return (
		<>
			<div>
				<a
					rel="nooperer noreferrer"
					href="https://vite.dev"
					target="_blank">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Count />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
