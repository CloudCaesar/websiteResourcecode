import React from 'react';
import PostHeader from '@components/PostHeader';
import {
    Container,
    Segment,
    Image
} from 'semantic-ui-react';
import '@styles/BlogBody.css';

const Postcyber1 = () => {
    const image = "/assets/Blog/H8RpmhDGW5XKtsKHnueZ.svg";
    const post = {
        title: "Understanding Dangling Pointers in C++ with Objects",
        date: "April 11, 2025",
        image: "/assets/FeedItems/Cn0GfNaH99e0kUBbXYEX.svg",
        summary: "Learn about dangling pointers in C++ when working with objects, how they occur, and how to avoid them.",
        path: "blog/technology/c/post/postdanglingpointer"
    };

    return ( <
        div style = {
            {
                maxWidth: '800px',
                margin: '0 auto'
            }
        } > { /* Parent container with consistent width */ } <
        PostHeader post = {
            post
        }
        config = {
            {
                width: '100%',
                height: '400px'
            }
        }
        /> <
        Container style = {
            {
                marginTop: '2em',
                width: '100%'
            }
        } > { /* Matches the width of PostHeader */ } <
        Segment raised padded className = "background-byz" >
        <
        Image src = {
            image
        }
        alt = "Interactive SVG"
        style = {
            {
                display: 'block',
                margin: '0 auto'
            }
        }
        /> <
        /Segment> <
        /Container> <
        div className = "body-gold" >
        <
        p >
        Dangling pointers are a common issue in programming languages like C++that use manual memory management.They can lead to undefined behavior, crashes, and security vulnerabilities, making it crucial to understand and avoid them. <
        /p> <
        h2 > What is a Dangling Pointer ? < /h2> <
        p >
        A dangling pointer is a pointer that continues to reference a memory location after the memory has been deallocated or freed.Accessing such memory can result in unpredictable behavior since the memory may no longer be valid or may have been reassigned to another process. <
        /p> <
        h2 > Example of a Dangling Pointer with Objects in C++ < /h2> <
        p >
        Below is an example of how a dangling pointer can occur when working with objects in C++ :
        <
        /p> <
        pre >
        <
        code > {
            `#include <iostream>
using namespace std;

class MyClass {
public:
    MyClass(int value) : data(value) {}
private:
    int data;
};

int main() {
    // [Step 1: Dynamically Allocate Object]
    // objPointer ----> [Memory Address: 0x1000]
    //                   | MyClass(42)         |
    MyClass* objPointer = new MyClass(42); // Dynamically allocate object

    // [Step 2: Use Object]
    // objPointer ----> [Memory Address: 0x1000]
    //                   | MyClass(42)         |
    // Output: Value: 42

    // [Step 3: Delete Object]
    // objPointer ----> [Memory Address: 0x1000]
    //                   | (Freed, invalid)    |
    delete objPointer; // Free the allocated object
    // Note: objPointer still holds 0x1000, but the memory is no longer valid.

    // [Step 4: Access Dangling Pointer]
    // objPointer ----> [Memory Address: 0x1000]
    //                   | (Undefined)         |
    // Output: Undefined behavior: may crash or print garbage

    return 0;
}`
        } <
        /code> <
        /pre> <
        p >
        In this example, the pointer < code > objPointer < /code> is used to dynamically allocate an object of type <code>MyClass</code > .After the object is deleted using < code > delete < /code>, the pointer still holds the address of the deallocated memory, leading to a dangling pointer. Accessing <code>objPointer</code > after deletion results in undefined behavior. <
        /p> <
        h2 > How to Avoid Dangling Pointers < /h2> <
        p >
        Here are some best practices to avoid dangling pointers when working with objects:
        <
        /p> <
        ul >
        <
        li > < strong > Set Pointers to NULL: < /strong> After deleting an object, set the pointer to <code>NULL</code > to ensure it does not reference invalid memory. < /li> <
        li > < strong > Use Smart Pointers: < /strong> In modern C++, use smart pointers like <code>std::shared_ptr</code > or < code > std::unique_ptr < /code> to manage object lifetimes automatically.</li >
        <
        li > < strong > Avoid Manual Memory Management: < /strong> Prefer stack-allocated objects or smart pointers to reduce the risk of dangling pointers.</li >
        <
        /ul> <
        h2 > Conclusion < /h2> <
        p >
        Dangling pointers are a critical issue in manual memory management.By understanding how they occur and following best practices, you can write safer and more reliable code.Always be cautious when working with pointers and memory in C++. <
        /p> <
        /div> <
        /div>
    );
};

export default Postcyber1;