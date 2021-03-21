import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import Layout from "../../compontent/Layout";
import { getPosts } from '../../lib/posts';
Posts.propTypes = {
	postList: PropTypes.array,
};
Posts.defaultProps = {
	postList: [],
};

function Posts({ postList }) {
	return (
		<Layout>
			{postList.map((post) => (
				<Card key={post.id} className='my-3 shadow'>
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>{post.description}</Card.Text>
						<Link href={`/posts/${post.id}`} passHref>
							<Card.Link>
								See more
							</Card.Link>
						</Link>
					</Card.Body>
				</Card>
			))}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const postList = await getPosts();

	return {
		props: {
			postList
		}
	}
};

export default Posts;