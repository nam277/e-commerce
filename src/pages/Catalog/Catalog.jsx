import React, { useCallback, useEffect, useState } from 'react';
import Grid from '~/components/Grid';

import './Catalog.scss';
import Title from '~/components/Title';
import ProductCard from '~/components/ProductCard';

import { getAllProducts, getProducts } from '~/assets/fakeData/products';
import { category, colors, sizes } from '~/assets/fakeData/category';
import Checkbox from '~/components/Checkbox';
import Button from '~/components/Button';

const Catalog = () => {
    const initialFilter = {
        categories: [],
        colors: [],
        sizes: [],
    };
    const [filter, setFilter] = useState(initialFilter);

    const allProducts = getAllProducts();
    const [products, setProduct] = useState(allProducts);

    const updateFilter = (action, check, item) => {
        if (check) {
            switch (action) {
                case 'CATEGORY':
                    setFilter({
                        ...filter,
                        categories: [...filter.categories, item.categorySlug],
                    });
                    break;
                case 'COLOR':
                    setFilter({
                        ...filter,
                        colors: [...filter.colors, item.color],
                    });
                    break;
                case 'SIZE':
                    setFilter({
                        ...filter,
                        sizes: [...filter.sizes, item.size],
                    });
                    break;
                default:
            }
        } else {
            switch (action) {
                case 'CATEGORY':
                    const newCategories = filter.categories.filter((category) => category !== item.categorySlug);
                    setFilter({ ...filter, categories: newCategories });
                    break;
                case 'COLOR':
                    const newColors = filter.colors.filter((color) => color !== item.color);
                    setFilter({ ...filter, colors: newColors });
                    break;
                case 'SIZE':
                    const newSizes = filter.sizes.filter((size) => size !== item.size);
                    setFilter({ ...filter, sizes: newSizes });
                    break;
                default:
            }
        }
    };

    const updateProducts = useCallback(() => {
        let temporary = allProducts;
        if (filter.categories.length > 0) {
            temporary = temporary.filter((product) => filter.categories.includes(product.categorySlug));
        }

        if (filter.colors.length > 0) {
            temporary = temporary.filter((product) => {
                const check = product.colors.find((color) => filter.colors.includes(color));
                return !!check;
            });
        }

        if (filter.sizes.length > 0) {
            temporary = temporary.filter((product) => {
                const check = product.size.find((size) => filter.sizes.includes(size));
                return !!check;
            });
        }

        setProduct(temporary);
    }, [filter, allProducts]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const handleClearFilter = () => setFilter(initialFilter);
    return (
        <Title title="Product">
            <div className="catalog">
                <div className="catalog_filter">
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">danh mục sản phẩm</h3>
                        <div className="catalog_filter_item_checkbox">
                            {category.map((item, index) => (
                                <Checkbox
                                    onChange={(check) => updateFilter('CATEGORY', check, item)}
                                    key={index}
                                    label={item.display}
                                    checked={filter.categories.includes(item.categorySlug)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">màu sắc</h3>
                        <div className="catalog_filter_item_checkbox">
                            {colors.map((item, index) => (
                                <Checkbox
                                    key={index}
                                    onChange={(check) => updateFilter('COLOR', check, item)}
                                    label={item.display}
                                    checked={filter.colors.includes(item.color)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_item">
                        <h3 className="catalog_filter_item_title">kích thước</h3>
                        <div className="catalog_filter_item_checkbox">
                            {sizes.map((item, index) => (
                                <Checkbox
                                    key={index}
                                    onChange={(check) => updateFilter('SIZE', check, item)}
                                    label={item.display}
                                    checked={filter.sizes.includes(item.size)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="catalog_filter_delete">
                        <Button size="small" onClick={handleClearFilter}>
                            xóa toàn bộ
                        </Button>
                    </div>
                </div>
                <div className="catalog_items">
                    <Grid col={4} rowGap={20}>
                        {products.map((item, index) => (
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
            </div>
        </Title>
    );
};

export default Catalog;
