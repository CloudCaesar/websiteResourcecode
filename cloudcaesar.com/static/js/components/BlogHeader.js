import React, {
    useState,
    useEffect
} from 'react';
import {
    Menu,
    Image,
    Button,
    Dropdown
} from 'semantic-ui-react';
import {
    useNavigate
} from 'react-router-dom';
import '@styles/BlogHeader.css';
import '@styles/customColors.css';
import {
    menuData
} from '@data/menuData';

const BlogHeader = ({
    selectedTopLevelItem,
    setSelectedTopLevelItem
}) => {
    const [activeItem, setActiveItem] = useState('home');
    const [deviceType, setDeviceType] = useState(getDeviceType());
    const navigate = useNavigate();

    // Function to determine the device type based on window width
    function getDeviceType() {
        const width = window.innerWidth;
        if (width <= 768) return 'mobile';
        if (width <= 991) return 'tablet';
        return 'desktop';
    }

    // Handler for menu item clicks
    const handleItemClick = (e, {
        name
    }) => {
        setActiveItem(name);
        setSelectedTopLevelItem(name);
        navigate(`/${name.toLowerCase()}`);
    };

    // Debounce function to limit the rate at which a function can fire.
    const debounce = (func, delay) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func();
            }, delay);
        };
    };

    // Function to update the device type based on window width
    const updateDeviceType = () => {
        const currentDeviceType = getDeviceType();
        setDeviceType(currentDeviceType);
    };

    // Set up event listener for window resize with debounce
    useEffect(() => {
        const debouncedResizeHandler = debounce(updateDeviceType, 150);
        window.addEventListener('resize', debouncedResizeHandler);
        return () => window.removeEventListener('resize', debouncedResizeHandler);
    }, []);

    // Function to render menu items as Buttons (for Desktop)
    const renderMenuButtons = (items) => {
        return items.map((item, index) => ( <
            Menu.Item key = {
                index
            }
            name = {
                item.title
            }
            active = {
                activeItem === item.title
            }
            onClick = {
                handleItemClick
            } >
            <
            Button className = {
                `custom-button ${activeItem === item.title ? 'active' : ''}`
            } > {
                item.title
            } <
            /Button> <
            /Menu.Item>
        ));
    };

    // Function to render menu items as Dropdown Items (for Mobile and Tablet)
    const renderDropdownItems = (items) => {
        return items.map((item, index) => ( <
            Dropdown.Item key = {
                index
            }
            text = {
                item.title
            }
            name = {
                item.title
            }
            active = {
                activeItem === item.title
            }
            onClick = {
                handleItemClick
            }
            />
        ));
    };

    return ( <
        div >
        <
        Menu secondary pointing className = "header-menu" > { /* Conditionally render the logo as a regular Menu.Item or as a Dropdown trigger */ } {
            deviceType === 'desktop' ? ( <
                Menu.Item className = "logo-item"
                name = "home"
                onClick = {
                    handleItemClick
                } >
                <
                Image src = {
                    `${process.env.PUBLIC_URL}/assets/CZRLogoCC.svg`
                }
                alt = "Logo"
                className = "header-logo" /
                >
                <
                /Menu.Item>
            ) : ( <
                Menu.Item >
                <
                Dropdown trigger = { <
                    Image
                    src = {
                        `${process.env.PUBLIC_URL}/assets/CZRLogoCC.svg`
                    }
                    alt = "Logo"
                    className = "header-logo" /
                    >
                }
                pointing = "left"
                icon = {
                    null
                }
                className = "dropdown-menu" >
                <
                Dropdown.Menu > {
                    menuData && menuData.menu && renderDropdownItems(menuData.menu)
                } <
                /Dropdown.Menu> <
                /Dropdown> <
                /Menu.Item>
            )
        }

        { /* Render menu items as Buttons on Desktop */ } {
            deviceType === 'desktop' && menuData && menuData.menu && renderMenuButtons(menuData.menu)
        }

        { /* Header Text */ } <
        div className = "header-text" > Cloud Caesar < /div> <
        /Menu> <
        /div>
    );
};

export default BlogHeader;