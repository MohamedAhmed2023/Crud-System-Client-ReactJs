import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductsDetails.css";

function ProductsDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        if (id) {
            fetch(`${apiUrl}/api/products/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('Fetched product data:', data);
                    if (data.status === 'success') {
                        setProduct(data.data);
                    } else {
                        console.error('Failed to fetch product data');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching the product:', error);
                });
        } else {
            console.error('Product ID is undefined');
        }
    }, [id, apiUrl]);

    return (
        <>
            {product ? (
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Price: {product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default ProductsDetails;
