import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
function Home() {
    let content = null;

    let url = `https://5f206b5cfba6d400169d4f11.mockapi.io/api/v1/products?page=1&limit=10`;
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    });
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false,
        });
        axios
            .get(url)
            .then((response) => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false,
                });
            })
            .catch((error) => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true,
                });
            });
    }, [url]);
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
                <div>
                    <ProductCard />
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
