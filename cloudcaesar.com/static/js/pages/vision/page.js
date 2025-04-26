import React from 'react';
import {
    Container,
    Header,
    Image,
    Segment,
    Icon
} from 'semantic-ui-react';
import Slider from 'react-slick';
import '@styles/BlogBody.css';

const visionData = [{
        title: 'Technology',
        description: 'Utilizing cutting-edge technology, with a strong focus on Salesforce, to enhance customer experiences by respecting their journeys and steering clear of practices that nudge towards idle distractions',
        image: '/assets/FeedItems/BBW9wYFE5aKngj2p85C.svg',
        icon: 'cloud'
    },
    {
        title: 'History',
        description: 'History is a mosaic, assembled by the storytellers of the ages, illustrating the power of narrative to spark imagination.',
        image: '/assets/FeedItems/BBMw8pKuh48JGTeTQGB.svg',
        icon: 'university'
    },
    {
        title: 'Mindfulness',
        description: 'Our mission is to integrate mindfulness in our technology, we aim to cultivate balance and focus, empowering users to engage thoughtfully and intentionally with everything we create.',
        image: '/assets/FeedItems/BBpdRypWZy3FZA3U22Z.svg',
        icon: 'leaf'
    },
];

const Vision = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return ( <
        Container style = {
            {
                marginTop: '2em'
            }
        }
        class = "blog-body" >
        <
        Header as = 'h1'
        textAlign = 'center'
        icon style = {
            {
                color: '#a9885c'
            }
        } >
        <
        Icon name = 'dna'
        style = {
            {
                color: '#a9885c'
            }
        }
        />
        Our Vision <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Technology.History.Mindfulness. <
        /Header.Subheader> <
        /Header>

        <
        Slider { ...settings
        } > {
            visionData.map((item, index) => ( <
                Segment key = {
                    index
                }
                padded textAlign = 'center' >
                <
                Icon name = {
                    item.icon
                }
                size = 'huge'
                style = {
                    {
                        color: '#a9885c'
                    }
                }
                /> <
                Header as = 'h2'
                style = {
                    {
                        color: '#a9885c'
                    }
                } > {
                    item.title
                } < /Header> <
                span class = "imageExpand" > < Image src = {
                    item.image
                }
                size = 'medium'
                centered rounded / > < /span> <
                p style = {
                    {
                        marginTop: '1em',
                        fontSize: '1.2em',
                        padding: '0 2em',
                        color: '#a9885c'
                    }
                } > {
                    item.description
                } <
                /p> <
                /Segment>
            ))
        } <
        /Slider> <
        /Container>
    );
};

export default Vision;