import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import styles from "highlight.js/styles/atom-one-dark.css";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return {
		title: "Siddhant's blog",
		description: "This could've been just an html, but it's not!",
	};
};

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: styles,
		},
	];
};

export default function Blog() {
	return (
		<div>
			<div>
				<Link to={"/blog"}>
						Posts
				</Link>
				<Link to={"/"}>
						Home
				</Link>
			</div>
			<div>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}