import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top instantly
    }, [pathname]);
    return (<></>);
}

export default ScrollToTop;