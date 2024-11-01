// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';
// import "./Products.css";

// function Products() {
//     const [products, setProducts] = useState([]);
//     const apiUrl = process.env.REACT_APP_API_URL;

//     const GetAllProducts = () => {
//         fetch(`${apiUrl}/api/products`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 if (data.status === 'success') {
//                     setProducts(data.data);
//                 } else {
//                     setProducts([]
//                     );
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error fetching products:', error);
//                 setProducts([]);
//             });
//     };

//     useEffect(() => {
//         GetAllProducts();
//     }, []);

//     const DeleteProducts = (product) => {
//         Swal.fire({
//             title: `Are you sure to delete ${product.title}?`,
//             showCancelButton: true,
//             confirmButtonText: 'Delete',
//             cancelButtonText: 'Cancel'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`${apiUrl}/api/products/${product._id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => {
//                         if (!res.ok) {
//                             throw new Error('Network response was not ok');
//                         }
//                         return res.json();
//                     })
//                     .then((data) => {
//                         if (data.status === 'success') {
//                             GetAllProducts(); // Refresh the product list after successful deletion
//                         } else {
//                             console.error('Error deleting product:', data.message);
//                         }
//                     })
//                     .catch((error) => {
//                         console.error('Error deleting product:', error);
//                     });
//             }
//         });
//     };

//     return (
//         <>
//             <h1 className="heading-all text-center">All Products</h1>
//             <table className="table-products mt-5">
//                 <thead>
//                     <tr>
//                         <th scope="col">Products</th>
//                         <th scope="col">Price</th>
//                         <th scope="col">Operation</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length > 0 ? (
//                         products.map((product) => (
//                             <tr key={product._id}>
//                                 <td>{product.title}</td>
//                                 <td>{product.price}</td>
//                                 <td className="Btn-all">
//                                     <Link to={`/products/${product._id}`} className="btn btn-info">View</Link>
//                                     <Link to={`/products/update/${product._id}`} className="btn btn-success">Update</Link>
//                                     <button onClick={() => DeleteProducts(product)} className="btn btn-danger">Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" className="text-center">No products found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// export default Products;

import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    const GetAllProducts = useCallback(() => {
        fetch(`${apiUrl}/api/products`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                if (data.status === 'success') {
                    setProducts(data.data);
                } else {
                    setProducts([]);
                }
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setProducts([]);
            });
    }, [apiUrl]);

    useEffect(() => {
        GetAllProducts();
    }, [GetAllProducts]);

    const DeleteProducts = (product) => {
        Swal.fire({
            title: `Are you sure to delete ${product.title}?`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${apiUrl}/api/products/${product._id}`, {
                    method: "DELETE",
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return res.json();
                    })
                    .then((data) => {
                        if (data.status === 'success') {
                            GetAllProducts(); // Refresh the product list after successful deletion
                        } else {
                            console.error('Error deleting product:', data.message);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting product:', error);
                    });
            }
        });
    };

    return (
        <>
            <h1 className="heading-all text-center">All Products</h1>
            <table className="table-products mt-5">
                <thead>
                    <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td className="Btn-all">
                                    <Link to={`/products/${product._id}`} className="btn btn-info">View</Link>
                                    <Link to={`/products/update/${product._id}`} className="btn btn-success">Update</Link>
                                    <button onClick={() => DeleteProducts(product)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No products found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Products;
