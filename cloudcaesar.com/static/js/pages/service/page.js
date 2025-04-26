import React, {
    useState
} from 'react';
import {
    Container,
    Header,
    Segment,
    List,
    Divider,
    Button,
    Icon,
    Modal
} from 'semantic-ui-react';
import '@styles/BlogBody.css';
import '@styles/GeneralTheme.css';
import WebToLead from '@components/WebToLead'; // Import the WebToLead component

const message = 'Let\'s build an Empire together.';

const Service = () => {
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
        } >
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
        Our Services <
        Header.Subheader style = {
            {
                color: '#a9885c'
            }
        } >
        Professional Salesforce Development & Technology Consulting <
        /Header.Subheader> <
        /Header>

        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'cloud'
        content = 'Salesforce Development & Consulting'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        As a seasoned Salesforce developer and consultant, I bring a wealth of experience in building scalable, efficient,
        and transformative Salesforce solutions.With a deep understanding of Salesforce architecture and tools, I help organizations streamline processes, optimize performance, and unlock the full potential of the Salesforce platform. <
        /p> <
        List bulleted style = {
            {
                color: '#a9885c'
            }
        } >
        <
        List.Item > Custom Salesforce Development: Apex, Visualforce, Lightning Components, and Salesforce Flows < /List.Item> <
        List.Item > Integration Solutions: Seamless integration of Salesforce with third - party applications < /List.Item> <
        List.Item > Automation & Workflow Optimization: Automate business processes using advanced Salesforce features < /List.Item> <
        List.Item > Data Management & Migration: Efficient and secure data migration
        for organized information flows < /List.Item> <
        List.Item > Salesforce Training & Support: Enable teams with hands - on training and dedicated support < /List.Item> <
        /List> <
        /Segment>

        <
        Divider hidden / >

        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'settings'
        content = 'Technology Consulting'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        Beyond Salesforce expertise, I offer broader technology consulting services designed to meet the unique needs of each client.From strategic guidance on technology adoption to practical system implementations, I provide end - to - end consulting informed by hands - on experience and best practices. <
        /p> <
        List bulleted style = {
            {
                color: '#a9885c'
            }
        } >
        <
        List.Item > Custom Software Solutions: Tailored applications aligned with business goals < /List.Item> <
        List.Item > System Integrations: Ensure seamless interactions between business - critical systems < /List.Item> <
        List.Item > Data Analysis & Reporting: Turn complex data into actionable insights < /List.Item> <
        List.Item > Best Practices & Security: Implement secure, best - practice solutions across systems < /List.Item> <
        List.Item > Strategic Guidance: Technology roadmaps and actionable strategies
        for growth < /List.Item> <
        /List> <
        /Segment>

        <
        Divider section / >

        <
        Segment padded >
        <
        Header as = 'h2'
        icon = 'star'
        content = 'Why Choose Me?'
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        With a strong background in Salesforce and a passion
        for helping businesses thrive, I’ m dedicated to delivering results that make a difference.Whether it’ s through implementing efficient solutions or offering strategic advice, I’ m here to support clients in every step of their technology journey.My focus is on creating lasting impact through innovative and effective solutions. <
        /p> <
        /Segment>

        <
        Divider hidden / >

        <
        Segment padded textAlign = 'center' >
        <
        Header as = 'h2'
        icon = 'handshake outline'
        content = {
            message
        }
        style = {
            {
                color: '#a9885c'
            }
        }
        /> <
        p className = "body-gold" >
        If you 're ready to transform your Salesforce environment or need guidance with your technology strategy, let’s connect 
        and discuss how my experience and skills can drive your success. <
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

export default Service;