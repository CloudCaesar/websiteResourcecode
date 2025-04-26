import React, {
    useState,
    useEffect
} from 'react';
import {
    Container,
    Header,
    Segment,
    Icon,
    Button,
    Grid,
    Image,
    Divider,
    Modal
} from 'semantic-ui-react';
import {
    useNavigate
} from "react-router-dom";
import '@styles/BlogBody.css';
import '@styles/GeneralTheme.css';
import WebToLead from '@components/WebToLead';
import ContactForm from '@components/ContactForm';

const Home = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false); // State to manage WebToLead modal visibility
    const [modalNewsOpen, setModalNewsOpen] = useState(false); // State to manage ContactForm modal visibility

    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://static.ads-twitter.com/uwt.js';
        script.async = true;

        // Append the script to the document
        document.body.appendChild(script);

        // Initialize the Twitter tracking code
        window.twq = window.twq || function() {
            (window.twq.exe ? window.twq.exe.apply(window.twq, arguments) : window.twq.queue.push(arguments));
        };
        window.twq.version = '1.1';
        window.twq.queue = [];
        window.twq('config', 'p5ejt');

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const categories2 = [{
            title: "About",
            description: "Cloud Caesar blends ancient wisdom with modern technology.",
            icon: "pagelines",
            color: "#702963",
        },
        {
            title: "Service",
            description: "Professional Salesforce Development & Technology Consulting.",
            icon: "sun",
            color: "#702963",
        },
        {
            title: "Vision",
            description: "The vision for the company and the things we value.",
            icon: "dna",
            color: "#702963",
        },
    ];

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModalNews = () => {
        setModalNewsOpen(true);
    };

    const handleCloseModalNews = () => {
        setModalNewsOpen(false);
    };

    return ( <
        Container >
        <
        Image src = {
            `${process.env.PUBLIC_URL}/assets/SoPrettyLogo.svg`
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
        Button primary size = 'large'
        className = "custom-button-body full-width-button"
        onClick = {
            handleOpenModal
        } >
        Get In Touch <
        /Button> <
        Divider section / > {
            /* <Button primary size='large' className="custom-button-body full-width-button" onClick={handleOpenModalNews}>
                    Join Our Newsletter
                  </Button>
                  <Divider section /> */
        }

        <
        Segment raised padded >
        <
        Grid stackable columns = {
            3
        }
        divided > {
            categories2.map((category, index) => ( <
                Grid.Column key = {
                    index
                } >
                <
                Segment raised >
                <
                Header as = "h3"
                icon style = {
                    {
                        color: '#a9885c'
                    }
                } >
                <
                Icon name = {
                    category.icon
                }
                className = "custom-icon-body" / > {
                    category.title
                } <
                /Header> <
                p > {
                    category.description
                } < /p> <
                Button fluid className = "custom-button-body"
                onClick = {
                    () => navigate(`/${category.title.toLowerCase()}`)
                } >
                Explore {
                    category.title
                } <
                /Button> <
                /Segment> <
                /Grid.Column>
            ))
        } <
        /Grid> <
        /Segment>

        <
        Divider section / >
        <
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

        { /* WebToLead Modal */ } <
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
        /Modal>

        { /* ContactForm Modal */ } <
        Modal open = {
            modalNewsOpen
        }
        onClose = {
            handleCloseModalNews
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
        } > Join Our Newsletter < /Modal.Header> <
        Modal.Content style = {
            {
                backgroundColor: '#a9885c'
            }
        } >
        <
        ContactForm / >
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
            handleCloseModalNews
        } > Close < /Button> <
        /Modal.Actions> <
        /Modal> <
        /Container>
    );
};

export default Home;