import React from 'react';

function Categories({ filter, categories }) {
    return (
        <div className="center categories__buttons">
            {
                categories.map((cat, i) => {
                    return <a className="button" onClick={() => filter(cat)} key={i}>{cat}</a>
                })
            }
        </div>
    )
}

export default Categories;