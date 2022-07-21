/* eslint-disable no-restricted-globals */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import noProduct from '~/assets/images/No_product.png';

import numberFormat from '~/utilities/numberFormat';
import { currentProduct } from '~/redux/selector';

const DropCart = ({ isShow, setShow }) => {
    const productState = useSelector(currentProduct);
    const checkDevicesWidth = window.screen.width || document.documentElement.clientWidth || window.innerWidth;

    const handleHideCartTippy = () => {
        if (checkDevicesWidth <= 1024) {
            setShow(false);
        }
    };

    return (
        <div className={`dropCart ${checkDevicesWidth > 1024 ? '' : isShow ? '' : 'none'}`}>
            {productState.length === 0 ? (
                <div className="dropCart_empty">
                    <img src={noProduct} alt="Your cart is currently empty" />
                    <span className="dropCart_empty_title">No products yet</span>
                </div>
            ) : (
                <>
                    <h4 className="dropCart_title">Recently Added Products</h4>
                    <div className="dropCart_products">
                        {productState.map((product, index) => (
                            <div className="dropCart_product" key={index}>
                                <div className="dropCart_product_img">
                                    <img src={product.image} alt="Hình ảnh sản phẩm" />
                                </div>
                                <div className="dropCart_product_info">
                                    <span className="dropCart_product_info_name">
                                        {product.title} - {product.color} - {product.size}
                                    </span>
                                    <span className="dropCart_product_info_price">{numberFormat(product.price)}đ</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dropCart_button">
                        <Link to="/Cart" onClick={handleHideCartTippy}>
                            <Button isSquared={true} size="small">
                                Move to cart
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default DropCart;
