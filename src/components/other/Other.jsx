import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Other = ({ i expanded, setExpanded, title, description }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#fcd125" : "#003f66",
        }}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          cursor: "pointer",
          borderTop:" 2px solid",
        }}
      >
        {<h1>HOT-MELT ADHESIVE (HMA)</h1>}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              backgroundColor: "#080808c9",
              padding: "0 2rem",
            }}
          >
            {
                <ul>
                    <li>Technomelt Prime 200</li>
                    <li>Technomelt Prime 400</li>
                    <li>Technomelt Supra 100 Plus 22</li>
                    <li>Technomelt 3101</li>
                    <li>Technomelt 300</li>
                    <li>Technomelt 2401</li>
                    <li>Technomelt 3625</li>
                    <li>Technomelt 2414</li>
                    <li>Technomelt Cleaner 103</li>
                </ul>
            }
          </motion.section>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#fcd125" : "#003f66",
        }}
        onClick={() => setExpanded(isOpen ? false : j)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          cursor: "pointer",
          borderTop:" 2px solid",
        }}
      >
        {<h1>AQUENCE-WATER BASED ADHESIVE</h1>}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              backgroundColor: "#080808c9",
              padding: "0 2rem",
            }}
          >
            {
                <ul>
                    <li>Aquence LAM 7060</li>
                    <li>Aquence 7093</li>
                    <li>Aquence BG 6291</li>
                    <li>Aquence 48345</li>
                    <li>Aquence GA 060</li>
                    <li>Aquence LA 10</li>
                    <li>Aquence 709 H</li>
                    <li>Aquence Seal 0106</li>
                </ul>
            }
          </motion.section>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#fcd125" : "#003f66",
        }}
        onClick={() => setExpanded(isOpen ? false : k)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem 4rem",
          cursor: "pointer",
          borderTop:" 2px solid",
        }}
      >
        {<h1>OTHER CHEMICALS</h1>}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              backgroundColor: "#080808c9",
              padding: "0 2rem",
            }}
          >
            {
                <ul>
                    <li>NATURAL HYDRAULIC LIME</li>
                    <li>FABRIC SOFTENER BASE</li>
                    <li>SOFTENER SALT</li>
                    <li>CAUSTIC SODA</li>
                    <li>THINNER</li>
                </ul>
            }
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Other
