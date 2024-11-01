import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../Pages/AddProducts.css"


function UpdateProducts(e) {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(`${apiUrl}/api/products/` + id)
            .then((res) => setdata(res.data)).catch(err => console.log(err))
    }, [apiUrl, id])

    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`${apiUrl}/api/products/` + id, data).then(res => {
            alert('Update done')
            navigate('/Products')
        })
    }
    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <h1>Update Products</h1>
                    <div className="form-group">
                        <label htmlFor="productsTitle" classNameName="form-label">Products Title</label>
                        <input type="text" classNameName="form-control" placeholder="Products Title" id="ProductsTitle" aria-describedby="Products title" value={data.title} onChange={e => setdata({
                            ...data, title: e.target.value
                        })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsdescription" classNameName="form-label">Products description</label>
                        <input type="text" classNameName="form-control" placeholder="Products description" id="Productsdescription" aria-describedby="Products description" value={data.description} onChange={e => setdata({
                            ...data, description: e.target.value
                        })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsimage" classNameName="form-label">Products image</label>
                        <input type="text" classNameName="form-control" placeholder="Products image URL" id="Productsimage" aria-describedby="Products image" value={data.image} onChange={e => setdata({
                            ...data, image: e.target.value
                        })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productsPrice" classNameName="form-label">Price</label>
                        <input type="number" classNameName="form-control" id="productsPrice" placeholder="Products Price" aria-describedby="Products title" value={data.price} onChange={e => setdata({
                            ...data, price: e.target.value
                        })} />
                    </div>
                    <button id="btn-submit" type="submit" className="Add-Btn">Update Product</button>
                </form>
            </div>
        </>
    )
}


export default UpdateProducts;