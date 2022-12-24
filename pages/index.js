import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Services from "../components/Services";
import { client } from "../lib/client";
import styles from "../styles/Home.module.css";

export default function Home({ pizzas }) {
	return (
		<>
			<Head>
				<title>Food Project</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/Logo.png" />
			</Head>
			<Layout>
				<div className={styles.container}>
					<main className={styles.main}>
						<Hero />
						<Services />
						<Menu pizzas={pizzas} />
					</main>
				</div>
			</Layout>
		</>
	);
}

export const getServerSideProps = async () => {
	const query = '*[_type == "pizza"]';
	const pizzas = await client.fetch(query);
	return {
		props: {
			pizzas,
		},
	};
};
