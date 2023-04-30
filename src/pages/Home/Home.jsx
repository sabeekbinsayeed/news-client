import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../Shared/NewsSummary/NewsSummary';

const Home = () => {
    const allnews = useLoaderData()
    return (
        <div>
            <h1>this is home</h1>
            {
                allnews.map(news => <NewsSummary key={news._id} news={news} ></NewsSummary>)
            }
        </div>
    );
};

export default Home;