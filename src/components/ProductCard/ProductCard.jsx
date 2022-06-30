import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';
import NumberCommas from '~/utilities';

const ProductCard = ({ title, price, oldPrice, image01, image02, path }) => {
    return (
        <div className="product-card">
            <Link to={`/catalog/${path}`}>
                <div className="product-card_image">
                    <img
                        className="product-card_image_model"
                        src={image01}
                        alt=""
                    />
                    <img
                        className="product-card_image_clothes"
                        src={image02}
                        alt=""
                    />
                </div>
            </Link>
            <span className="product-card_name">{title}</span>
            <div className="product-card_price">
                <h3 className="product-card_price_new">
                    {NumberCommas(price)}
                </h3>
                <del className="product-card_price_old">
                    {NumberCommas(oldPrice)}
                </del>
            </div>
            <div className="product-card_icon">
                <Button icon="bx bx-cart" auto={true} size="small">
                    Xem chi tiết
                </Button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProductCard;
