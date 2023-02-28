const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://linkedin.com/in/alan-xu-se/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img className="w-10 h-10" src={require('../assets/Linkedin-test.png')} alt="linked-icon" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/alanxu186"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img className="w-10 h-10" src={require('../assets/Github-test.png')} alt="github-icon" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;