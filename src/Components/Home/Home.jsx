import React from 'react';
import './Home.scss';
import CategorySlider from './CategorySlider/CategorySlider';
import JobFeatured from './JobFeatured/JobFeatured'

function Home() {
    return <>
    <div>
        {/* background section */}
        <section className='bg'>
            <div style={{ 
                backgroundImage: "url('/imgs/bgImg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px" }}>
            </div>
            <p className='text-center py-5 fs-6'>Start your career with confidence we’re here to help fresh graduates succeed</p>
        </section>

        {/* search by category section */}
        <section className='pb-4'>
            <div className='text-center pb-2'>
                <h2>Search By Category</h2>
                <p className='p pb-5'>Search Your Career Opportunity  with Our Categories</p>
            </div>

            <div className='category'>
                <CategorySlider/>
            </div>
        </section>

        {/* featured job section */}
        <section>
            <div className='text-center py-4'>
                <h2>Featured Job Offers</h2>
                <p className='p'>Search Your Career Opportunity  Through 12,800 Jobs</p>
            </div>

            <div className='cards'>
                <JobFeatured />
            </div>
        </section>
    </div>
    </>
}

export default Home
