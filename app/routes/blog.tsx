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
		<div className="h-screen">
			<div className="absolute top-2 right-0">
				<Link 
					to={"/blog"}
					className="font-normal text-xl px-4 ">
						Posts
				</Link>
				<Link 
					to={"/"}
					className="font-normal text-xl px-4">
						Home
				</Link>
			</div>
			<div className="flex justify-center">
				<div className="prose prose-stone prose-lg py-20 px-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
}