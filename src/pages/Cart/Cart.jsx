import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cart.scss';
import numberFormat from '~/utilities/numberFormat';
import Button from '~/components/Button';
import CartProduct from './CartProduct';
import { currentProduct } from '~/redux/selector';

const Cart = () => {
    const productState = useSelector(currentProduct);

    const [products, setProduct] = useState(productState);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        setProduct(productState);
        setTotalProducts(productState.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(productState.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
    }, [productState]);

    return (
        <div className="cart">
            <div className="cart_products">
                {products.map((product, index) => (
                    <CartProduct product={product} key={index} />
                ))}
            </div>
            <div className="cart_order">
                <div className="cart_order_content">
                    <span className="cart_order_content_title">
                        <p>Tổng số sản phẩm:</p>
                        <h3>{`${totalProducts} sản phẩm`}</h3>
                    </span>
                    <span className="cart_order_content_money">
                        <p>Tổng số tiền:</p>
                        <h2>{numberFormat(totalPrice)}đ</h2>
                    </span>
                    <Button isSquared={true}>Đặt hàng</Button>
                    <Link to="/catalog">
                        <Button isSquared={true}>TIếp tục mua hàng</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
