import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import numberFormat from '~/utilities';
import { useDispatch } from 'react-redux';
import { open } from '~/redux/productDetailReducer';

const ProductCard = ({ title, price, oldPrice, image01, image02, path, size, auto, animation = true }) => {
    const dispatch = useDispatch();

    const handleProductModal = () => {
        dispatch(open(path));
    };

    return (
        <div className="product-card">
            <Link to={`/catalog/${path}`}>
                <div className="product-card_image">
                    <img className="product-card_image_model" src={image01} alt="" />
                    <img className="product-card_image_clothes" src={image02} alt="" />
                </div>
            </Link>
            <span className="product-card_name">{title}</span>
            <div className="product-card_price">
                <h3 className="product-card_price_new">{numberFormat(price)}</h3>
                <h3 className="product-card_price_old">{numberFormat(oldPrice)}</h3>
            </div>
            <div className="product-card_icon">
                <Link to={`/catalog/${path}`}>
                    <Button
                        icon="bx bx-cart"
                        auto={auto}
                        size={size}
                        animation={animation}
                        onClick={handleProductModal}
                    >
                        Xem chi tiết
                    </Button>
                </Link>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    path: PropTypes.string,
};

export default ProductCard;
