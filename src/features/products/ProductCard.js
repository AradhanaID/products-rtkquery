import React from "react";

const ProductCard = ({ product }) => {
	const { title, price, rating, stock, brand, category, thumbnail } = product;
	return (
		<div className='w-60 cursor-pointer mb-8'>
			<img
			className="aspect-square object-contain h-48 mx-auto"
				src={thumbnail}
				alt=''
			/>
			<div>
				<small className="text-zinc-700">{brand}</small>
				<h1 className="text-xl font-bold">{title}</h1>
				<p>
					${price} • {stock} remaining
				</p>
				<div className="mt-4 text-sm">
					<p>⭐{rating}</p>
					<p className="text-zinc-400 text-sm">{category}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
