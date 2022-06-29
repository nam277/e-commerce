import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './HeroSlider.scss';

const HeroSlider = ({ data, control = false, auto = true, timeOut = 3000 }) => {
    const [activeSlider, setActiveSlider] = useState(1);

    const nextSlide = useCallback(() => {
        if (activeSlider === data.length - 1) {
            setActiveSlider(0);
        } else setActiveSlider((prev) => prev + 1);
    }, [activeSlider, data]);

    const prevSlide = () => {
        if (activeSlider - 1 < 0) {
            setActiveSlider(data.length - 1);
        } else setActiveSlider((prev) => prev - 1);
    };

    useEffect(() => {
        if (auto) {
            const timerID = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => clearInterval(timerID);
        }
    }, [timeOut, data, auto, nextSlide]);

    return (
        <div className="slider">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`slider_items ${
                        index === activeSlider ? 'active' : ''
                    }`}
                >
                    <div className="slider_items_left">
                        <div
                            className={`slider_items_left_title color-${item.color}`}
                        >
                            <p>{item.title}</p>
                        </div>
                        <div className="slider_items_left_description">
                            <p>{item.description}</p>
                        </div>
                        <Link to={item.path} className="slider_items_left_link">
                            <button>Xem chi tiết</button>
                        </Link>
                    </div>
                    <div className="slider_items_right">
                        <img
                            className="slider_items_right_img"
                            src={item.img}
                            alt=""
                        />
                        <div
                            className={`slider_items_right_shape bg-color-${item.color}`}
                        />
                    </div>
                </div>
            ))}

            {control ? (
                <div className="slider_control">
                    <div className="slider_control_btn" onClick={prevSlide}>
                        <i className="bx bx-chevron-left"></i>
                    </div>
                    <div className="slider_control_index">
                        <span>
                            {activeSlider + 1}/{data.length}
                        </span>
                    </div>
                    <div className="slider_control_btn" onClick={nextSlide}>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

export default HeroSlider;
