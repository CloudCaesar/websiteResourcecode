// /blog/technology/salesforce/page.js
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
const path = 'blog/technology/salesforce';
const SalesforcePage = () => (



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
    Salesforce Blog <
    Header.Subheader style = {
        {
            color: '#a9885c'
        }
    } >
    Salesforce is a leading CRM platform with powerful tools
    for managing customer relationships, automating processes, and building custom applications.Our Salesforce blog covers topics from foundational knowledge to advanced development techniques. <
    /Header.Subheader> <
    /Header> <
    Feed path = {
        path
    }
    /> <
    /Container>
);

export default SalesforcePage;