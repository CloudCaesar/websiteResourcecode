import React from 'react';
import {
    Container,
    Card
} from 'semantic-ui-react';
import FeedItem from './FeedItem';
import {
    postData
} from '@data/postData';

const Feed = ({
    path
}) => {
    const posts = postData.posts.filter(post => post.path.startsWith(path));
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return ( <
        Container style = {
            {
                marginLeft: 0
            }
        } >
        <
        Card.Group > {
            sortedPosts.map((post, index) => ( <
                FeedItem key = {
                    index
                }
                post = {
                    post
                }
                />
            ))
        } <
        /Card.Group> <
        /Container>
    );
};

export default Feed;