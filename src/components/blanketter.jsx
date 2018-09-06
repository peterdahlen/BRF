import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import './general-styles.css';

export default class Blanketter extends Component {
    render() {
        return (
            <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <h1>Blanketter</h1>
                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione nesciunt possimus atque porro earum! Minus saepe quae, iure et soluta at cumque suscipit consequuntur nostrum qui dolores magnam quas.</p>
                    <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nostrum et quia dicta tempora! Ipsam, porro. Voluptatibus optio ipsam cum eius, numquam fugit earum deserunt reprehenderit explicabo perferendis nulla ullam.</p>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, veritatis molestias nam voluptatum consectetur accusantium est dicta fuga? Quia hic alias architecto deserunt tenetur deleniti quibusdam eaque voluptas, perspiciatis eligendi.</p>
                </Col>
            </Grid>
        )
    }
}