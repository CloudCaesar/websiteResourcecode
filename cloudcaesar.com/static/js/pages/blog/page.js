// /blog/page.js
import React from "react";
import {
    Container,
    Header,
    Segment,
    Grid,
    Card,
    Icon,
    Button,
    Image
} from "semantic-ui-react";
import {
    useNavigate
} from "react-router-dom";
import Feed from '@components/Feed';
import '@styles/BlogBody.css';


const Blog = () => {
    const navigate = useNavigate();
    const path = "blog";
    const categories = [{
            title: "History",
            description: "Exploring the past to understand the present and envision the future.",
            icon: "book",
            color: "#702963",
        },
        {
            title: "Mindfulness",
            description: "Cultivating a balanced and mindful life through intentional practices.",
            icon: "leaf",
            color: "#702963",
        },
        {
            title: "Technology",
            description: "Staying at the forefront of tech advancements and innovations.",
            icon: "computer",
            color: "#702963",
        },
    ];

    return ( <
        div class = "ui-segment" >
        <
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
                color: '#a9885c'
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
        Welcome to the Blog <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Articles on diverse topics, including technology, history, and mindfulness.Our blog covers everything from JavaScript innovations to the significance of historical events and tips
        for achieving mental clarity. <
        /Header.Subheader> <
        /Header>

        <
        Segment raised padded >
        <
        Grid stackable columns = {
            3
        }
        divided > {
            categories.map((category, index) => ( <
                Grid.Column key = {
                    index
                } >
                <
                Segment raised >
                <
                Header as = "h3"
                icon style = {
                    {
                        color: '#a9885c'
                    }
                } >
                <
                Icon name = {
                    category.icon
                }
                className = "custom-icon-body" / > {
                    category.title
                } <
                /Header> <
                p > {
                    category.description
                } < /p> <
                Button fluid className = "custom-button-body"
                onClick = {
                    () => navigate(`/blog/${category.title.toLowerCase()}`)
                } >
                Explore {
                    category.title
                } <
                /Button> <
                /Segment> <
                /Grid.Column>
            ))
        } <
        /Grid> <
        /Segment> <
        Feed path = {
            path
        }
        /> <
        /Container> <
        /div>
    );
};

export default Blog;