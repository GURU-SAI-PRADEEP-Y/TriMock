import React from 'react'
import tshirt from '../assets/TShirt.png'
import hoodie from '../assets/Hoodie.png'
import cap from '../assets/Cap.png'
import bottle from '../assets/Bottle.png'
import jacket from '../assets/Jacket.png'
import mug from '../assets/Mug.png'
import shorts from '../assets/Shorts.png'
import { Link } from "react-router-dom";


const GridAssets = () => {
    return (
        <div className="bg-body-secondary">
            <div className="container text-center py-3">
                <h1><strong>Convert your 2D design on 3D mockups.</strong></h1>
                <p>Choose one of the assets below to make your design on</p>
                {/* row1 */}
                <div className="row py-3">
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={tshirt} alt="tshirt" /></Link>
                    </div>
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={hoodie} alt="Hoodie" /></Link>
                    </div>
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={jacket} alt="Jacket" /></Link>
                    </div>
                </div>
                {/* row2 */}
                <div className="row py-3">
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={cap} alt="Cap" /></Link>
                    </div>
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={shorts} alt="Shorts" /></Link>
                    </div>
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={mug} alt="Mug" /></Link>
                    </div>
                </div>
                {/* row3 */}
                <div className="row py-3">
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={tshirt} alt="Tshirt" /></Link>
                    </div>
                    <div className="col card link-no-style bg-transparent border-0" style={{ width: "7rem" }}>
                        <Link to="/canva" target='_blank'><img className="card-img-top img-fluid" src={hoodie} alt="Hoodie" /></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default GridAssets
