// import React, { useState, useEffect } from 'react';


// const ReverseCountdown = ({ endDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date(endDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const addLeadingZero = value => {
//     return value < 10 ? `0${value}` : value;
//   };

//   return (
//     <div className="countdown-container">
//       <div className="countdown">
//         <div className="countdown-item">
//           <span>{addLeadingZero(timeLeft.days)}</span>
//           <span>Days</span>
//         </div>
//         <div className="countdown-item">
//           <span>{addLeadingZero(timeLeft.hours)}</span>
//           <span>Hours</span>
//         </div>
//         <div className="countdown-item">
//           <span>{addLeadingZero(timeLeft.minutes)}</span>
//           <span>Minutes</span>
//         </div>
//         <div className="countdown-item">
//           <span>{addLeadingZero(timeLeft.seconds)}</span>
//           <span>Seconds</span>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default ReverseCountdown;

// import React, { useState, useEffect } from 'react';

// function CountdownTimer() {
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-05-10") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
        
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <div className="time">
//       {timerComponents.length ? timerComponents : <span>Time's up!</span>}

//       </div>
//     </div>
//   );
// }

// export default CountdownTimer;



import React, { useState, useEffect } from 'react';
import "./Countdown.css"
const CountdownOffer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown-offer">
      <h2>Countdown Offer</h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownOffer;
