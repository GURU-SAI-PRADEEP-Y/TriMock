import React from 'react'
import Hero from './Hero/Hero'
import GridAssets from './GridAssets'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Hero />
            </div>
            <GridAssets />
        </>
    )
}

export default LandingPage
