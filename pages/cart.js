import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import styles from "../styles/Cart.module.css";

export default function Cart() {
	const CartData = useStore((state) => state.cart);
	const removePizza = useStore((state) => state.removePizza);

	const handleRemove = (i) => {
		removePizza(i);
		toast.error("Item Removed");
	};
	const total = () =>
		CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);
	console.log(total());
	return (
		<Layout>
			<div className={styles.cart}>
				{/* details */}
				<div className={styles.details}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Pizza</th>
								<th>Name</th>
								<th>Size</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
								<th></th>
							</tr>
						</thead>
						<tbody className={styles.tbody}>
							{CartData.pizzas.length > 0 &&
								CartData.pizzas.map((pizza, i) => {
									const src = urlFor(pizza.image).url();
									return (
										<tr key={i}>
											<td className={styles.imageTd}>
												<Image
													loader={() => src}
													src={src}
													alt={pizza.name}
													width="85"
													height="85"
												/>
											</td>
											<td>{pizza.name}</td>
											<td>
												{pizza.size === 0
													? "Small"
													: pizza.size === 1
													? "Medium"
													: "Large"}
											</td>
											<td>{pizza.price}</td>
											<td>{pizza.quantity}</td>
											<td>{pizza.price * pizza.quantity}</td>
											<td
												onClick={() => handleRemove(i)}
												className={styles.clouse}
											>
												x
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>

				{/* summart */}
				<div className={styles.summart}>
					<span>Cart</span>
					<div className={styles.CartDetails}>
						<div>
							<span>Items</span>
							<span>{CartData.pizzas.length}</span>
						</div>
						<div>
							<span>Total</span>
							<span>$ {total()}</span>
						</div>
					</div>
					<div className={styles.buttons}>
						<button className="btn">Pay on Delivery</button>
						<button className="btn">Pay Now</button>
					</div>
				</div>
			</div>
			<Toaster />
		</Layout>
	);
}
