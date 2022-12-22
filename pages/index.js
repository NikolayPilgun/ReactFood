import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
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
					</main>
				</div>
			</Layout>
		</>
	);
}
