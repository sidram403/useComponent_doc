// components/ComponentViewer.tsx
import Image from "next/image";
import { useEffect, useState } from "react";

const Widgets: React.FC = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [batteryCharge, setBatteryCharge] = useState(0);
  const [isCharging, setIsCharging] = useState(true);
  const [showStorageStats, setShowStorageStats] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    // Animate water level on mount
    const waterTimer = setTimeout(() => setWaterLevel(33), 500);

    // Animate battery percentage
    const batteryTimer = setInterval(() => {
      setBatteryCharge((prev) => {
        if (prev >= 50) {
          setIsCharging(false);
          return 50;
        }
        return prev + 1;
      });
    }, 30);

    // Show storage stats with delay
    const statsTimer = setTimeout(() => setShowStorageStats(true), 800);

    return () => {
      clearTimeout(waterTimer);
      clearInterval(batteryTimer);
      clearTimeout(statsTimer);
    };
  }, []);

  const [barHeights, setBarHeights] = useState([
    0.4, 0.8, 0.6, 0.9, 0.5, 0.7, 0.3, 0.8, 0.6,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights((prev) =>
        prev.map((h) =>
          Math.max(0.3, Math.min(0.9, h + (Math.random() - 0.5) * 0.1))
        )
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tab: "preview" | "code") => {
    setActiveTab(tab);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cardDesigns[selectedCard].code);
    alert("Code copied to clipboard!");
  };

  const cardDesigns = [
    {
      title: "Avatar widgets",
      description:
        "This is a simple user card with a profile image, name, and description.",
      code: `
<div className="bg-gray-900 rounded-2xl p-4 sm:p-6 md:p-8 transform hover:scale-102 transition-all duration-300 max-w-xs mx-auto">
    <div className="flex flex-col items-center">
        <div className="relative">
            <Image
                src="https://xsgames.co/randomusers/avatar.php?g=male" 
                alt="Avatar" 
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 animate-fadeIn hover:rotate-6 transition-transform duration-300"
            />
            <div className="absolute bottom-4 sm:bottom-6 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse" />
        </div>
        <h3 className="text-white text-md sm:text-lg md:text-xl font-medium animate-slideUp">Avatar Aang</h3>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 animate-slideUp delay-100">The last air bender</p>
        <div className="flex space-x-4 sm:space-x-6">
        {['✕', '📊', '⚙️', '🏃'].map((icon, index) => (
            <span 
            key={index} 
            className="text-gray-400 cursor-pointer hover:text-white transition-all duration-300 hover:scale-125 animate-slideUp"
            style={{ animationDelay: \`\${index * 100 + 200}ms\` }}
            >
            {icon}
            </span>
        ))}
        </div>
    </div>
</div>
`,
      component: (
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 md:p-8 transform hover:scale-102 transition-all duration-300 max-w-xs mx-auto">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt="Avatar"
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 animate-fadeIn hover:rotate-6 transition-transform duration-300"
              />
              <div className="absolute bottom-4 sm:bottom-6 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse" />
            </div>
            <h3 className="text-white text-md sm:text-lg md:text-xl font-medium animate-slideUp">
              Avatar Aang
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-4 animate-slideUp delay-100">
              The last air bender
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {["✕", "📊", "⚙️", "🏃"].map((icon, index) => (
                <span
                  key={index}
                  className="text-gray-400 cursor-pointer hover:text-white transition-all duration-300 hover:scale-125 animate-slideUp"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Status Widgets",
      description:
        "This card includes more detailed information such as a title and action button.",
      code: `
<div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
  <div className="mb-4 sm:mb-6 animate-fadeIn">
    <span className="text-white text-sm sm:text-base lg:text-lg">Status: </span>
    <span className="text-green-500 animate-pulse text-sm sm:text-base lg:text-lg">Good</span>
  </div>
  <div className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-end space-x-1">
    {barHeights.map((height, index) => (
      <div 
        key={index} 
        className="flex-1 bg-green-500 rounded-t transition-all duration-1000 ease-in-out"
        style={{ 
          height: \`\${height * 100}%\`,
          animationDelay: \`\${index * 100}ms\`,
        }}
      />
    ))}
  </div>
  <div className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm lg:text-base">
    <div className="animate-slideUp">Overall Progress</div>
    <div className="animate-slideUp delay-100">
      <span className="text-white font-medium text-sm sm:text-base lg:text-lg">80%</span> (score, progress)
    </div>
  </div>
</div>


`,
      component: (
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
          <div className="mb-4 sm:mb-6 animate-fadeIn">
            <span className="text-white text-sm sm:text-base lg:text-lg">
              Status:{" "}
            </span>
            <span className="text-green-500 animate-pulse text-sm sm:text-base lg:text-lg">
              Good
            </span>
          </div>
          <div className="h-16 sm:h-20 md:h-24 lg:h-28 flex items-end space-x-1">
            {barHeights.map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-green-500 rounded-t transition-all duration-1000 ease-in-out"
                style={{
                  height: `${height * 100}%`,
                  animationDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>
          <div className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm lg:text-base">
            <div className="animate-slideUp">Overall Progress</div>
            <div className="animate-slideUp delay-100">
              <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                80%
              </span>{" "}
              (score, progress)
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Water Widgets",
      description:
        "This card includes more detailed information such as a title and action button.",
      code: `
//  water.tsx

<div className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
    <div className="relative z-10">
        <div className="flex items-center text-blue-400 mb-1 sm:mb-2 animate-slideUp">
        <span className="mr-1 sm:mr-2 animate-bounce text-lg sm:text-xl">💧</span>
        <span className="text-base sm:text-lg lg:text-xl">Water</span>
        </div>
        <div className="text-white text-2xl sm:text-3xl lg:text-4xl mb-1 animate-slideUp delay-100">1500ml</div>
        <div className="text-gray-400 text-xs sm:text-sm lg:text-base mb-2 sm:mb-4 animate-slideUp delay-200">Today</div>
        <button className="bg-blue-500 text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 animate-slideUp delay-300">
        +250 ml
        </button>
    </div>
    <div 
        className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out"
        style={{
        height: \`\${waterLevel}%\`,
        background: 'linear-gradient(180deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.4) 100%)',
        borderTopLeftRadius: '100px',
        borderTopRightRadius: '100px',
        transform: 'translateY(5%)',
        }}
    >
        <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-blue-400/20 animate-wave" />
    </div>
</div>

// css code

@keyframes wave {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

.animate-wave {
  animation: wave 3s infinite linear;
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
  
  
  `,
      component: (
        <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden group max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
          <div className="relative z-10">
            <div className="flex items-center text-blue-400 mb-1 sm:mb-2 animate-slideUp">
              <span className="mr-1 sm:mr-2 animate-bounce text-lg sm:text-xl">
                💧
              </span>
              <span className="text-base sm:text-lg lg:text-xl">Water</span>
            </div>
            <div className="text-white text-2xl sm:text-3xl lg:text-4xl mb-1 animate-slideUp delay-100">
              1500ml
            </div>
            <div className="text-gray-400 text-xs sm:text-sm lg:text-base mb-2 sm:mb-4 animate-slideUp delay-200">
              Today
            </div>
            <button className="bg-blue-500 text-white rounded-full px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 animate-slideUp delay-300">
              +250 ml
            </button>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out"
            style={{
              height: `${waterLevel}%`,
              background:
                "linear-gradient(180deg, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.4) 100%)",
              borderTopLeftRadius: "100px",
              borderTopRightRadius: "100px",
              transform: "translateY(5%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-blue-400/20 animate-wave" />
          </div>
        </div>
      ),
    },
    {
      title: "Weather Widgets",
      description:
        "This card includes more detailed information such as a title and action button.",
      code: `
//  weather.tsx

<div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
  <div className="text-gray-400 text-sm sm:text-base lg:text-lg mb-2 animate-slideUp">Tokyo</div>
  <div className="flex items-center mb-3 sm:mb-4">
    <span className="text-white text-3xl sm:text-4xl lg:text-5xl mr-2 animate-bounce">☁️</span>
    <span className="text-white text-3xl sm:text-4xl lg:text-5xl animate-slideUp delay-100">19°</span>
  </div>
  <div className="text-gray-400 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 animate-slideUp delay-200">Feels like 21°</div>
  <div className="flex justify-between text-gray-400 text-xs sm:text-sm lg:text-base animate-slideUp delay-300">
    <div>⏰ 24°</div>
    <div>🌙 9°</div>
  </div>
</div>

  `,
      component: (
        <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
          <div className="text-gray-400 text-sm sm:text-base lg:text-lg mb-2 animate-slideUp">
            Tokyo
          </div>
          <div className="flex items-center mb-3 sm:mb-4">
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl mr-2 animate-bounce">
              ☁️
            </span>
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl animate-slideUp delay-100">
              19°
            </span>
          </div>
          <div className="text-gray-400 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 animate-slideUp delay-200">
            Feels like 21°
          </div>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm lg:text-base animate-slideUp delay-300">
            <div>⏰ 24°</div>
            <div>🌙 9°</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Component Description */}
      <h2 className="text-2xl font-semibold">User Cards Component</h2>
      <p className="text-gray-600 mb-4">
        Select different card designs to preview and view their code.
      </p>

      {/* Card Selection */}
      <div className="flex space-x-4 mb-4">
        {cardDesigns.map((design, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              selectedCard === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCard(index)}
          >
            {design.title}
          </button>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "preview"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("preview")}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "code"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("code")}
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "preview" ? (
          // Preview Section
          <div className="grid gap-4">
            {cardDesigns[selectedCard].component}
          </div>
        ) : (
          // Code Section
          <div className="relative">
            <button
              className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md"
              onClick={handleCopyCode}
            >
              Copy
            </button>
            <pre className="p-4 bg-gray-100 rounded-md overflow-auto text-sm text-gray-700">
              {cardDesigns[selectedCard].code}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Widgets;
