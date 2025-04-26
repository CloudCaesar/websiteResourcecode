import React from 'react';
import {
    Card,
    Message,
    Header,
    Label,
    SegmentGroup,
    Segment,
    Image
} from 'semantic-ui-react';
import {
    Link
} from 'react-router-dom';
import '@styles/PostHeader.css'; // Ensure you have a CSS file for custom styles

const PostHeader = ({
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

    // Split the summary into sentences
    const summaryItems = summary.split('.').filter(sentence => sentence.trim() !== '');

    return ( <
        SegmentGroup horizontal style = {
            {
                backgroundColor: '#702963'
            }
        } >
        <
        Segment floated = "right"
        className = "post-item" >
        <
        Image src = {
            `${process.env.PUBLIC_URL}${image}`
        }
        className = "post-item-image" / >
        <
        /Segment> <
        Segment >
        <
        Header as = "h3"
        textAlign = "center"
        style = {
            {
                backgroundColor: '#702963'
            }
        } >
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
                color: '#702963',
                backgroundColor: '#a9885c'
            }
        }
        basic > {
            date
        } < /Label> <
        /Header.Subheader> <
        /Header> <
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
        /Segment> <
        /SegmentGroup>
    );
};

export default PostHeader;