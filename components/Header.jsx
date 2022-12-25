import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import Logo from "../assets/Logo.png";
import { useStore } from "../store/store";
import styles from "../styles/Header.module.css";

export default function Header() {
	// state in terminal
	const state = useStore((state) => state);
	console.log(state);

	const items = useStore((state) => state.cart.pizzas.length);
	return (
		<header className={styles.header}>
			{/* logo side */}
			<div className={styles.logo}>
				<Image src={Logo} alt="Logo" width={50} height={50} />
				<span>My Food</span>
			</div>
			{/* menu side */}
			<nav className={styles.nav}>
				<ul className={styles.menu}>
					<li>Home</li>
					<li>Menu</li>
					<li>Contact</li>
				</ul>
			</nav>
			{/* right side */}
			<div className={styles.rightSide}>
				<div className={styles.cart}>
					<BiShoppingBag size={35} color="#2E2E2E" />
					<div className={styles.badge}>{items}</div>
				</div>
			</div>
		</header>
	);
}
