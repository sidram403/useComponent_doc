import React, { useState } from 'react';

const TestimonialScroll = () => {
  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);

  const testimonials = [
    {
      name: 'Jack',
      username: '@jack',
      text: "I've never seen anything like this before. It's amazing.",
      avatarGradient: ['#4ade80', '#2563eb'],
    },
    {
      name: 'Jill',
      username: '@jill',
      text: "I'm speechless. This is absolutely amazing.",
      avatarGradient: ['#a855f7', '#ec4899'],
    },
    {
      name: 'James',
      username: '@james',
      text: "This is incredible. I absolutely love it.",
      avatarGradient: ['#22c55e', '#3b82f6'],
    },
    {
      name: 'Jane',
      username: '@jane',
      text: "Simply outstanding. Exceeded expectations.",
      avatarGradient: ['#f472b6', '#fb923c'],
    },
    {
      name: 'Mike',
      username: '@mike',
      text: "Brilliant work. Exactly what we needed.",
      avatarGradient: ['#6366f1', '#14b8a6'],
    },
    {
      name: 'Sarah',
      username: '@sarah',
      text: "Perfect solution. Very impressive.",
      avatarGradient: ['#f43f5e', '#fb923c'],
    }
  ];

  const doubledTestimonials = [...testimonials, ...testimonials];
  const secondRowTestimonials = [...doubledTestimonials].reverse();

  const TestimonialCard = ({ testimonial }:any) => (
    <div className="w-[280px] h-[130px] bg-white rounded-lg p-4 shadow-md mx-3 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-3 mb-2 ">
        <div className="relative w-10 h-10 transform transition-transform duration-300 hover:rotate-12">
          <div
            className="absolute inset-0 rounded-full animate-gradient"
            style={{
              background: `linear-gradient(135deg, ${testimonial.avatarGradient[0]}, ${testimonial.avatarGradient[1]})`,
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-sm">{testimonial.name}</span>
          <span className="text-gray-500 text-xs">{testimonial.username}</span>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-snug w-[220px]">{testimonial.text}</p>
    </div>
  );

  return (
    <div className="w-full overflow-hidden py-6 bg-gray-50">
      {/* First Row */}
      <div 
        className="relative mb-6 hover:scale-[0.98] transition-transform duration-500"
        onMouseEnter={() => setPauseRow1(true)}
        onMouseLeave={() => setPauseRow1(false)}
      >
        <div 
          className="flex "
          style={{
            animation: `scroll 25s linear infinite`,
            animationPlayState: pauseRow1 ? 'paused' : 'running',
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div 
        className="relative hover:scale-[0.98] transition-transform duration-500"
        onMouseEnter={() => setPauseRow2(true)}
        onMouseLeave={() => setPauseRow2(false)}
      >
        <div 
          className="flex"
          style={{
            animation: `scroll-reverse 20s linear infinite`,
            animationPlayState: pauseRow2 ? 'paused' : 'running',
          }}
        >
          {secondRowTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialScroll;

// Add this to your CSS or in a style tag
const styles = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes gradient-shift {
  0% {
    filter: hue-rotate(0deg) saturate(1);
  }
  50% {
    filter: hue-rotate(15deg) saturate(1.2);
  }
  100% {
    filter: hue-rotate(0deg) saturate(1);
  }
}

.animate-gradient {
  animation: gradient-shift 3s ease-in-out infinite;
}

/* Smooth transition for all animations */
.flex {
  transition: all 0.3s ease;
}

/* Add more dynamic hover effect */
.hover\\:scale-105:hover {
  transform: scale(1.05);
  z-index: 10;
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);