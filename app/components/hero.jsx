// import styles from '../styles/hero.module.css'

// export function Hero() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <h1 className={styles.title}>
//             Transforming Your Vision Into a
//             <span className={styles.highlight}>Powerful Story</span>
//           </h1>
//           <p className={styles.description}>
//             We specialize in capturing your vision and transforming it into compelling story. 
//             Through creativity and production we bring your ideas to life, creating impactful 
//             visual narratives that resonate with your audience.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

// import styles from '../styles/hero.module.css'

// export function Hero() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.videoWrapper}>
//         <video className={styles.backgroundVideo} autoPlay loop muted>
//           <source src="/bg_video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </section>
//   )
// }

// "use client";

// import { useRef, useEffect, useState } from 'react';
// import styles from '../styles/hero.module.css';

// export function Hero() {
//   const videoRef = useRef(null); // Reference to the video element
//   const [showThumbnail, setShowThumbnail] = useState(false); // State to toggle thumbnail visibility
//   const [playCount, setPlayCount] = useState(0); // State to track video play count

//   useEffect(() => {
//     const handleEnded = () => {
//       if (videoRef.current) {
//         if (playCount < 1) {
//           setPlayCount(prev => prev + 1); // Increment play count
//           videoRef.current.play(); // Replay video
//         } else {
//           setShowThumbnail(true); // Show thumbnail after 2 plays
//         }
//       }
//     };

//     const video = videoRef.current;
//     if (video) {
//       video.addEventListener('ended', handleEnded); // Attach event listener
//     }

//     return () => {
//       if (video) {
//         video.removeEventListener('ended', handleEnded); // Clean up event listener
//       }
//     };
//   }, [playCount]);

//   return (
//     <section className={styles.section}>
//       <div className={styles.videoWrapper}>
//         {showThumbnail ? ( // Show thumbnail if state is true
//           <img 
//             src="/thumbnail.png" // Replace with your thumbnail image path
//             alt="Video Thumbnail"
//             className={styles.thumbnail}
//           />
//         ) : ( // Otherwise, show the video
//           <video 
//             ref={videoRef} 
//             className={styles.backgroundVideo} 
//             autoPlay 
//             muted
//           >
//             <source src="/bg_video.mp4" type="video/mp4" />
//             <source src="/bg_video.webm" type="video/webm" />
//             <source src="/bg_video.ogv" type="video/ogg" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect, useState } from 'react';
import styles from '../styles/hero.module.css';

export function Hero() {
  const videoRef = useRef(null); // Reference to the video element
  const [showThumbnail, setShowThumbnail] = useState(false); // State to toggle thumbnail visibility
  const [playCount, setPlayCount] = useState(0); // State to track video play count

  useEffect(() => {
    const handleEnded = () => {
      if (videoRef.current) {
        if (playCount < 1) {
          setPlayCount(prev => prev + 1); // Increment play count
          videoRef.current.play(); // Replay video
        } else {
          setShowThumbnail(true); // Show thumbnail after 2 plays
        }
      }
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('ended', handleEnded); // Attach event listener
    }

    // Check for autoplay failure
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay failed:', error);
        setShowThumbnail(true); // Show thumbnail if autoplay fails
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded); // Clean up event listener
      }
    };
  }, [playCount]);

  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        {showThumbnail ? (
          <img
            src="/thumbnail.png"
            alt="Video Thumbnail"
            className={styles.thumbnail}
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            autoPlay
            muted
            playsInline
          >
            <source src="/bg_video.mp4" type="video/mp4" />
            <source src="/bg_video.webm" type="video/webm" />
            <source src="/bg_video.ogv" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}
