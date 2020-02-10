import React from 'react';
import style from './Product.module.scss';

// TODO from static to props
function Product() {

	return (
        <div className={style.product}>
			<div className={style.productThumb}>
				<img src="https://ae01.alicdn.com/kf/Hf799d9bb33524c8994b9470620aa9c63i.jpg_220x220q90.jpg_.webp" />
			</div>

			<div className={style.productBody}>
				<h2>
					$32.50
					<del>$45.00</del>
				</h2>
				<a href="#">Product Name Goes Here</a>
			</div>
		</div>
	);
}

export default Product;
