// /blog/history/page.js
import React from "react";
import Feed from '@components/Feed';
import {
    Container,
    Header,
    Segment,
    Card,
    Icon,
    Image,
    Button
} from "semantic-ui-react";

const History = () => {
    const path = 'blog/history';
    const historyTopics = [{
            title: "Ancient Civilizations",
            description: "Explore the rise and fall of early human societies and their remarkable achievements.",
            image: "https://example.com/ancient_civilizations.jpg",
            icon: "university",
        },
        {
            title: "Medieval Europe",
            description: "Dive into the Middle Ages and discover the cultural and political transformations of Europe.",
            image: "https://example.com/medieval_europe.jpg",
            icon: "chess rook",
        },
        {
            title: "Renaissance and Enlightenment",
            description: "Uncover the rebirth of knowledge, art, and scientific discovery.",
            image: "https://example.com/renaissance.jpg",
            icon: "paint brush",
        },
        {
            title: "Modern History",
            description: "From revolutions to the digital age, explore the events that shaped the modern world.",
            image: "https://example.com/modern_history.jpg",
            icon: "history",
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
        The History Blog <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Delve into key historical periods and civilizations that shaped our world.From ancient empires to modern movements, discover the stories that
        continue to influence us today. <
            /Header.Subheader> <
            /Header>

            <
            Feed path = {
                path
            }
        />

        <
        /Container>
    );
};

export default History;