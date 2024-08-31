import React, {Component} from 'react';
import './HomePage.css';
import Product from '../product/product';
import CartImg from './img/cart.avif';

import HttpService from '../services/http-service';

const http = new HttpService();

 class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }

        this.loadData = this.loadData.bind(this);
        this.productOne = this.productOne.bind(this);

        this.loadData();
    }

    loadData = () => {
        http.getProducts().then(data => {
            this.setState({ products: data });
        }).catch(err => {
            console.error("Failed to load products:", err);
        });
    }

    productOne = () => {
        var list = this.state.products.map((product) => 
            <div className="col-md-8 carousel-prod" key={product._id}>
                <Product product={product} />
            </div>
        );
                        
        return list[0];
    }

    productTwo = () => {
        var list = this.state.products.map((product) => 
            <div className="col-md-8 carousel-prod" key={product._id}>
                <Product product={product} />
            </div>
        );
                        
        return list[1];
    }

    productThree = () => {
        var list = this.state.products.map((product) => 
            <div className="col-md-8 carousel-prod" key={product._id}>
                <Product product={product} />
            </div>
        );
                        
        return list[2];
    }
    
    render() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 wallpaper">
                    <div className="wallpaper-intro">
                        <h1>Welcome To TechSphere</h1>
                        <p>Where innovation meets convenience. Explore cutting-edge gadgets and tech solutions designed to elevate your digital experience.
                        </p>
                        <a className="btn btn-primary" href="/product">View Our Products</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row about-us">
                        <div className="col-md-6 about-us-img">
                            <img src={CartImg}></img>
                        </div>
                        <div className="col-md-6 about-us-intro">
                            <h2>About Us</h2>
                            <p>At TechSphere, we are dedicated to bringing you the latest advancements in technology with a focus on quality and innovation. Our mission is to provide a curated selection of cutting-edge gadgets and tech solutions that enhance your digital lifestyle. From smart devices to essential accessories, we carefully choose products that combine functionality with style, ensuring that you stay ahead in the ever-evolving tech landscape. With a commitment to exceptional customer service and a passion for tech, TechSphere is your go-to destination for all things tech.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 carousel-section">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Our Top Selling Products</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 carousel-page">
                    <div className="carousel-div">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            {this.productOne()}
                            </div>
                            <div className="carousel-item">
                            {this.productTwo()}
                            </div>
                            <div className="carousel-item">
                            {this.productThree()}
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}
}

export default HomePage;
