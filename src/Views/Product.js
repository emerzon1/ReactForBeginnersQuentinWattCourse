import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
function Product() {
    const { id } = useParams();
    let url = `https://5f206b5cfba6d400169d4f11.mockapi.io/api/v1/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    });

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        });
        axios
            .get(url)
            .then((response) => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false,
                });
            })
            .catch((error) => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true,
                });
            });
    }, [url]);
    let content = null;
    if (product.loading) {
        content = <Loader />;
    }
    if (product.error) {
        content = (
            <p>
                There was an error accessing the resource. Please refresh or try
                again later
            </p>
        );
    }
    if (product.data) {
        content = (
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    ></img>
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>{product.data.description}</div>
            </div>
        );
    }
    return <div>{content}</div>;
}
export default Product;
