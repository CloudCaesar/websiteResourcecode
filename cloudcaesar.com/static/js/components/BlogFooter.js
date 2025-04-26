import React from 'react';
import '@styles/Footer.css';
import {
    SegmentGroup,
    Image,
    Segment
} from 'semantic-ui-react';

const BlogFooter = () => {
    return ( <
        div className = "footer-content"
        style = {
            {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#a9885c'
            }
        } >
        <
        Image src = {
            `${process.env.PUBLIC_URL}/assets/CZRLogoCC.svg`
        }
        alt = "Logo"
        className = "header-logo" / >
        <
        p className = "blog-text"
        style = {
            {
                marginLeft: '10px'
            }
        } > Cloud Caesar < /p> <
        /div>
    );
};

export default BlogFooter;