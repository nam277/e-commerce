import React, { useCallback, useEffect, useState, useRef } from 'react';

import './Catalog.scss';
import Title from '~/components/Title';

import { getAllProducts } from '~/assets/fakeData/products';
import { category, colors, sizes } from '~/assets/fakeData/category';
import Checkbox from '~/components/Checkbox';
import Button from '~/components/Button';
import LoadingMoreList from '~/components/LoadingMoreList';

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
            temporary = temporary.filter((product) => product.colors.some((color) => filter.colors.includes(color)));
        }

        if (filter.sizes.length > 0) {
            temporary = temporary.filter((product) => product.size.some((size) => filter.sizes.includes(size)));
        }

        setProduct(temporary);
    }, [filter, allProducts]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const handleClearFilter = () => setFilter(initialFilter);

    const filterRef = useRef();

    const showHiddenFilter = () => filterRef.current.classList.toggle('active');

    return (
        <Title title="Product">
            <div className="catalog">
                <div className="catalog_filter" ref={filterRef}>
                    <div className="catalog_filter_close" onClick={() => showHiddenFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>
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
                <div className="catalog_toggle">
                    <Button size="small" onClick={() => showHiddenFilter()}>
                        Bộ lọc
                    </Button>
                </div>
                <div className="catalog_items">
                    <LoadingMoreList products={products} />
                </div>
            </div>
        </Title>
    );
};

export default Catalog;
