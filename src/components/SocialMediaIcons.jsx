import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://linkedin.com/in/alan-xu-se/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img src={linkedin} alt="linked-icon" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/alanxu186"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img src={github} alt="github-icon" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;