import React from 'react';
import {
    Message
} from 'semantic-ui-react';
import PostHeader from '@components/PostHeader'; // Ensure you have the correct path to the FeedItem component
import '@styles/FeedItem.css'; // Ensure you have a CSS file for custom styles
import '@styles/BlogBody.css'
const Posthistory1 = () => {
    const post = {
        title: "Ancient Civilizations",
        date: "January 1, 2023",
        image: "/assets/FeedItems/BBjjpbhHhMMZs6E2PDu.svg",
        summary: "Summary: Explore the rise and fall of early human societies, including the Egyptians, Mesopotamians, Indus Valley Civilization, and the Inca Empire. Discover their remarkable achievements and lasting legacies.",
        path: "blog/history/post/posthistory1"
    };

    const civilizations = {
        "Egyptian Civilization": "The Egyptian civilization is one of the oldest and most iconic ancient civilizations. Known for their impressive architectural feats, such as the Great Pyramids of Giza and the Sphinx, the Egyptians also made significant advancements in writing, mathematics, and medicine. The Nile River played a crucial role in the development of Egyptian society, providing a source of sustenance and a means of transportation.",
        "Mesopotamian Civilization": "Mesopotamia, often referred to as the 'Cradle of Civilization,' was home to some of the earliest known human settlements. Located between the Tigris and Euphrates rivers, Mesopotamia saw the rise of several influential cultures, including the Sumerians, Akkadians, Babylonians, and Assyrians. These societies made groundbreaking contributions to writing, law, and urban planning.",
        "Indus Valley Civilization": "The Indus Valley Civilization, located in present-day Pakistan and northwest India, was one of the world's earliest urban cultures. Known for their advanced city planning, the people of the Indus Valley built well-organized cities with sophisticated drainage systems and standardized weights and measures. Despite their achievements, much about this civilization remains a mystery, as their writing system has yet to be fully deciphered.",
        "Inca Empire": "The Inca Empire, which flourished in the Andean region of South America, was the largest empire in pre-Columbian America. The Incas are renowned for their architectural prowess, particularly in constructing Machu Picchu, a breathtaking mountain citadel. They also developed an extensive road network that connected their vast empire, facilitating communication and trade."
    };

    return ( <
        div >
        <
        PostHeader post = {
            post
        }
        config = {
            {
                width: '400px',
                height: '400px'
            }
        }
        /> <
        div class = "body-gold" >
        <
        p >
        Ancient civilizations have always fascinated historians and archaeologists alike.These early societies laid the foundations
        for modern culture, technology, and governance.From the pyramids of Egypt to the intricate road systems of the Inca Empire, ancient civilizations have left behind a legacy that continues to influence the world today. <
        /p> {
            Object.entries(civilizations).map(([key, value], index) => ( <
                Message key = {
                    index
                }
                className = "message-custom" >
                <
                Message.Header > {
                    key
                } < /Message.Header> <
                Message.List items = {
                    [value]
                }
                /> <
                /Message>
            ))
        } <
        p >
        These ancient civilizations, among others, have left an indelible mark on human history.Their innovations and cultural achievements
        continue to inspire and inform our understanding of the past and present. <
            /p> <
            /div> <
            /div>
    );
};

export default Posthistory1;