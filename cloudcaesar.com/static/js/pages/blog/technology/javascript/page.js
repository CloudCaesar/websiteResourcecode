// /blog/technology/javascript/page.js
import React from "react";
import {
    Container,
    Header,
    Segment,
    Icon,
    List
} from "semantic-ui-react";
import {
    Link
} from "react-router-dom";
import Feed from "@components/Feed";
import "@styles/BlogBody.css";
const path = 'blog/technology/javascript';
const JavaScript = () => ( <
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
    Icon name = 'code'
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
    JavaScript is a versatile programming language that powers most modern web applications. <
    /Header.Subheader> <
    /Header> <
    Feed path = {
        path
    }
    /> <
    /Container>
);

export default JavaScript;