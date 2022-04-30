import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

import './experiance.css'

const Experiance = () => {
    return (
        <section id='experiance'>
            <h5>What Skill I Have</h5>
            <h2>My Experiance</h2>

            <div className="container experiance__container">
                <div className="experiance_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experiance__content">
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experiance__backend">
                    <h3>Backend Development</h3>
                    <div className="experiance__content">
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                        <article className='experiance__detail'>
                            <BsCheck2Circle className='experiance__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiance