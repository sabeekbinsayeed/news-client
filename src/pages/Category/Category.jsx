import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummary/NewsSummary';

const Category = () => {
    const categorynews = useLoaderData()
    return (
        <div>
            <h1>this is cateogyr</h1>
            {
                categorynews.map(news => <NewsSummary key={news._id} news={news} ></NewsSummary>)
            }
        </div>
    );
};

export default Category;