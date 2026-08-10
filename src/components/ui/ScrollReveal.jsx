
import { motion, useReducedMotion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  type = "standard",
  direction = "up",
  amount = 0.2,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();

  /*
   * Premium easing:
   * Fast initial movement → very soft landing.
   * Similar to the feel used in modern Apple / Linear-style interfaces.
   */
  const premiumEase = [0.16, 1, 0.3, 1];

  /*
   * Convert milliseconds to seconds.
   */
  const delayInSeconds = delay / 1000;

  /*
   * Reduced-motion users get a simple opacity transition.
   */
  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once,
          amount,
        }}
        transition={{
          duration: 0.5,
          delay: delayInSeconds,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  /*
   * ---------------------------------------------------------
   * BASE ANIMATION
   * ---------------------------------------------------------
   */

  let hidden = {
    opacity: 0,
    y: 24,
  };

  let visible = {
    opacity: 1,
    y: 0,
  };

  let duration = 0.9;

  /*
   * ---------------------------------------------------------
   * DIRECTION
   * ---------------------------------------------------------
   */

  switch (direction) {
    case "up":
      hidden = {
        opacity: 0,
        y: 28,
      };
      visible = {
        opacity: 1,
        y: 0,
      };
      break;

    case "down":
      hidden = {
        opacity: 0,
        y: -28,
      };
      visible = {
        opacity: 1,
        y: 0,
      };
      break;

    case "left":
      hidden = {
        opacity: 0,
        x: -28,
      };
      visible = {
        opacity: 1,
        x: 0,
      };
      break;

    case "right":
      hidden = {
        opacity: 0,
        x: 28,
      };
      visible = {
        opacity: 1,
        x: 0,
      };
      break;

    case "scale":
      hidden = {
        opacity: 0,
        scale: 0.96,
      };
      visible = {
        opacity: 1,
        scale: 1,
      };
      break;

    default:
      hidden = {
        opacity: 0,
        y: 24,
      };
      visible = {
        opacity: 1,
        y: 0,
      };
  }

  /*
   * ---------------------------------------------------------
   * TYPE-SPECIFIC ANIMATIONS
   * ---------------------------------------------------------
   */

  switch (type) {
    /*
     * Standard content
     */
    case "standard":
      duration = 0.9;
      break;

    /*
     * Cards:
     * Slightly slower and more dimensional.
     *
     * IMPORTANT:
     * No blur here.
     * Blur + backdrop-blur on children can cause
     * expensive compositing and visual jitter.
     */
    case "card":
      hidden = {
        opacity: 0,
        y: 38,
        scale: 0.97,
      };

      visible = {
        opacity: 1,
        y: 0,
        scale: 1,
      };

      duration = 1.05;
      break;

    /*
     * Images:
     * Soft scale + vertical movement.
     */
    case "image":
      hidden = {
        opacity: 0,
        y: 20,
        scale: 0.97,
      };

      visible = {
        opacity: 1,
        y: 0,
        scale: 1,
      };

      duration = 1.05;
      break;

    /*
     * Badge:
     * Small and quick entrance.
     */
    case "badge":
      hidden = {
        opacity: 0,
        y: 12,
        scale: 0.96,
      };

      visible = {
        opacity: 1,
        y: 0,
        scale: 1,
      };

      duration = 0.75;
      break;

    /*
     * Icon:
     * Tiny rotation adds personality without
     * becoming distracting.
     */
    case "icon":
      hidden = {
        opacity: 0,
        y: 10,
        scale: 0.94,
        rotate: -4,
      };

      visible = {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
      };

      duration = 0.75;
      break;

    /*
     * Button:
     * Short, subtle movement.
     */
    case "button":
      hidden = {
        opacity: 0,
        y: 14,
        scale: 0.97,
      };

      visible = {
        opacity: 1,
        y: 0,
        scale: 1,
      };

      duration = 0.75;
      break;

    /*
     * Heading:
     * Slightly stronger entrance.
     */
    case "heading":
      hidden = {
        opacity: 0,
        y: 30,
      };

      visible = {
        opacity: 1,
        y: 0,
      };

      duration = 1;
      break;

    /*
     * Subtitle:
     * Softer than heading.
     */
    case "subtitle":
      hidden = {
        opacity: 0,
        y: 18,
      };

      visible = {
        opacity: 1,
        y: 0,
      };

      duration = 0.9;
      break;

    default:
      break;
  }

  /*
   * ---------------------------------------------------------
   * FRAMER MOTION
   * ---------------------------------------------------------
   */

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
        margin: "0px 0px -40px 0px",
      }}
      variants={{
        hidden,
        visible,
      }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: duration + 0.3, // Adds a bit more length to the tail for that ultra-premium slow settle
        delay: delayInSeconds,

        /*
         * Prevents children from finishing before
         * the parent animation feels settled.
         */
        ...(type === "card" && {
          scale: {
            type: "spring",
            bounce: 0,
            duration: duration + 0.3,
          },
        }),
      }}
      className={className}
      style={{
        /*
         * Helps the browser optimize transform/opacity.
         * Avoids using filter/blur which can be expensive.
         */
        willChange: "transform, opacity",

        /*
         * Gives cards a little depth without affecting layout.
         */
        ...(type === "card" && {
          perspective: 1200,
        }),
      }}
    >
      {children}
    </motion.div>
  );
}
