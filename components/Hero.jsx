import Image from "next/image";
import { BsTelephoneForwardFill } from "react-icons/bs";
import Cherry from "../assets/Cherry.png";
import HeroImage from "../assets/HeroImage.png";
import Pizza1 from "../assets/p1.jpg";
import styles from "../styles/Hero.module.css";

export default function Hero() {
	return (
		<div className={styles.hero}>
			{/* left side */}
			<div className={styles.leftSide}>
				<div className={styles.cherryDiv}>
					<span>More than Faster</span>
					<Image src={Cherry} alt="Cherry" width={40} height={25} />
				</div>
				<div className={styles.heroText}>
					<span>Be The Fastest</span>
					<span>In Delivering</span>
					<span>
						Your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
					</span>
				</div>
				<span className={styles.miniText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias
					incidunt, ipsam assumenda ullam facilis, voluptates repellendus
					praesentium ipsum eaque illo quisquam, hic voluptatum minus nostrum id
					eius numquam iste.
				</span>
				<button className={`btn ${styles.btn}`}>Get Started</button>
			</div>
			{/* right side */}

			<div className={styles.rightSide}>
				<div className={styles.imageContainer}>
					<Image src={HeroImage} alt="HeroImage" />
				</div>
				<div className={styles.contactUs}>
					<span>Contact us</span>
					<div className={styles.phone}>
						<BsTelephoneForwardFill />
					</div>
				</div>
				<div className={styles.pizza}>
					<div className={styles.pizzaImg}>
						<Image src={Pizza1} alt="Pizza1" />
					</div>
					<div className={styles.details}>
						<span>Italian Pizza</span>
						<span>
							<span style={{ color: "var(--themeRed)" }}>$ </span> 7.45
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
