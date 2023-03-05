import { useEffect, useState } from "react";

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    const showTopButton = () => {
        if (window.pageYOffset > 300) {
            setShowTopBtn(true);
        }
        else {
            setShowTopBtn(false);
        }
    };

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", showTopButton());

        return () => window.removeEventListener("scroll", showTopButton());
    }, []);

    return (
            <button onClick={backToTop}>
                Click me
            </button>
    )
}

export default ScrollToTop;