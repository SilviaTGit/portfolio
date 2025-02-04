import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Full Stack Developer", "Front-end Developer", "UI/UX Designer"];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[index];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 30 : 150);
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, typingSpeed, index, loopNum]);

  return (
    <div className="animated-text">
      <motion.span
        key={displayedText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="animated-word"
      >
        {displayedText}
      </motion.span>
    </div>
  );
};

export default AnimatedText;