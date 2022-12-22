import Image from "next/image";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<span>ALL RIGHY RESERVED</span>
			<div className={styles.social}>
				<BsFacebook size={45} />
				<BsGithub size={45} />
				<BsInstagram size={45} />
			</div>
			<div className={styles.logo}>
				<Image src={Logo} alt="Logo" width={50} height={50} />
				<span>My Food</span>
			</div>
		</footer>
	);
}
