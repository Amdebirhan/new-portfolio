
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function MenuItems({ menuItem }) {
    return (
        <div className="portfolio__item__container">
            {
                menuItem.map((item) => {
                    return <div className="portfolio__item" key={item.id}>
                        <div className="portfolio__item-image">

                            <Link to={"/details/" + (item.id)} target={"_blank"}>
                                <img src={item.image} alt="" />
                            </Link>
                        </div>
                        <div className="portfolio__item-cga">
                            <a target={"_blank"} href={item.link1}>{item.icon1}</a>
                            <a target={"_blank"} href={item.link2}>{item.icon2}</a>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <div className="portfolio__item-demo">
                            <a target={"_blank"} href={item.demoLink}>Demo</a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;