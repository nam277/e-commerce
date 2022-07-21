import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import numberFormat from '~/utilities/numberFormat';

import './ProductDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '~/redux/cartReducer';
import { close } from '~/redux/productDetailReducer';

const ProductDetail = ({
    product = {
        title: '',
        price: '',
        oldPrice: '',
        image01: '',
        image02: '',
        categorySlug: '',
        colors: [],
        slug: '',
        size: [],
        description: '',
    },
}) => {
    const [activeImage, setActiveImage] = useState(product.image01);
    const [moreDescription, setMoreDescription] = useState(false);
    const [currentColor, setCurrentColor] = useState();
    const [currentSize, SetCurrentSize] = useState();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [currentUser] = useSelector((store) => store.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        setActiveImage(product.image01);
        setCurrentColor(undefined);
        SetCurrentSize(undefined);
        setQuantity(1);
    }, [product]);

    useEffect(() => {
        if (!moreDescription) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [moreDescription]);

    const updateQuantity = (calculation) => {
        switch (calculation) {
            case 'increase':
                setQuantity(quantity + 1);
                break;
            case 'decrease':
                quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                break;

            default:
        }
    };

    const isChecked = () => {
        if (currentColor === undefined) {
            alert('Please choose a color');
            return false;
        }
        if (currentSize === undefined) {
            alert('Please choose a size');
            return false;
        }
        return true;
    };

    const handleToCart = (type) => {
        if (currentUser) {
            if (isChecked()) {
                dispatch(
                    addProduct({
                        username: currentUser.username,
                        password: currentUser.password,
                        product: {
                            path: product.slug,
                            image: product.image01,
                            title: product.title,
                            color: currentColor,
                            size: currentSize,
                            price: product.price,
                            quantity: quantity,
                        },
                    }),
                );
                if (type === 'goToCart') {
                    navigate('/cart');
                    dispatch(close());
                }
            }
        } else alert('Please login first');
    };

    return (
        <div className="product">
            <div className="product_image">
                <div className="product_image_sub">
                    <div className="product_image_sub_item" onClick={() => setActiveImage(product.image01)}>
                        <img src={product.image01} alt="hình ảnh sản phẩm" />
                    </div>
                    <div className="product_image_sub_item" onClick={() => setActiveImage(product.image02)}>
                        <img src={product.image02} alt="hình ảnh sản phẩm" />
                    </div>
                </div>
                <div className="product_image_main">
                    <img src={activeImage} alt="hình ảnh sản phẩm" />
                </div>
                <div className={`product_image_des ${moreDescription ? 'more' : ''}`}>
                    <h2 className="product_image_des_title">Chi tiết sản phẩm</h2>
                    <div
                        className="product_image_des_content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product_image_des_toggle">
                        <Button size="small" onClick={() => setMoreDescription(!moreDescription)}>
                            {moreDescription ? 'shorter' : 'More'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product_options">
                <h2 className="product_options_heading">{product.title}</h2>
                <h3 className="product_options_price">{numberFormat(product.price)}</h3>
                <h4 className="product_options_title">Colors</h4>
                <div className="product_options_items">
                    {product.colors.map((color, index) => (
                        <div
                            className={`product_options_items_item ${currentColor === color ? 'active' : ''}`}
                            key={index}
                            onClick={() => setCurrentColor(color)}
                        >
                            <div className={`product_options_items_item_circle bg-color-${color}`} />
                        </div>
                    ))}
                </div>
                <h4 className="product_options_title">Sizes</h4>
                <div className="product_options_items">
                    {product.size.map((size, index) => (
                        <div
                            className={`product_options_items_item ${currentSize === size ? 'active' : ''}`}
                            key={index}
                            onClick={() => SetCurrentSize(size)}
                        >
                            <p className="product_options_items_item_size">{size}</p>
                        </div>
                    ))}
                </div>
                <h4 className="product_options_title">Items</h4>
                <div className="product_options_quantity">
                    <div className="product_options_quantity_calculate" onClick={() => updateQuantity('decrease')}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="product_options_quantity_number">{quantity}</div>
                    <div className="product_options_quantity_calculate" onClick={() => updateQuantity('increase')}>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div className="product_options_button">
                    <Button isSquared={true} onClick={() => handleToCart()}>
                        Add to cart
                    </Button>
                    <Button isSquared={true} onClick={() => handleToCart('goToCart')}>
                        buy now
                    </Button>
                </div>
            </div>

            <div className={`product_image_des mobile ${moreDescription ? 'more' : ''}`}>
                <h2 className="product_image_des_title">Chi tiết sản phẩm</h2>
                <div
                    className="product_image_des_content"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
                <div className="product_image_des_toggle">
                    <Button size="small" onClick={() => setMoreDescription(!moreDescription)}>
                        {moreDescription ? 'Shorter' : 'More'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
