import React, { useEffect, useState } from "react";
import ContactForm from "./form/ContactForm";
import TimelinePortfolio from "./TimeLine";
import "../../../app/globals.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import Arrow from "./subcomps/Arrow";
import { useInView } from "react-intersection-observer";

import Footer from "./subcomps/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import TechnologiesBox from "./subcomps/TechnologiesBox";

const LandingComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };
  const handleQuestionClick = () => {
    ReactTooltip.show();
    setTimeout(() => {
      ReactTooltip.hide();
    }, 3000);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  //Scroll
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.5], [0.6, 1.5]);

  //use view
  const [ref, inView] = useInView({
    triggerOnce: true, // Activará el inView solo una vez
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Activará el inView solo una vez
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Activará el inView solo una vez
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="m-auto lg:pt-2 lg:w-[80%] relative font-serif" id="top">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.55,
          delay: 0.35,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className="lg:rounded-lg z-20"
        >
          <Container>
            <Navbar.Brand href="#home">No time? Simplify.</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleNavToggle}
            />

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={`${expanded ? "block" : "hidden"} lg:flex`}
            >
              <Nav className="me-auto">
                <Nav.Link href="#Summary">Summary</Nav.Link>
                <Nav.Link href="#Background">Background</Nav.Link>
                <Nav.Link href="#Tech">Tech</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div
          className="justify-center text-center lg:h-screen h-[60vh] mt-[35vh] lg:text-4xl text-2xl z-20 text-blue-600 font-medium cursor-text"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="lg:text-5xl text-3xl">Hello!</div> I'm Laurencio Paez
          Full Stack Dev and Engineer Student
          <div className="w-full mt-3">
            <a
              href="https://www.linkedin.com/in/laurencio-paez-727042155/"
              target="_blank"
              className="mr-5"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/laurenciopaez" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <Arrow />
        </div>

        <Image
          className="absolute xl:top-36 lg:top-32 shadow-lg w-[30vh] border-white border hidden lg:block"
          src="https://media.licdn.com/dms/image/D4D03AQHbwfiO2g0cng/profile-displayphoto-shrink_800_800/0/1689368093238?e=1706745600&v=beta&t=6UfY0kxIjJSZRTAIaz75pmgZViUXMe5mr0pqb-2Tu4k"
          onContextMenu={handleContextMenu}
          roundedCircle
        />
      </motion.div>
      <div id="Summary"></div>
      <motion.div style={{ scale }}>
        <div className="flex lg:flex-row flex-col">
          <div className="flex-col lg:w-1/2 w-full border lg:m-3 p-2 relative bg-opacity-70 bg-gray-500 shadow-lg rounded-lg">
            <h2 className="text-xl">Summary</h2>
            <div className="absolute border-b-2 border-white w-1/2"></div>
            <p className="mt-2 text-justify lg:text-xl text-2xl">
              Im Laurencio Paez, im 25 years old and i a full stack programmer
              and engineer student. Im a IT and tech passionate in general, who
              wants to learn and work.
            </p>
          </div>
          <div className="flex-col lg:w-1/2 w-full border lg:m-3 sm:mt-3 p-2 relative bg-opacity-70 bg-gray-500 shadow-lg rounded-lg">
            <h2 className="text-xl">Why me?</h2>
            <div className="absolute border-b-2 border-white w-1/2"></div>
            <p className="mt-2 text-justify lg:text-xl text-2xl">
              My engineering education has equipped me with knowledge in areas
              such as applied physics, metallurgy, algorithms, applied
              mathematics and administration. I consider myself a person with
              significant strenght, determination, and persistence to solve
              problems. Additionally, i have developed social skills essential
              form teamwork, including collaboration, communication, and conflit
              resolution. These soft skills have been cultivated both in my
              education at Henry and throughout my engineering career.
            </p>
          </div>
        </div>
      </motion.div>
      <h2
        className="m-auto  text-center mt-5 mb-3 text-3xl lg:text-2xl"
        id="Background"
        ref={ref}
      >
        My background
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="m-auto w-full">
          <TimelinePortfolio />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView2 ? 1 : 0, scale: inView2 ? 1 : 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
      <div className="w-full mt-5 mb-5" id="Tech" ref={ref2}>
        <TechnologiesBox />
      </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView3 ? 1 : 0, scale: inView3 ? 1 : 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
      <div className="lg:w-1/2 w-full m-auto flex mt-3 relative" ref={ref3}>
        <p
          className="m-auto text-center lg:text-2xl mb-2 text-3xl"
          id="contact"
        >
          Contact me!
        </p>
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className="absolute p-2 text-2xl cursor-pointer right-2"
          onClick={handleQuestionClick}
          data-tooltip-content="I'm looking for an afternoon part-time job and also open for freelance jobs"
          data-tooltip-id="globito"
        />
      </div>
      <Tooltip id="globito"></Tooltip>
      
      <div className="m-auto p-3 bg-opacity-70 bg-gray-500 shadow-lg rounded-lg lg:w-3/4 xl:w-1/2 sm:mr-1 sm:ml-1 mb-5">
        <ContactForm />
      </div>
      </motion.div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LandingComponent;
