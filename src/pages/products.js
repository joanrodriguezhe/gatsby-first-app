import React, { Component } from 'react';
import Layout from '../components/Layout';
import classes from '../components/products.module.css';

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={classes.page}>

                    <h1>This is our products page</h1>
                    <p className={classes.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est quidem enim excepturi inventore beatae assumenda ut magni aliquid voluptatibus laudantium sunt totam natus, quibusdam esse error perspiciatis, ipsa recusandae.
                    </p>
                </div>
            </Layout>
        )
    }
}
