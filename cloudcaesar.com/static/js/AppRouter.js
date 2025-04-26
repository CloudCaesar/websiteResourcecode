import React, {
    Suspense
} from "react";
import {
    HashRouter as Router,
    Route,
    Routes
} from "react-router-dom"; // Use HashRouter
import BlogHeader from "@components/BlogHeader";
import BlogBody from "@components/BlogBody";
import BlogFooter from "@components/BlogFooter";
import Home from "@pages/home/page";
import About from "@pages/about/page";
import Blog from "@pages/blog/page";
import History from "@pages/blog/history/page";
import Mindfulness from "@pages/blog/mindfulness/page";
import Technology from "@pages/blog/technology/page";
import Javascript from "@pages/blog/technology/javascript/page";
import Salesforce from "@pages/blog/technology/salesforce/page";
import Cybersecurity from "@pages/blog/technology/cybersecurity/page";
import Service from "@pages/service/page";
import Vision from "@pages/vision/page";
import Postsalesforce2 from "@pages/blog/technology/salesforce/post/postsalesforce2";
import Postmindfulness4 from "@pages/blog/mindfulness/post/postmindfulness4";
import Postsalesforce3 from "@pages/blog/technology/salesforce/post/postsalesforce3";
import Postmindfulness2 from "@pages/blog/mindfulness/post/postmindfulness2";
import Postjavascript2 from "@pages/blog/technology/javascript/post/postjavascript2";
import Posthistory1 from "@pages/blog/history/post/posthistory1";
import Postjavascript1 from "@pages/blog/technology/javascript/post/postjavascript1";
import Postjavascript4 from "@pages/blog/technology/javascript/post/postjavascript4";
import Postjavascript3 from "@pages/blog/technology/javascript/post/postjavascript3";
import Postcyber1 from "@pages/blog/technology/cybersecurity/post/postcyber1";
// import Postjavascript5 from "@pages/blog/technology/javascript/post/postjavascript5";
import Postmindfulness1 from "@pages/blog/mindfulness/post/postmindfulness1";
import Postsalesforce4 from "@pages/blog/technology/salesforce/post/postsalesforce4";
import Postmindfulness3 from "@pages/blog/mindfulness/post/postmindfulness3";
import Postsalesforce1 from "@pages/blog/technology/salesforce/post/postsalesforce1";
import Posthistory2 from "@pages/blog/history/post/posthistory2";

const AppRouter = ({
        selectedTopLevelItem,
        setSelectedTopLevelItem
    }) => ( <
        Router > { /* Use HashRouter here */ } <
        div className = "app-container" >
        <
        BlogHeader selectedTopLevelItem = {
            selectedTopLevelItem
        }
        setSelectedTopLevelItem = {
            setSelectedTopLevelItem
        }
        /> <
        BlogBody selectedTopLevelItem = {
            selectedTopLevelItem
        }
        setSelectedTopLevelItem = {
            setSelectedTopLevelItem
        } >
        <
        Suspense fallback = { < div > Loading... < /div>}> <
            Routes >
            <
            Route path = "/"
            element = { < Home / >
            }
            /> <
            Route path = "/blog/mindfulness/post/postmindfulness4"
            element = { < Postmindfulness4 / >
            }
            /> <
            Route path = "/blog/mindfulness/post/postmindfulness1"
            element = { < Postmindfulness1 / >
            }
            /> <
            Route path = "/blog/technology/salesforce"
            element = { < Salesforce / >
            }
            /> <
            Route path = "/blog/mindfulness/post/postmindfulness3"
            element = { < Postmindfulness3 / >
            }
            /> <
            Route path = "/blog/technology/javascript/post/postjavascript2"
            element = { < Postjavascript2 / >
            }
            /> <
            Route path = "/home"
            element = { < Home / >
            }
            /> <
            Route path = "/blog/technology/salesforce/post/postsalesforce2"
            element = { < Postsalesforce2 / >
            }
            /> <
            Route path = "/blog/technology/javascript/post/postjavascript3"
            element = { < Postjavascript3 / >
            }
            /> <
            Route path = "/service"
            element = { < Service / >
            }
            /> <
            Route path = "/blog/history"
            element = { < History / >
            }
            /> <
            Route path = "/blog/technology/cybersecurity"
            element = { < Cybersecurity / >
            }
            /> <
            Route path = "/blog/technology/salesforce/post/postsalesforce4"
            element = { < Postsalesforce4 / >
            }
            /> <
            Route path = "/blog/mindfulness/post/Postmindfulness2"
            element = { < Postmindfulness2 / >
            }
            /> <
            Route path = "/blog/mindfulness"
            element = { < Mindfulness / >
            }
            /> <
            Route path = "/blog"
            element = { < Blog / >
            }
            /> <
            Route path = "/blog/technology"
            element = { < Technology / >
            }
            /> <
            Route path = "/blog/technology/javascript/post/postjavascript1"
            element = { < Postjavascript1 / >
            }
            /> <
            Route path = "/blog/technology/javascript"
            element = { < Javascript / >
            }
            /> <
            Route path = "/blog/technology/javascript/post/postjavascript4"
            element = { < Postjavascript4 / >
            }
            /> <
            Route path = "/blog/technology/cybersecurity/post/postcyber1"
            element = { < Postcyber1 / >
            }
            /> { /* <Route path="/blog/technology/javascript/post/postjavascript5" element={<Postjavascript5 />} /> */ } <
            Route path = "/blog/history/post/posthistory1"
            element = { < Posthistory1 / >
            }
            /> <
            Route path = "/blog/technology/salesforce/post/postsalesforce1"
            element = { < Postsalesforce1 / >
            }
            /> <
            Route path = "/blog/technology/salesforce/post/postsalesforce3"
            element = { < Postsalesforce3 / >
            }
            /> <
            Route path = "/about"
            element = { < About / >
            }
            /> <
            Route path = "/vision"
            element = { < Vision / >
            }
            /> <
            Route path = "/blog/history/post/posthistory2"
            element = { < Posthistory2 / >
            }
            /> <
            /Routes> <
            /Suspense> <
            /BlogBody> <
            BlogFooter / >
            <
            /div> <
            /Router>
        );

        export default AppRouter;