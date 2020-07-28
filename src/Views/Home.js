import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from '../Hooks/HttpRequest';
function Home() {
    let content = null;

    let url = `https://5f206b5cfba6d400169d4f11.mockapi.io/api/v1/products?page=1&limit=10`;
    let products = useAxiosGet(url);
    if (products.loading) {
        content = <Loader />;
    }
    if (products.error) {
        content = (
            <p>
                There was an error accessing the resource. Please refresh or try
                again later
            </p>
        );
    }
    if (products.data) {
        content = products.data.map((product, key) => {
            return (
                <div key={key}>
                    <ProductCard product={product}/>
                </div>
            );
        });
    }
    return (
        <div>
            <h1 className="font-bold text-2xl">Best Sellers</h1>
            {content}
        </div>
    );
}
export default Home;
