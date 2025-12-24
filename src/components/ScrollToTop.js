import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Disable browser's automatic scroll restoration
        window.history.scrollRestoration = 'manual';

        // Scroll to top immediately before the browser paints
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
