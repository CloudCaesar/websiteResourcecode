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
const path = 'blog/technology/cybersecurity';
const Cybersecurity = () => ( <
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
    Icon name = 'user secret'
    style = {
        {
            color: '#a9885c'
        }
    }
    />
    Cyber Secuirty Blog <
    Header.Subheader style = {
        {
            color: '#a9885c'
        }
    } >
    Cybersecurity encompasses various strategies, technologies, and processes designed to ensure the confidentiality, integrity, and availability of data, as well as to protect against cyber risks and vulnerabilities. <
    /Header.Subheader> <
    /Header> <
    Feed path = {
        path
    }
    /> <
    /Container>
);

export default Cybersecurity;