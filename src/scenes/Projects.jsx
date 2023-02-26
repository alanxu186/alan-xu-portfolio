import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}>

                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Aliquam, some random line of temporary text because this section is still in works and will contain my featured set of skills that I have yet to put.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                
            </div>
        </section>
    )
}

export default Projects;