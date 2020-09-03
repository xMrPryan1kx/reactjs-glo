import React from 'react';
import '../images'

const Section1 =() => {
    return (
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                        сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                        начинающему
                        оратору отточить.
                    </div>
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <div className="features-slider_item">
                                <div className="features-img" style="background-image: url(../images/1.svg)"/>
                                <div className="features-feature">Первое целевое преимущество</div>
                            </div>
                            <div className="features-slider_item">
                                <div className="features-img" style="background-image: url(../images/2.svg)"/>
                                <div className="features-feature">Второе целевое преимущество</div>

                                <div className="features-img" style="background-image: url(../images/3.svg)"/>
                                <div className="features-feature">Третье целевое преимущество</div>
                            </div>
                            <div className="features-slider_item">
                                <div className="features-img" style="background-image: url(../images/4.svg)"/>
                                <div className="features-feature">Четвертое целевое преимущество</div>
                            </div>
                        </div>
                        <button className="features-slider-arrow features-slider-prev">
                            <svg width="9" height="16"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                        <button className="features-slider-arrow features-slider-next">
                            <svg width="9"
                                 height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1