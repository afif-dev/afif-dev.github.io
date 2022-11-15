import Header from "./header";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100, rotateX: 45, transition: { duration: 0.25 } },
};

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />

      <motion.main initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: "linear" }}>
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
