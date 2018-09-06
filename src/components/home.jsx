import React, { Component } from 'react';
import { Jumbotron, Grid, Col, Carousel } from 'react-bootstrap';
import './general-styles.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Col xs={12} sm={10} smOffset={1}>
                    <Jumbotron>
                        <h1>Välkommen till BRF Havsbrisen</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit adipisci doloribus veritatis reprehenderit impedit ducimus magni eveniet amet omnis accusantium dignissimos quo, aliquid fuga similique nihil odit accusamus repudiandae.</p>
                    </Jumbotron>
                    <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="img/carousel01.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="img/carousel02.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="img/carousel03.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="img/carousel04.jpg" />
                    </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="footer" xs={12} sm={6}>
                    <p>Copyright 2018 BRF Havsbrisen</p>
                </Col>
                <Col className="footer" xs={12} sm={6}>
                    <p>Utvecklad av Peter Dahlén</p>
                </Col>
            </Grid>
        )
    }
}