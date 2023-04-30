import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://news-server-zeta.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div>
            <h1>this is left side navs</h1>
            {categories.length}

            {
                categories.map(category => <p
                    key={category.id}
                >
                    <Link to={`/category/${category.id}`} >{category.name}</Link>
                </p>)
            }


        </div >
    );
};

export default LeftSideNav;