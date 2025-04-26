import React from 'react';
import PostHeader from '@components/PostHeader';
import '@styles/BlogBody.css';
const Postjavascript1 = () => {
    const post = {
        title: "Introduction to JavaScript",
        date: "September 1, 2023",
        image: "/assets/FeedItems/BPkKTjqufPfF8skNCRg.svg",
        summary: "Get an overview of JavaScript, its history, and basic syntax. Learn about the fundamental concepts of JavaScript and its importance in web development.",
        path: "blog/technology/javascript/post/postjavascript1"
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
        JavaScript is a versatile and powerful programming language that is widely used
        for web development.It allows developers to create interactive and dynamic web pages, making it an essential skill
        for anyone looking to build modern web applications. <
        /p> <
        h2 > What is JavaScript ? < /h2> <
        p >
        JavaScript is a high - level, interpreted programming language that is primarily used
        for client - side scripting.It is supported by all modern web browsers and enables developers to create interactive features such as form validation, animations, and dynamic content updates. <
        /p> <
        h2 > History of JavaScript < /h2> <
        p >
        JavaScript was created by Brendan Eich in 1995
        while he was working at Netscape Communications Corporation.Initially called Mocha, it was later renamed to LiveScript and
        finally to JavaScript.Over the years, JavaScript has evolved significantly, with the introduction of ECMAScript standards and modern frameworks and libraries. <
        /p> <
        h2 > Basic Syntax and Concepts < /h2> <
        p >
        JavaScript has a simple and easy - to - learn syntax.Some of the basic concepts include variables, data types, operators, control structures, functions, and objects.Understanding these fundamentals is crucial
        for building more complex applications. <
        /p> <
        p >
        JavaScript is a powerful and versatile language that is essential
        for modern web development.By learning JavaScript, you can create interactive and dynamic web pages that enhance the user experience. <
        /p> <
        /div> <
        /div>
    );
};

export default Postjavascript1;