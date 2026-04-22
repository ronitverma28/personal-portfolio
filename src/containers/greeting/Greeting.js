import React, { useEffect, useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const ROLE_TITLES = [
  "B.Tech CSE Student",
  "Java Developer",
  "Spring Boot Enthusiast",
];

const TYPE_SPEED = 95;
const DELETE_SPEED = 55;
const WORD_PAUSE = 1300;
const NEXT_WORD_DELAY = 280;

export default function Greeting(props) {
  const theme = props.theme;
  const fallbackRole = greeting.nickname || ROLE_TITLES[0];

  const [displayedRole, setDisplayedRole] = useState(fallbackRole);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const motionMediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const updateMotionPreference = () => {
      setShouldAnimate(!motionMediaQuery.matches);
    };

    updateMotionPreference();

    if (typeof motionMediaQuery.addEventListener === "function") {
      motionMediaQuery.addEventListener("change", updateMotionPreference);
      return () => {
        motionMediaQuery.removeEventListener("change", updateMotionPreference);
      };
    }

    motionMediaQuery.addListener(updateMotionPreference);
    return () => {
      motionMediaQuery.removeListener(updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate || ROLE_TITLES.length <= 1) {
      return undefined;
    }

    const currentRole = ROLE_TITLES[activeRoleIndex];
    let timeoutValue = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && displayedRole === currentRole) {
      timeoutValue = WORD_PAUSE;
    } else if (isDeleting && displayedRole.length === 0) {
      timeoutValue = NEXT_WORD_DELAY;
    }

    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (!currentRole.startsWith(displayedRole)) {
          setDisplayedRole("");
          return;
        }

        if (displayedRole !== currentRole) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          return;
        }

        setIsDeleting(true);
        return;
      }

      if (displayedRole.length > 0) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        return;
      }

      setIsDeleting(false);
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % ROLE_TITLES.length);
    }, timeoutValue);

    return () => clearTimeout(timeoutId);
  }, [activeRoleIndex, displayedRole, isDeleting, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayedRole(fallbackRole);
      setIsDeleting(false);
      setActiveRoleIndex(0);
    }
  }, [fallbackRole, shouldAnimate]);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2
                  className="greeting-nickname"
                  style={{ color: theme.text }}
                  aria-label={`( ${fallbackRole} )`}
                >
                  <span aria-hidden="true">
                    ( {displayedRole}
                    <span className="typing-cursor">|</span> )
                  </span>
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>

            </div>
          </div>
          <div className="greeting-image-div">

            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
