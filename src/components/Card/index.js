import styles from "./Card.module.scss";


const Card = ({ name, price, img, onClick}) => {
	function showName(e) {
		console.log(e)
	}

	let pathImage = "img/snickers/" + img + ".jpg"

	return (
		<div className={styles.card}>
			<img src="/img/snickers/heart2.svg" alt="unlike" className={styles.cardLike} />
			<img width={133} height={112} src={pathImage} alt="snickers" />
			<h5 className={styles.contentTitle}>{name}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span className={styles.cardPrice}>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button className={styles.button} onClick={onClick}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
							fill="#D3D3D3"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Card;