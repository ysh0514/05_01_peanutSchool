import React, { useEffect, useState } from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    }
  }, [updateScroll]);

  return scrollPosition;
}
