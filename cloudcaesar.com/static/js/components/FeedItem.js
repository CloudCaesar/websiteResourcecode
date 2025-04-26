import React from 'react';
import {
    Card,
    Table,
    Message,
    Header,
    Label,
    Button
} from 'semantic-ui-react';
import {
    Link
} from 'react-router-dom';
import '@styles/FeedItem.css'; // Ensure you have a CSS file for custom styles

const FeedItem = ({
    post,
    config = {}
}) => {
    const {
        image,
        title,
        date,
        summary,
        path
    } = post;
    const {
        width = '200px', height = '200px'
    } = config;

    // Split the summary into sentences
    const summaryItems = summary.split('.').filter(sentence => sentence.trim() !== '');

    return ( <
        Card fluid className = "feed-item" >
        <
        Card.Content >
        <
        Header as = "h3" >
        <
        Link to = {
            `/${path}`
        }
        style = {
            {
                color: '#a9885c'
            }
        } > {
            title
        } < /Link> <
        Header.Subheader >
        <
        Label style = {
            {
                backgroundColor: '#a9885c',
                color: '#702963'
            }
        }
        basic > {
            date
        } < /Label> <
        /Header.Subheader> <
        /Header> <
        Table basic = "very"
        celled = {
            false
        } >
        <
        Table.Body >
        <
        Table.Row >
        <
        Table.Cell collapsing style = {
            {
                backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
                backgroundSize: 'contain', // Change 'cover' to 'contain'
                backgroundRepeat: 'no-repeat', // Prevent tiling of the image
                backgroundPosition: 'center', // Center the image within the container
                width,
                height
            }
        } >
        <
        div style = {
            {
                width,
                height
            }
        } > < /div> <
        /Table.Cell> <
        Table.Cell className = "feed-item-message-cell" >
        <
        div className = "feed-item-background-container" >
        <
        div className = "message-overlay" >
        <
        Message className = "message-custom" >
        <
        Message.Header > Summary < /Message.Header> <
        Message.List items = {
            summaryItems
        }
        /> <
        /Message> <
        /div> <
        /div> <
        /Table.Cell> <
        /Table.Row> <
        /Table.Body> <
        /Table> <
        Button as = {
            Link
        }
        to = {
            `/${path}`
        }
        style = {
            {
                backgroundColor: '#a9885c',
                color: '#702963'
            }
        }
        fluid >
        Read More <
        /Button> <
        /Card.Content> <
        /Card>
    );
};

export default FeedItem;