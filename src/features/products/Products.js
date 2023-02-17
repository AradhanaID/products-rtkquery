import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useGetProductsQuery } from "../api/apiSlice";
import ProductCard from "./ProductCard";
const Products = () => {
	const { data: response, isLoading, isSuccess, isError, error } = useGetProductsQuery();

	let content;
	if (isLoading) {
		return (
			<div className="w-screen h-screen flex justify-center items-center">
				<TailSpin
					height='80'
					width='80'
					color='#4fa94d'
					ariaLabel='tail-spin-loading'
					radius='1'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			</div>
		);
	} else if (isSuccess) {
		content = response.products.map((product) => (
			<ProductCard
				key={product.id}
				product={product}
			/>
		));
	} else if (isError) {
		content = <p>{error}</p>;
	}
	return (
		<div className='max-w-5xl mx-auto'>
			<h1 className="text-4xl my-6 font-bold">Wishless Shop Products</h1>
			<div className='w-full flex flex-wrap gap-4 justify-center'>{content}</div>
		</div>
	);
};

export default Products;
