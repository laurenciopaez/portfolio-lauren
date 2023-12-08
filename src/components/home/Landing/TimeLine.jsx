import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { BsArrowDownCircleFill } from "react-icons/bs";

import { motion } from "framer-motion";
import ModalComponent from "./modal/ModalComponent";

const TimelinePortfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState("");

  const handleArrowClick = (index) => {
    setModalIndex(index);
    setShowModal(true);
  };

  return (
    <>
      <Timeline position="alternate" >
        {/* item 1 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              2017 - Started Mechanical Engineering
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        {/* item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              Mathematical Analysis 1 & 2 - Algebra 1 & 2{" "}
            </motion.div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2018</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              Mathematical Analysis 3 - Advanced Mathematics - Computing
              (Pascal) - Statistics{" "}
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2019</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2020</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              <div
                name="1"
                className="flex flex-row w-full justify-start cursor-pointer "
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                Programming with Java for Android applications{" "}
                <BsArrowDownCircleFill className="ml-2 mt-1" />{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              <div
                name="2"
                className="flex flex-row w-full justify-end cursor-pointer "
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                <BsArrowDownCircleFill className="mr-2 mt-1" />
                Android Basics{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2021</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              <div
                name="3"
                className="flex flex-row w-full justify-end cursor-pointer "
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                <BsArrowDownCircleFill className="mr-2 mt-1" /> HTML5: Web
                Fundamentals{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2022</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              {" "}
              <div
                name="4"
                className="flex flex-row w-full justify-end cursor-pointer"
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                <BsArrowDownCircleFill className="mr-2 mt-1" />
                Web Layout: HTML5 and CSS3{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              {" "}
              <div
                name="5"
                className="flex flex-row w-full justify-start cursor-pointer"
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                Javascript from scratch{" "}
                <BsArrowDownCircleFill className="ml-2 mt-1" />{" "}
              </div>{" "}
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              {" "}
              <div
                name="6"
                className="flex flex-row w-full justify-end cursor-pointer "
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                <BsArrowDownCircleFill className="mr-2 mt-1" />
                Responsive Web Design{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              {" "}
              <div
                name="7"
                className="flex flex-row w-full justify-start cursor-pointer "
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                Numerical Analysis for Engineering{" "}
                <BsArrowDownCircleFill className="ml-2 mt-1" />
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="font-serif">2023</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              <div
                name="8"
                className="flex flex-row w-full justify-start cursor-pointer"
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                JavaScript Algorithms and Data Structures{" "}
                <BsArrowDownCircleFill className="ml-2 mt-1" />
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="mr-2 font-serif"
            >
              <div
                name="9"
                className="flex flex-row w-full justify-end cursor-pointer"
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                <BsArrowDownCircleFill className="mr-2 mt-1" />
                CS50's Understanding Technology
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                //delay:0.1,
                duration: 0.2,
              }}
              className="ml-2 font-serif"
            >
              <div
                name="10"
                className="flex flex-row w-full justify-start cursor-pointer"
                onClick={(event) =>
                  handleArrowClick(event.currentTarget.getAttribute("name"))
                }
              >
                {" "}
                Henry Bootcamp <BsArrowDownCircleFill className="ml-2 mt-1" />{" "}
              </div>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
                
      {showModal ? (
        <ModalComponent
          index={modalIndex}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default TimelinePortfolio;
