// /blog/mindfulness/page.js
import React from "react";
import {
    Container,
    Header,
    Segment,
    Card,
    Image,
    Icon
} from "semantic-ui-react";
import Feed from '@components/Feed';

const Mindfulness = () => {
    const path = 'blog/mindfulness';
    const mindfulnessTopics = [{
            title: "Meditation Practices",
            description: "Explore various meditation techniques to bring peace and balance to your life.",
            image: "https://example.com/meditation.jpg",
        },
        {
            title: "Mindful Living",
            description: "Learn about integrating mindfulness into everyday activities for a more fulfilled life.",
            image: "https://example.com/mindful_living.jpg",
        },
    ];

    return ( <
        Container style = {
            {
                marginTop: "2em"
            }
        } >
        <
        Header as = 'h1'
        textAlign = 'center'
        icon style = {
            {
                color: '#a9885c',
                backgroundColor: '#702963'
            }
        } >
        <
        Icon name = 'cloud'
        style = {
            {
                color: '#a9885c'
            }
        }
        />
        The Mindfulness Blog <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Cultivating a balanced and mindful life through intentional practices. <
        /Header.Subheader> <
        /Header> <
        Feed path = {
            path
        }
        /> <
        /Container>
    );
};

export default Mindfulness;