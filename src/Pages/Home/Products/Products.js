import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Product from '../Product/Product'

const Products = () => {
    
    const { products } = useServices();
    const location = useLocation();
    
    return (
        <div className="container pt-4 pb-5 text-center">
            <h2 className="fw-bold">Our <span className="text-primary">Products</span></h2>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 g-lg-5 py-5">
                {
                    location.pathname !== "/shop" ?
                    (
                        products.slice(0, 4).map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    ) : (
                        products.map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    )
                }
            </div>
            
            {
                location.pathname !== "/shop" && <Link to="/shop"><button className="btn btn-primary">Check All Products</button></Link>
            }
        </div>
    );
};

export default Products;