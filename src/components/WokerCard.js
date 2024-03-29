import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./workercard.scss";

const DEFAULT_TRANSITION = { duration: 0.4, ease: "easeInOut" };

const getContentVariants = ({ maxWidth, minWidth, minHeight }) => {
  return {
    large: {
      paddingTop: "48px",
      paddingBottom: "48px",
      paddingLeft: "48px",
      paddingRight: "48px",
      width: `${maxWidth - 96}px`,
      height: `${maxWidth - 96}px`,
      transition: DEFAULT_TRANSITION,
    },
    small: {
      paddingTop: "17px",
      paddingBottom: "17px",
      paddingLeft: "32px",
      paddingRight: "32px",
      width: `${minWidth - 64}px`,
      height: `${minHeight - 34}px`,
      transition: DEFAULT_TRANSITION,
    },
  };
};

const conatinerVariants = {
  large: {
    borderRadius: "40px",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    borderRadius: "0px",
    transition: DEFAULT_TRANSITION,
  },
};

const detailVariants = {
  large: {
    flexDirection: "column",
    alignItems: "flex-start",
    transition: DEFAULT_TRANSITION,
  },
  small: {
    flexDirection: "row",
    alignItems: "center",
    transition: DEFAULT_TRANSITION,
  },
};

const buttonContainerVariants = {
  hidden: {
    opacity: 0,
    height: "0px",
    transition: DEFAULT_TRANSITION,
  },
  visible: {
    opacity: 1,
    height: "72px",
    transition: DEFAULT_TRANSITION,
  },
};

const WorkerCard = ({ workerData, expanded, onClick, dimensions }) => {
  const contentVariants = getContentVariants(dimensions);

  const currentSize = expanded ? "large" : "small";

  const titleVariant = {
    large: {
      marginBottom: "16px",
      color: "#4c5775",
      transition: DEFAULT_TRANSITION,
    },
    small: {
      marginBottom: "0px",
      color: workerData.color,
      transition: DEFAULT_TRANSITION,
    },
  };

  const percentVariant = {
    large: {
      fontSize: "4.5rem",
      color: "#4c5775",
      transition: DEFAULT_TRANSITION,
    },
    small: {
      fontSize: "2rem",
      color: workerData.color,
      transition: DEFAULT_TRANSITION,
    },
  };

  return (
    <motion.div
      className="worker-card"
      variants={conatinerVariants}
      animate={currentSize}
      initial="large"
      onClick={onClick}
    >
      <motion.div
        className="worker-card__content"
        variants={contentVariants}
        animate={currentSize}
      >
        <motion.div
          className="worker-card__content__details"
          variants={detailVariants}
          animate={currentSize}
        >
          <motion.h1
            className="secondary-font"
            variants={titleVariant}
            animate={currentSize}
          >
            {workerData.name}
          </motion.h1>
          <motion.h1
            className="primary-font"
            variants={percentVariant}
            animate={currentSize}
          >
            {workerData.percent}
            <span style={{ fontSize: "2rem" }}>%</span>
          </motion.h1>
        </motion.div>
        <AnimatePresence>
          {currentSize === "large" && (
            <motion.div
              className="button-container"
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* <motion.div className="button">
                <div className="icon icon-32 icon-lines mr-12" />
                <motion.p>Lines</motion.p>
              </motion.div>
              <motion.div className="button">
                <div className="icon icon-32 icon-machines mr-12" />
                <motion.p>Machines</motion.p>
              </motion.div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default WorkerCard;
