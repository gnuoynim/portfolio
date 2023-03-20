import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import PublishingComponent from "./publishing-component";


const NavigationBarComponent = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // const router = useRouter();
  const handleScroll = () => {
    if (scrollY > 60) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  
  return (
    <>
      
      <div className={scrollActive ? "header fixed" : "header"}>
        <p>
          minyoun<span>g</span>
        </p>
        <ul className="nav">
          <li>
            <Link href="https://github.com/gnuoynim/" target="_blank">
              gitHub
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#develop">
              Develop
            </Link>
          </li>
          <li>
            <Link href="/#publishing">
              Publishing
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBarComponent;
