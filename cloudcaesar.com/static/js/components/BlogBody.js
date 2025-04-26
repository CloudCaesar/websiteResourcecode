import React, {
    Component,
    createRef
} from 'react';
import {
    Grid,
    Segment
} from 'semantic-ui-react';
import BlogMenu from '@components/BlogMenu';
import '@styles/BlogBody.css';

class BlogBody extends Component {
    contextRef = createRef();
    state = {
        isHovered: false,
        deviceType: this.getDeviceType(), // Initialize deviceType
    };

    // Function to determine the device type based on window width
    getDeviceType() {
        const width = window.innerWidth;
        if (width <= 767) return 'mobile';
        if (width <= 991) return 'tablet';
        return 'desktop';
    }

    // Handler for mouse enter
    handleMouseEnter = () => {
        this.setState({
            isHovered: true
        });
    };

    // Handler for mouse leave
    handleMouseLeave = () => {
        this.setState({
            isHovered: false
        });
    };

    // Function to update the device type based on window width
    updateDeviceType = () => {
        const currentDeviceType = this.getDeviceType();
        this.setState({
            deviceType: currentDeviceType
        });
    };

    // Set up event listener for window resize
    componentDidMount() {
        window.addEventListener('resize', this.updateDeviceType);
    }

    // Clean up the event listener
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDeviceType);
    }

    render() {
        const {
            children,
            selectedTopLevelItem,
            handleChildMenuClick
        } = this.props;
        const {
            isHovered,
            deviceType
        } = this.state;

        // Determine if BlogMenu should be rendered
        // Do not render BlogMenu on mobile or tablet
        const shouldRenderBlogMenu = deviceType === 'desktop';

        // Determine the width of the content column
        const contentColumnWidth = 16;
        // ? isHovered
        //   ? 12
        //   : 14
        // : 16; // 16 for full width on mobile and tablet

        return ( <
            div className = "background-image" >
            <
            Segment > {
                children
            } <
            /Segment> <
            /div>
        );
    }
}

export default BlogBody;