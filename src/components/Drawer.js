const Drawer = () => {
	return (
		<div className="overlay" style={{ position: "static" }}>
			<div style={{ display: "none" }} className="drawer">
				<h2>Корзина</h2>
				<ul className="cart-items">
					<li className="cart-item">
						<div
							style={{ backgroundImage: "url(img/clear/2.png)" }}
							className="snickers"
						></div>
						{/* <img className="snickers" src="img/clear/2.png" alt="item" /> */}
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>12999 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>

					<li className="cart-item">
						<img className="snickers" src="img/clear/1.png" alt="item" />
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>8 499 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>
					<li className="cart-item">
						<img className="snickers" src="img/clear/1.png" alt="item" />
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>8 499 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>
					<li className="cart-item">
						<img className="snickers" src="img/clear/1.png" alt="item" />
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>8 499 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>
					<li className="cart-item">
						<img className="snickers" src="img/clear/1.png" alt="item" />
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>8 499 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>
					<li className="cart-item">
						<img className="snickers" src="img/clear/1.png" alt="item" />
						<div className="cart-item-text">
							<h4>Мужские Кроссовки Nike Air Max 270</h4>
							<div>8 499 руб.</div>
						</div>
						<img className="close" src="img/clear/close.svg" alt="close" />
					</li>
				</ul>
				<div className="bottom-clear">
					<div className="clear-block">
						<p className="clear-title">Итого:</p>
						<div className="clear-dotted"></div>
						<p className="clear-price">21 498 руб.</p>
					</div>
					<div className="clear-block">
						<p className="clear-title">Налог 5%:</p>
						<div className="clear-dotted"></div>
						<p className="clear-price">1074 руб.</p>
					</div>
					<div className="btn-wrap">
						<button>Оформить заказ</button>
						<svg
							width="16"
							height="14"
							viewBox="0 0 16 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 7H14.7143"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.71436 1L14.7144 7L8.71436 13"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
