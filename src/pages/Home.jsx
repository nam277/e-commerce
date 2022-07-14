import React from 'react';
import { Link } from 'react-router-dom';

import Title from '~/components/Title';
import HeroSlider from '~/components/HeroSlider';
import { Section, SectionContent, SectionTitle } from '~/components/Section';
import Grid from '~/components/Grid';
import Policy from '~/components/Policy';
import ProductCard from '~/components/ProductCard';

import heroSliderData from '~/assets/fakeData/heroSlider';
import policies from '~/assets/fakeData/policies';
import { getProducts } from '~/assets/fakeData/products';
import banner from '~/assets/images/banner.png';

const Home = () => {
    return (
        <Title title="Home">
            <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />

            {/* Policy Section */}
            <Section>
                <SectionContent>
                    <Grid col={4} md={2} sm={1} rowGap={20}>
                        {policies.map((policy, index) => (
                            <Link key={index} to="./policy">
                                <Policy name={policy.name} desc={policy.description} icon={policy.icon} />
                            </Link>
                        ))}
                    </Grid>
                </SectionContent>
            </Section>

            {/* Best Seller Section */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần của <span>Yolo</span>
                </SectionTitle>
                <SectionContent>
                    <Grid col={4} md={2} sm={1} rowGap={30} colGap={10}>
                        {getProducts(4).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                image01={product.image01}
                                image02={product.image02}
                                path={product.slug}
                                auto={true}
                            />
                        ))}
                    </Grid>
                </SectionContent>
            </Section>

            {/* New Products Section */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới của <span>Yolo</span>
                </SectionTitle>
                <SectionContent>
                    <Grid col={4} md={3} sm={2} rowGap={30} colGap={10}>
                        {getProducts(8).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                image01={product.image01}
                                image02={product.image02}
                                path={product.slug}
                                size="small"
                            />
                        ))}
                    </Grid>
                </SectionContent>
            </Section>

            {/* Banner */}
            <Section>
                <SectionContent>
                    <Link to="./catalog">
                        <img src={banner} alt="Flat sale" />
                    </Link>
                </SectionContent>
            </Section>

            {/* Popular Products Section */}
            <Section>
                <SectionTitle>
                    Các sản phẩm phổ biến của <span>Yolo</span>
                </SectionTitle>
                <SectionContent>
                    <Grid col={5} md={4} sm={2} rowGap={30} colGap={10}>
                        {getProducts(12).map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                image01={product.image01}
                                image02={product.image02}
                                path={product.slug}
                                size="small"
                            />
                        ))}
                    </Grid>
                </SectionContent>
            </Section>
        </Title>
    );
};

export default Home;
