import Header from "./header";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.15, delay: 0.3 } },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.9, transition: { duration: 0.15, delay: 0.15 } },
};

export default function Layout({ children }: any) {
  return (
    <div className="page">
      <Header />
      <motion.main initial="hidden" animate="enter" exit="exit" variants={variants}>
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
