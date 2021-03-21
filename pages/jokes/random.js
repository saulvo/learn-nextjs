import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../compontent/Layout";
import { getRandamJoke } from "../../lib/joke";

function Random({ joke }) {
	return (
		<Layout>
			<Card className="my-3 shadow">
				<Card.Body>
					<Card.Title>Here's your random joke for today</Card.Title>
					<Card.Text>{joke.value}</Card.Text>
					<Link href="/">
						<Button variant="dark">Back</Button>
					</Link>
				</Card.Body>
			</Card>
		</Layout>
	);
}

export const getServerSideProps = async () => {
	const joke = await getRandamJoke();

	return {
		props: {
			joke,
		},
	};
};

export default Random;
