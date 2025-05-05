import React from 'react'
import hood from '../assets/Hoodie.png'
import hoodie from '../assets/HoodieImg.png'
import cap from '../assets/Cap.png'
import { Link } from "react-router";


const GridAssets = () => {
    return (
        <div className="bg-body-secondary">
            <div className="container text-center py-3">
                <h1><strong>Convert your 2D design on 3D mockups.</strong></h1>
                <p>Choose one of the assets below to make your design on</p>
                {/* row1 */}
                <div className="row py-3">
                    <div className="col card" style={{ width: "7rem" }}>
                        {/* <Link to="/canva" target='_blank'><img src={hood} alt="Hoodie" /></Link> */}
                        <img src={hood} alt="Hoodie" />
                    </div>
                    <div className="col card " style={{ width: "7rem" }}>
                        <img src={hoodie} alt="Hoodie" />
                    </div>
                    <div className="col card " style={{ width: "7rem" }}>
                        <img src={cap} alt="Hoodie" />
                    </div>
                </div>
                {/* row2 */}
                <div className="row py-3">
                    <div className="col card" style={{ width: "7rem" }}>
                        <img src={cap} alt="Cap" />
                    </div>
                    <div className="col card " style={{ width: "7rem" }}>
                        <img src={hood} alt="hood" />
                    </div>
                    <div className="col card " style={{ width: "7rem" }}>
                        <img src={hoodie} alt="Hoodie" />
                    </div>
                </div>
                {/* row3 */}
                <div className="row py-3">
                    <div className="col card" style={{ width: "7rem" }}>
                        <img src={hood} alt="Hoodie" />
                    </div>
                    <div className="col card " style={{ width: "7rem" }}>
                        <img src={cap} alt="Cap" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default GridAssets
