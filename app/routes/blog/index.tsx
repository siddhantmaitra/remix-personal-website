import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
// Import of blog posts 
import * as firstPost from "post-01.mdx";
import * as secondPost from "thinkpadServer.mdx";



function postFromModule(module: any) {
	return {
		slug: module.filename.replace(/.mdx?$/, ""),
		...module.attributes.meta,
	};
}

export const loader: LoaderFunction = () => {
	return [
	
		postFromModule(secondPost),
		postFromModule(firstPost)
	];
};

export default function BlogIndex() {
	const posts = useLoaderData();
	return (
		<div className="px-6">
			<h2>Posts</h2>

			<ul>
				{posts.map((post: any) => (
					<li key={post.slug}>
						<Link to={`/blog/${post.slug}`}>{post.title}</Link>

						{post.description && (
							<p className="m-0 lg:m-0">{post.description}</p>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}