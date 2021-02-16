import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
// import Product from "./views/Product";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE, {
    debug: false,
    siteSpeedSampleRate: 1000,
});

const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
};

const App = () => {
    const childRef = useRef();
    let location = useLocation();

    useEffect(() => {
        // ! https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

        const page = location.pathname;
        const hash = location.hash;
        if (hash === "") {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
        document.body.classList.add("is-loaded");
        childRef.current.init();
        trackPage(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <ScrollReveal
            ref={childRef}
            children={() => (
                <Switch>
                    <AppRoute
                        exact
                        path="/"
                        component={Home}
                        layout={LayoutDefault}
                    />
                    {/* <AppRoute exact path="/Product" component={Product} layout={LayoutDefault} />  */}
                </Switch>
            )}
        />
    );
};

export default App;
