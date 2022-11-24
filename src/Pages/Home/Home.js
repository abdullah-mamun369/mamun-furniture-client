import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './HomeChield/Banner';
import Categories from './HomeChield/Categories';

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            {/* Banner-Start */}
            <section>
                <Banner></Banner>
            </section>

            {/* Categories start */}
            <section className='container mx-auto'>
                <Categories
                    categories={categories}
                ></Categories>
            </section>
        </div>
    );
};

export default Home;