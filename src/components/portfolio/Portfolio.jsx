
import React from 'react';
import Categories from './components/Categories';
import MenuItems from './components/MenuItems';
import Tittle from './components/Tittle';
import portfolios from './components/AllPortfolios';
import { useState } from 'react';
import './portfolio.css'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


const Portfolio = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (

        <section id="portfolio">
            <h5>Portfolio</h5>
            <h2>My Recent Works</h2>

            <div className="container portfolio__container">
                <article >
                    <Categories filter={filter} categories={categories} />
                    <MenuItems menuItem={menuItems} />
                </article>
                <article >
                    <a href="/all-portfolio" target={"_blank"} className='btn btn-primary'>See All</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio





