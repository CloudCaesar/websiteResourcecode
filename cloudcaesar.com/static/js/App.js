import React, {
    useState
} from 'react';
import AppRouter from './AppRouter';
import './index.css'; // Correct import path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    const [selectedTopLevelItem, setSelectedTopLevelItem] = useState('home');

    return ( <
        div className = "App" >
        <
        AppRouter selectedTopLevelItem = {
            selectedTopLevelItem
        }
        setSelectedTopLevelItem = {
            setSelectedTopLevelItem
        }
        /> <
        /div>
    );
};

export default App;