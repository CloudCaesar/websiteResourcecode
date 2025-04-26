// /blog/technology/page.js
import React from "react";
import {
    Container,
    Header,
    Segment,
    List,
    Icon
} from "semantic-ui-react";
import {
    Link
} from "react-router-dom";
import Feed from '@components/Feed';
import '@styles/GeneralTheme.css';
import '@styles/BlogBody.css';
const path = 'blog/technology';
const Technology = () => ( <
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
    Technology Blog <
    Header.Subheader style = {
        {
            color: '#a9885c'
        }
    } >
    Dive into the world of technology with insights and tutorials on various topics, including JavaScript and Salesforce. <
    /Header.Subheader> <
    /Header> <
    List divided relaxed size = "large" >
    <
    List.Item style = {
        {
            backgroundColor: '#702963'
        }
    } >
    <
    Icon name = "code"
    size = "large"
    style = {
        {
            color: '#a9885c'
        }
    }
    /> <
    List.Content >
    <
    List.Header as = {
        Link
    }
    to = "/blog/technology/javascript" >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > JavaScript < /span> <
    /List.Header> <
    List.Description >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > Discover JavaScript tutorials, tips, and tricks
    for web development. < /span> <
    /List.Description> <
    /List.Content> <
    /List.Item> <
    List.Item style = {
        {
            backgroundColor: '#702963'
        }
    } >
    <
    Icon name = "cloud"
    size = "large"
    style = {
        {
            color: '#a9885c'
        }
    }
    /> <
    List.Content >
    <
    List.Header as = {
        Link
    }
    to = "/blog/technology/salesforce" >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > Salesforce < /span> <
    /List.Header> <
    List.Description >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > Learn about Salesforce development, best practices, and advanced techniques. < /span> <
    /List.Description> <
    /List.Content> <
    /List.Item> <
    List.Item style = {
        {
            backgroundColor: '#702963'
        }
    } >
    <
    Icon name = "user secret"
    size = "large"
    style = {
        {
            color: '#a9885c'
        }
    }
    /> <
    List.Content >
    <
    List.Header as = {
        Link
    }
    to = "/blog/technology/cybersecurity" >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > Cyber Security < /span> <
    /List.Header> <
    List.Description >
    <
    span style = {
        {
            color: '#a9885c'
        }
    } > Learn about Cyber Security, best practices, and advanced techniques. < /span> <
    /List.Description> <
    /List.Content> <
    /List.Item> <
    /List> <
    Feed path = {
        path
    }
    /> <
    /Container>
);

export default Technology;