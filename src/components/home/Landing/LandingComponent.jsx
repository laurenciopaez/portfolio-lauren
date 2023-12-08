import React, { useEffect } from "react";
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
import { Button } from "react-bootstrap";

const LandingComponent = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="m-auto pt-2 w-[80%] relative font-serif" id="top">
      <motion.div
        
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.55,
          delay: 0.35,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Navbar bg="dark" data-bs-theme="dark" className="rounded-lg z-20">
          <Container>
            <Navbar.Brand href="#home">No time? Simplify.</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Summary">Summary</Nav.Link>
              <Nav.Link href="#Background">Background</Nav.Link>
              <Nav.Link href="#Tech">Tech</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div
          className="justify-center text-center h-screen mt-[35vh] text-4xl z-20 text-blue-600 font-medium cursor-text"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="text-5xl">Hello!</div> I'm Laurencio Paez Full Stack
          Dev and Engineer Student
          <div className="content-center justify-center m-auto w-full pt-60">
            <Arrow />
          </div>
        </div>

        <Image
          className="absolute top-40 shadow-lg w-[30vh] border-white border"
          
          src="https://media.licdn.com/dms/image/D4D03AQHbwfiO2g0cng/profile-displayphoto-shrink_800_800/0/1689368093238?e=1706745600&v=beta&t=6UfY0kxIjJSZRTAIaz75pmgZViUXMe5mr0pqb-2Tu4k"
          onContextMenu={handleContextMenu}
          roundedCircle
        />
      </motion.div>
      <div id="Summary"></div>
      <motion.div style={{ scale }}>
        <div className="flex flex-row">
          <div
            className="flex-col w-1/2 border m-3 p-2 relative bg-opacity-70 bg-gray-500 shadow-lg rounded-lg"
          >
            <h2 className="text-xl">Summary</h2>
            <div className="absolute border-b-2 border-white w-1/2"></div>
            <p className="mt-2 text-justify">
              Im Laurencio Paez, im 25 years old and i a full stack programmer
              and engineer student. Im a IT and tech passionate in general, who
              wants to learn and work.
            </p>
          </div>
          <div className="flex-col w-1/2 border m-3 p-2 relative bg-opacity-70 bg-gray-500 shadow-lg rounded-lg">
            <h2 className="text-xl">Why me?</h2>
            <div className="absolute border-b-2 border-white w-1/2"></div>
            <p className="mt-2 text-justify">
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
      <h2 className="m-auto  text-center mt-5 mb-3 text-3xl" id="Background" ref={ref}>
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
     

      <div className="w-full">
        <p className="m-auto  text-center text-2xl mb-2" id="contact">
          Contact me!
        </p>
      </div>
      <div className="m-auto border p-3 bg-opacity-70 bg-gray-500 shadow-lg rounded-lg w-1/2 mb-5">
        <ContactForm />
      </div>
      <div className="w-full flex justify-end">
      <Button
        variant="primary"
        href="#top"
        className="bg-black mb-3"
      >
        Top
      </Button>
      </div>
      <div>
        
      </div>
    </div>

  );
};

export default LandingComponent;
