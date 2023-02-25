import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import profile from "../assets/my-profile-pic.jpg";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

            {/* IMAGE */}
            <div className="md:order-2 flex justify-center basis-3/5 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img src={profile} className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]" alt="profile" />
                    </div>
                ) : (
                    <div>
                        <img src={profile} className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]" alt="profile" />
                    </div>
                )}

                {/* MAIN SECTION */}
            </div>
        </section>
    )
}

export default Landing;