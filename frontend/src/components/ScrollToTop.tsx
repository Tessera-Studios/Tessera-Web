import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname]);
    return (<></>);
}

export default ScrollToTop;