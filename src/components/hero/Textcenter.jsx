import React, { useState, useEffect } from 'react';

const words = ['Front end', 'Web'];

const Textcenter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before delete
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="vt323-regular text-4xl md:text-6xl font-bold text-black">
        {displayedText}
        <span className="blinking-cursor">_</span> Developer
      </h1>
    </div>
  );
};

export default Textcenter;
