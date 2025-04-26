import React, {
    useState
} from 'react';
import {
    Container,
    Header,
    Segment,
    Icon,
    List,
    Divider,
    Image,
    Button,
    Modal
} from 'semantic-ui-react';
import '@styles/BlogBody.css';
import '@styles/GeneralTheme.css';
import WebToLead from '@components/WebToLead'; // Import the WebToLead component

const About = () => {
    const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return ( <
        Container text style = {
            {
                marginTop: '2em'
            }
        }
        className = "body-gold" >
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
        About This Site <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Empowering Businesses with Technology Insights and Salesforce Expertise <
        /Header.Subheader> <
        /Header> <
        Image src = {
            `${process.env.PUBLIC_URL}/assets/BasilTrademark.svg`
        }
        alt = "Logo"
        className = "logo-image"
        size = "massive"
        style = {
            {
                width: '100%'
            }
        }
        /> <
        Divider section / >
        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'hand spock'
        content = 'Our Mission'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p style = {
            {
                color: '#a9885c'
            }
        } >
        This website serves as a hub
        for insights into the evolving world of technology, with a special focus on Salesforce development and consulting.We adapt to any industry and any size of company.Whether you 're a startup, a small business, or a large enterprise, we are here to help. 
        We would love to work with companies in technology, mindfulness / spirituality, history, or fashion.Built to empower businesses and individuals alike, this site provides a wealth of resources,
        from expert articles on Salesforce and technology trends to hands - on tips
        for mindfulness and productivity.Here,
        you’ ll find the guidance you need to stay ahead in today’ s fast - paced digital landscape. <
        /p> <
        /Segment>

        <
        Divider hidden / >

        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'map signs'
        content = 'What You’ll Find Here'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        List divided relaxed >
        <
        List.Item >
        <
        Icon name = 'code'
        size = 'large'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        List.Content >
        <
        List.Header as = 'h3'
        style = {
            {
                color: '#a9885c'
            }
        } > Salesforce Expertise < /List.Header> <
        List.Description style = {
            {
                color: '#a9885c'
            }
        }
        className = "body-gold" >
        Comprehensive resources and articles on Salesforce development, integrations, and custom solutions.From Apex to Lightning Components, we delve into the technical depth that supports your business goals. <
        /List.Description> <
        /List.Content> <
        /List.Item> <
        List.Item >
        <
        Icon name = 'handshake'
        size = 'large'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        List.Content >
        <
        List.Header as = 'h3'
        style = {
            {
                color: '#a9885c'
            }
        } > Consulting Services < /List.Header> <
        List.Description style = {
            {
                color: '#a9885c'
            }
        }
        className = "body-gold" >
        Practical insights into leveraging technology
        for business growth.Whether you’ re in need of Salesforce consulting or tech strategy advice, this site offers valuable guidance to optimize and scale your operations. <
        /List.Description> <
        /List.Content> <
        /List.Item> <
        List.Item >
        <
        Icon name = 'book'
        size = 'large'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        List.Content >
        <
        List.Header as = 'h3'
        style = {
            {
                color: '#a9885c'
            }
        } > Engaging Blog < /List.Header> <
        List.Description style = {
            {
                color: '#a9885c'
            }
        }
        className = "body-gold" >
        Articles on diverse topics, including technology, history, and mindfulness.Our blog covers everything from JavaScript innovations to the significance of historical events and tips
        for achieving mental clarity. <
        /List.Description> <
        /List.Content> <
        /List.Item> <
        /List> <
        /Segment>

        <
        Divider section / >

        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'leaf'
        content = 'Our Purpose'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        This site was created not only to offer consulting services but also to share a deeper perspective on how technology and mindfulness intersect.It’ s a platform
        for discussing ways to streamline your technology stack and cultivate a productive mindset, enabling you to achieve your business and personal goals more effectively. <
        /p> <
        p className = "body-gold" >
        We believe in a holistic approach to technology– one that values efficiency, strategy, and well - being.Whether you 're here to explore solutions for Salesforce or just seeking inspiration for your own projects, 
        we’ re glad to have you join us on this journey. <
        /p> <
        /Segment>

        <
        Divider hidden / >

        <
        Segment padded textAlign = 'center' >
        <
        Header as = 'h2'
        icon = 'users'
        content = 'Get to Know Us'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        Ready to transform your business with cutting - edge solutions and mindful insights ? Browse the site, explore our services, and reach out to discuss how we can help you thrive. <
        /p> <
        Button primary size = 'large'
        className = "custom-button-body"
        onClick = {
            handleOpenModal
        } > Get In Touch < /Button> <
        /Segment>

        { /* Contact Form Modal */ } <
        Modal open = {
            modalOpen
        }
        onClose = {
            handleCloseModal
        }
        size = 'small'
        style = {
            {
                backgroundColor: '#702963'
            }
        } >
        <
        Modal.Header style = {
            {
                backgroundColor: '#702963',
                color: '#a9885c'
            }
        } > Contact Us < /Modal.Header> <
        Modal.Content style = {
            {
                backgroundColor: '#a9885c'
            }
        } >
        <
        WebToLead / >
        <
        /Modal.Content> <
        Modal.Actions style = {
            {
                backgroundColor: '#702963',
                color: '#a9885c'
            }
        } >
        <
        Button style = {
            {
                backgroundColor: '#a9885c',
                color: '#702963'
            }
        }
        onClick = {
            handleCloseModal
        } > Close < /Button> <
        /Modal.Actions> <
        /Modal> <
        /Container>
    );
};

export default About;