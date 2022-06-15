import { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed w-9 h-9 rounded-full bottom-10 right-0.5 text-base z-50 cursor-pointer bg-greenLight m-6"
    >
      TOP
    </button>
  ) : (
    <></>
  );
};

export { ScrollButton };
