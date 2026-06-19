import React from 'react'
import "./Product.scss"
import {images} from "../../altro/data"
const Product = () => {
  return (
    <div className='subcontainer-product'>
        <span className="title">Bests Fashions</span>
        <h2 className="subtitle">Popular Fashions</h2>
        <div className="container-slide">
            <div className="go-slide">
                <div className="card-fashion">
                    <img src={images.image3} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image1} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image4} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image5} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image6} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image7} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image8} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
            </div>   
            <div className="go-slide">
                <div className="card-fashion">
                    <img src={images.image3} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image1} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image4} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image5} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image6} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image7} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
                <div className="card-fashion">
                    <img src={images.image8} alt="" />
                    <div className="details">
                        <span className="price">
                            <span>$</span>75</span>
                            <h4 className="name">Dreads</h4>
                            <p className="desc">beautiful</p>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Product