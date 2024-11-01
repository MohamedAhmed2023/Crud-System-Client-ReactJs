import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./AddProducts.css"

function AddProducts() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setimage] = useState();
    const [description, setdescription] = useState(0);
    let navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    const formSub = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}/api/products`, {
            title, price, image, description
        }).then((data) => {
            navigate('/products')
        })
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={formSub} className="form">
                    <h1>Add Products</h1>
                    <div className="form-group">
                        <label htmlFor="productsTitle" classNameName="form-label">Products Title</label>
                        <input type="text" classNameName="form-control" placeholder="Products Title" id="ProductsTitle" aria-describedby="Products title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsdescription" classNameName="form-label">Products description</label>
                        <input type="text" classNameName="form-control" placeholder="Products description" id="Productsdescription" aria-describedby="Products description" onChange={(e) => setdescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsimage" classNameName="form-label">Products image</label>
                        <input type="text" classNameName="form-control" placeholder="Products image URL" id="Productsimage" aria-describedby="Products image" onChange={(e) => setimage(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsPrice" classNameName="form-label">Price</label>
                        <input type="number" classNameName="form-control" id="productsPrice" placeholder="Products Price" aria-describedby="Products title" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <button id="btn-submit" onClick={() => formSub} type="submit" className="Add-Btn">Add Product</button>
                </form>
            </div >
        </>
    )
}
export default AddProducts;
