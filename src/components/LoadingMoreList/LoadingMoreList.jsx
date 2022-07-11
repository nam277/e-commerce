import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';
import ProductCard from '../ProductCard';

const LoadingMoreList = ({ products }) => {
    const productsRef = useRef();
    const [data, setData] = useState([]);
    const perLoadMore = 8;
    const [indexPage, setIndexPage] = useState(0);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        setData(products.slice(0, perLoadMore));
        setIndexPage(1);
    }, [products]);

    // Logic to setLoadMore
    useEffect(() => {
        const handleScroll = () => {
            if (productsRef.current) {
                if (
                    window.scrollY + window.innerHeight >
                    productsRef.current.offsetTop + productsRef.current.clientHeight + 150
                ) {
                    setLoadMore(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [productsRef]);

    // Logic to get more products
    useEffect(() => {
        const maxPages = Math.ceil(products.length / perLoadMore);

        if (loadMore && indexPage <= maxPages) {
            const start = perLoadMore * indexPage;
            const end = start + perLoadMore;
            setData(data.concat(products.slice(start, end)));
            setIndexPage(indexPage + 1);
        }

        setLoadMore(false);
    }, [products, data, loadMore, indexPage]);

    return (
        <div ref={productsRef}>
            <Grid col={4} md={2} sm={1} rowGap={20}>
                {data.map((item, index) => (
                    <ProductCard
                        key={index}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        image01={item.image01}
                        image02={item.image02}
                        path={item.slug}
                    />
                ))}
            </Grid>
        </div>
    );
};

LoadingMoreList.propTypes = {
    products: PropTypes.any.isRequired,
};

export default LoadingMoreList;
