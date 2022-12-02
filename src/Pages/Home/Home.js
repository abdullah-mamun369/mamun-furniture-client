import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseProducts from './HomeChield/AdvertiseProducts';
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
            <section className='container mx-auto'>
                <div className='my-20'>
                    <h1 className='text-center text-5xl lg:mt-16 mt-8 lg:mb-8 mb-5 font-semibold'>About Mamun Furniture</h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-2 border">
                        <figure className='h-auto lg:flex hidden'><img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">We Are Best!</h2>
                            <p>The Bengali word “Mamun”, meaning ‘forest’ was strike out by the founder of this institution, Mr. Abdullah Mamun, one of the best artists & sculptor of the 20th Century Bangladesh, started this new venture with the urge of providing artistic excellence to the nation what no other could. His studio initially manufactured decorative items, paintings & sculptures under the name- “The Designers”. Later on, this endeavor was named as “Art in Craft” when they started producing metal furniture as another manifestation of their artistic expertise. <br /><br />

                                At the time of its establishment in 2017, Mamun was the only local manufacturer & retailer of modern furniture in Bangladesh. Mamun has become more popular because of its quality product and excellent after sales service. The company started producing profit and enhanced the sales and marketing by getting involve with the Engineers were engaged by Kundu followed by the implementation of training by AOTS, Japan. Mamun provides the entire furniture solution including (Home Office & Hospital) with the creative reinvention pulsating through its operation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                <section className='container mx-auto'>
                    <AdvertiseProducts></AdvertiseProducts>
                </section>
            }
        </div>
    );
};

export default Home;