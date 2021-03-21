import Link from "next/link";
import { Button, Jumbotron } from "react-bootstrap";
import Layout from "../compontent/Layout";

function Home(props) {
	return (
		<Layout>
			<h1>My Next App</h1>
			<Jumbotron>
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<p>
					<Link href="/posts">
						<Button variant="primary">Post</Button>
					</Link>
				</p>
			</Jumbotron>
		</Layout>
	);
}

export default Home;
