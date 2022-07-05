import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return {
		title: "Siddhant Maitra",
		description: "Website of Siddhant Maitra",
	};
};

export default function Index() {
	return (
		<div className="flex justify-left text-center text-4xl md:text-left p-12 md:pt-44 h-screen">
			<div>
				<div className=" font-light font-4xl leading-normal md:leading-relaxed">
					<h1 className="font-bold text-6xl pb-4">Hello,</h1>
					<h2 className="font-medium">My name is Siddhant Maitra.</h2>
					<p>I am a final year engineering student with a focus in CS.</p>
					<p>I sometimes write stuff on my blog. </p>
					<p>You can find me on: 
					<a className=" font-normal underline hover:underline-offset-4" href="https://twitter.com/Siddhantmaitra">Twitter </a> 	
						and <a className=" font-normal underline hover:underline-offset-2" href="https://github.com/siddhantmaitra">Github.</a>
					</p>
				</div>
				<Link to={"/blog"}>
					<button className="pt-6">
						<span className="font-normal text-xl bg-black text-white px-4 py-2 hover:opacity-90 transition-opacity duration-300 rounded-sm shadow-6xl">
							Go to the blog
						</span>
					</button>
				</Link>
			</div>
		</div>

	);
}