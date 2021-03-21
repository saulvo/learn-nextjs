import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../compontent/Layout";
import { getPostById, getPostIds } from "../../lib/posts";

Post.propTypes = {};

function Post({ post }) {
	return (
		<Layout>
			<Card className="my-3 shadow">
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Text>{post.description}</Card.Text>
					<Link href="/posts">
						<Button variant="dark">Back</Button>
					</Link>
				</Card.Body>
			</Card>
		</Layout>
	);
}

export const getStaticPaths = async () => {
	const paths = await getPostIds();
	console.log(paths);

	return {
		paths,
		fallback: false, // bat ki trang nao k returned getStaticPaths se toi trang 404
	};
};

export const getStaticProps = async ({ params }) => {
	const post = await getPostById(params.id);

	return {
		props: {
			post,
		},
	};
};

export default Post;
