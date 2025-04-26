import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import {
    Container,
    Header,
    Segment,
    Button,
    Modal,
    Icon,
    Image,
    Grid,
    GridColumn,
    GridRow
} from 'semantic-ui-react';
import '@styles/BlogBody.css';
import PostHeader from '@components/PostHeader';
import {
    renderStaticListTriggerOrder,
    renderStepListTriggerOrder
} from '@data/listRenderers';

const Postsalesforce1 = () => {
        const svgRef = useRef(null);
        const [buttonPositions, setButtonPositions] = useState([]);
        const [firstOpen, setFirstOpen] = useState(false);
        const [secondOpen, setSecondOpen] = useState(false);
        const [selectedStep, setSelectedStep] = useState(null);
        const [scrollPosition, setScrollPosition] = useState({
            top: 0,
            left: 0
        });
        const image = "/assets/Blog/BBEFFVph8GeEHbXjnB7NnK.svg";
        const image2 = "/assets/FeedItems/hBcXeCPUVSM.svg";
        const audioFile = "/audio/baHPQNCNTsySTey4htWC.mp3"; // Path to your MP3 file
        const post = {
            title: "Triggers and Order of Execution",
            date: "November 12, 2024",
            image: "/assets/FeedItems/BBYqAzVX74RkVwwrt7G.svg",
            image2: "/assets/FeedItems/hBcXeCPUVSM!!2Dcm8Qe.svg",
            summary: "When you save a record with an insert, update, or upsert statement, Salesforce performs a sequence of events in a certain order.",
            path: "blog/technology/salesforce/post/postsalesforce1"
        };

        const handleButtonClick = () => {
            if (svgRef.current) {
                const svgDoc = svgRef.current.contentDocument;
                if (svgDoc) {
                    const scrollTop = svgDoc.documentElement.scrollTop || svgDoc.body.scrollTop;
                    const scrollLeft = svgDoc.documentElement.scrollLeft || svgDoc.body.scrollLeft;
                    setScrollPosition({
                        top: scrollTop,
                        left: scrollLeft
                    });
                }
            }
            setFirstOpen(true);
        };

        const handleElementClick = (step) => {
            const stepNumber = step.match(/\d+/)[0]; // Extract the step number from the id
            setSelectedStep(stepNumber);
            setSecondOpen(true);
        };

        const handleScroll = () => {
            if (svgRef.current) {
                const svgDoc = svgRef.current.contentDocument;
                if (svgDoc) {
                    const scrollTop = svgDoc.documentElement.scrollTop || svgDoc.body.scrollTop;
                    const scrollLeft = svgDoc.documentElement.scrollLeft || svgDoc.body.scrollLeft;
                    setScrollPosition({
                        top: scrollTop,
                        left: scrollLeft
                    });
                }
            }
        };

        useEffect(() => {
            const handleLoad = () => {
                if (svgRef.current) {
                    const svgDoc = svgRef.current.contentDocument; // Access the inner SVG document
                    if (!svgDoc) {
                        console.error('SVG document not found');
                        return;
                    }

                    const positions = [];
                    for (let i = 1; i <= 20; i++) {
                        const id = `czr-lcd__step${i}.0_`;
                        const annotatedElement = svgDoc.getElementById(id); // Select the element with the specific id
                        console.log('Annotated element:', annotatedElement); // Print out the element found

                        if (!annotatedElement) {
                            console.warn(`No element with id ${id} found`);
                            continue;
                        }

                        const svgRect = svgRef.current.getBoundingClientRect(); // Get the bounding rectangle of the SVG container
                        const rect = annotatedElement.getBoundingClientRect();

                        console.log(`Element ID: ${id}, Rect:`, rect); // Print out the element ID and its bounding rect

                        // Add click event listener to the element
                        annotatedElement.addEventListener('click', () => handleElementClick(id));

                        const position = {
                            id,
                            top: rect.top - svgRect.top,
                            left: rect.left - svgRect.left,
                        };

                        positions.push(position);
                    }

                    const id = `czr-lcd__step11.1_`;
                    const annotatedElement = svgDoc.getElementById(id); // Select the element with the specific id

                    const svgRect = svgRef.current.getBoundingClientRect(); // Get the bounding rectangle of the SVG container
                    const rect = annotatedElement.getBoundingClientRect();

                    console.log(`Element ID: ${id}, Rect:`, rect); // Print out the element ID and its bounding rect

                    // Add click event listener to the element
                    annotatedElement.addEventListener('click', () => handleElementClick(id));

                    const position = {
                        id
                    };

                    if (svgDoc.documentElement) {
                        svgDoc.documentElement.scrollTop = scrollPosition.top;
                        svgDoc.documentElement.scrollLeft = scrollPosition.left;
                    }
                    if (svgDoc.body) {
                        svgDoc.body.scrollTop = scrollPosition.top;
                        svgDoc.body.scrollLeft = scrollPosition.left;
                    }

                    positions.push(position);
                    setButtonPositions(positions);

                    // Restore scroll position
                    svgDoc.documentElement.scrollTop = scrollPosition.top;
                    svgDoc.documentElement.scrollLeft = scrollPosition.left;
                }
            };

            if (svgRef.current) {
                svgRef.current.addEventListener('load', handleLoad);
                svgRef.current.addEventListener('scroll', handleScroll);
            }

            return () => {
                if (svgRef.current) {
                    svgRef.current.removeEventListener('load', handleLoad);
                    svgRef.current.removeEventListener('scroll', handleScroll);
                }
            };
        }, [firstOpen, scrollPosition]);

        return ( <
                div >
                <
                Container style = {
                    {
                        marginTop: "2em"
                    }
                } >
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
                Segment raised padded className = "background-byz" >
                <
                Segment raised padded className = "background-byz" >
                <
                Grid columns = {
                    4
                }
                verticalAlign = '' >
                <
                GridRow >
                <
                GridColumn >
                <
                Button className = "custom-button"
                onClick = {
                    handleButtonClick
                } > Open Modal < /Button> <
                /GridColumn> <
                /GridRow> <
                GridRow style = {
                    {
                        paddingTop: '1em'
                    }
                } >
                <
                GridColumn style = {
                    {
                        paddingTop: '1em'
                    }
                } >
                <
                audio controls >
                <
                source src = {
                    audioFile
                }
                type = "audio/mpeg" / >
                Your browser does not support the audio element. <
                /audio> <
                /GridColumn> <
                /GridRow> <
                /Grid> <
                /Segment> <
                div onClick = {
                    handleButtonClick
                }
                style = {
                    {
                        fontWeight: 'bold',
                        fontSize: '1.2em'
                    }
                } > {
                    renderStaticListTriggerOrder()
                } <
                /div> <
                /Segment> <
                Segment raised padded className = "background-byz" >
                <
                Image src = {
                    image2
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
                /Container>

                <
                Modal onClose = {
                    () => setFirstOpen(false)
                }
                onOpen = {
                    () => setFirstOpen(true)
                }
                open = {
                    firstOpen
                }
                closeIcon = { < Icon name = 'close'
                    style = {
                        {
                            color: '#a9885c',
                            paddingRight: '100px'
                        }
                    }
                    />}
                    style = {
                        {
                            width: '100%',
                            backgroundColor: '#702963'
                        }
                    } >
                    <
                    Modal.Header
                    style = {
                        {
                            backgroundColor: '#702963'
                        }
                    } >
                    <
                    span style = {
                        {
                            color: '#a9885c'
                        }
                    } > Scrollable / Clickable < /span>  <
                    /Modal.Header> <
                    Modal.Content
                    style = {
                        {
                            backgroundColor: '#702963',
                            overflow: 'auto'
                        }
                    } >
                    <
                    iframe
                    ref = {
                        svgRef
                    }
                    src = {
                        image
                    }
                    width = "100%"
                    height = "800px"
                    aria - label = "Interactive SVG"
                    style = {
                        {
                            display: 'block',
                            margin: '0 auto',
                            border: 'none',
                            minWidth: '100%',
                            minHeight: '400px'
                        }
                    }
                    /> <
                    /Modal.Content> <
                    Modal.Actions
                    style = {
                        {
                            backgroundColor: '#702963'
                        }
                    } >
                    <
                    Button onClick = {
                        () => setFirstOpen(false)
                    }
                    style = {
                        {
                            backgroundColor: '#a9885c',
                            color: '#702963'
                        }
                    } >
                    Close < Icon name = 'close' / >
                    <
                    /Button> <
                    /Modal.Actions>

                    <
                    Modal
                    onClose = {
                        () => setSecondOpen(false)
                    }
                    open = {
                        secondOpen
                    }
                    size = 'large'
                    closeIcon = { < Icon name = 'close'
                        style = {
                            {
                                color: '#a9885c'
                            }
                        }
                        />}
                        style = {
                            {
                                backgroundColor: '#702963',
                                paddingRight: '20px'
                            }
                        } >
                        <
                        Modal.Header
                        style = {
                            {
                                backgroundColor: '#702963'
                            }
                        } >
                        <
                        /Modal.Header> <
                        Modal.Content style = {
                            {
                                backgroundColor: '#702963'
                            }
                        } >
                        <
                        Segment raised padded className = "background-byz" >
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
                        Header.Subheader style = {
                            {
                                color: '#a9885c'
                            }
                        } > {
                            selectedStep && renderStepListTriggerOrder(selectedStep)
                        } <
                        /Header.Subheader> <
                        /Header> <
                        /Segment> <
                        /Modal.Content> <
                        Modal.Actions className = "background-byz" >
                        <
                        Button
                        icon = 'check'
                        content = 'All Done'
                        style = {
                            {
                                backgroundColor: '#a9885c',
                                color: '#702963'
                            }
                        }
                        onClick = {
                            () => setSecondOpen(false)
                        }
                        /> <
                        /Modal.Actions> <
                        /Modal> <
                        /Modal> <
                        /div>
                    );
                };

                export default Postsalesforce1;