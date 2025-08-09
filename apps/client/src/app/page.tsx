import { nextEnv } from "@apps/client/config/config";
import Link from "next/link";
// import { useEffect } from "react";

export default function Home() {
	console.log(nextEnv.URL_SERVER);

	// useEffect(() => {
	// 	void fetch(nextEnv.URL_SERVER)
	// 		.then(data => data.json())
	// 		.then(data => console.log(data));
	// }, []);

	return (
		<>
			<div>Hello world</div>
			<Link href="/users">Users</Link>
			<Link href="/">main</Link>
		</>
	);
}
