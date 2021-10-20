import React from 'react';

const Product = ({ product }) => {
    
    const { img, name, type, generics, price } = product;
    
    return (
        <div className="col">
            <div className="card shadow-lg h-100 p-3 mx-3 mx-lg-0 rounded text-center">
                <img src={img} className="card-img-top w-75 mx-auto rounded" alt="..." />
                <div className="card-body px-0">
                    <h3 className="card-title fw-bold text-info">{name}</h3>
                    <h6 className="card-text fw-bold text-secondary">Type : {type}</h6>
                    <small className="card-text text-secondary m-0 mt-3">Generics : {generics}</small>
                    <h5 className="card-text fw-bold text-secondary mt-3">Price : ${price}</h5>
                </div>
                <button className="btn btn-primary w-auto mx-auto">Add To Cart <i className="fas fa-cart-plus"></i></button>
            </div>
        </div>
    );
};

export default Product;