// utils/scrollHandler.js
export const addScrollHandler = () => {
    const handleScroll = () => {
      const scrollDiv = document.getElementById('scrollDiv');

      if (window.scrollY > 0) {
        scrollDiv.classList.add('h-24');
      } else {
        scrollDiv.classList.remove('h-24');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  