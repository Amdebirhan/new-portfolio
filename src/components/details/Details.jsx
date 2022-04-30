import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../footer/Footer';

import portfolios from '../portfolio/components/AllPortfolios';
import Portfolio from '../portfolio/Portfolio';

import './details.css'

const Details = () => {
    const { id } = useParams()

    let data = portfolios.filter((item) => item.id == id).map(({ id, category, link1, link2, icon1, icon2, image, demoLink, title, description }) => ({ id, category, link1, link2, icon1, icon2, image, demoLink, title, description }));
    return (
        <div>{
            data.map((item) => {
                return <div>
                    <div className='portfolio__header'>
                        <h5>Portfolio</h5>
                        <h2>My Recent Works</h2>
                    </div>
                    <div className="container portfolio__item" key={item.id}>

                        <div class="row">
                            <div class="column">
                                <div className="portfolio__item-image center">
                                    <img className='center' src={item.image} alt="" />
                                </div>
                            </div>
                            <div class="column">
                                <h4>
                                    {item.title}
                                </h4>
                                <h5 className='detail__description'>
                                    {item.description}
                                </h5>
                                <div className="portfolio__item-cga">
                                    <a target={"_blank"} href={item.link1}>{item.icon1}</a>
                                    <a target={"_blank"} href={item.link2}>{item.icon2}</a>
                                </div>

                                <div className="portfolio__item-demo">
                                    <a target={"_blank"} href={item.demoLink}>Demo</a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <Portfolio />
                    <Footer />
                </div>
            })
        }</div>
    )
}

export default Details