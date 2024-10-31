// components/ComponentViewer.tsx
import { useState } from 'react';
import SpreadCard from './CardsComponents/SpreadCard';
import TestimonialScroll from './CardsComponents/TestimonailsCard';

const CardsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [selectedCard, setSelectedCard] = useState(0);

  const handleTabClick = (tab: 'preview' | 'code') => {
    setActiveTab(tab);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cardDesigns[selectedCard].code);
    alert("Code copied to clipboard!");
  };

  const cardDesigns = [
    {
      title: "Standard Card",
      description: "This is a simple user card with a profile image, name, and description.",
      code: `<div className="p-4 border rounded-md shadow-md">
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
    <div>
      <p className="font-bold">John Doe</p>
      <p className="text-sm text-gray-500">@johndoe</p>
    </div>
  </div>
  <p className="mt-2 text-gray-700">
    I love this component. It's simple and effective.
  </p>
</div>`,
      component: (
        <div className="p-4 border rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-gray-500">@johndoe</p>
            </div>
          </div>
          <p className="mt-2 text-gray-700">
            I love this component. It's simple and effective.
          </p>
        </div>
      ),
    },
    {
      title: "Detailed Card",
      description: "This card includes more detailed information such as a title and action button.",
      code: `<div className="p-4 border rounded-md shadow-md bg-white">
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
    <div>
      <p className="font-bold">Alice</p>
      <p className="text-sm text-gray-500">@alice</p>
    </div>
  </div>
  <p className="mt-2 text-gray-700">Exploring new ideas with creativity.</p>
  <button className="mt-3 px-4 py-1 text-white bg-blue-500 rounded-md">Follow</button>
</div>`,
      component: (
        <div className="p-4 border rounded-md shadow-md bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            <div>
              <p className="font-bold">Alice</p>
              <p className="text-sm text-gray-500">@alice</p>
            </div>
          </div>
          <p className="mt-2 text-gray-700">Exploring new ideas with creativity.</p>
          <button className="mt-3 px-4 py-1 text-white bg-blue-500 rounded-md">Follow</button>
        </div>
      ),
    },

    {
        title: "Spread Card",
        description: "This card includes more detailed information such as a title and action button.",
        code: `<div className="p-4 border rounded-md shadow-md bg-white">
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
      <div>
        <p className="font-bold">Alice</p>
        <p className="text-sm text-gray-500">@alice</p>
      </div>
    </div>
    <p className="mt-2 text-gray-700">Exploring new ideas with creativity.</p>
    <button className="mt-3 px-4 py-1 text-white bg-blue-500 rounded-md">Follow</button>
  </div>`,
        component: (
          <SpreadCard />
        ),
      },
      {
        title: "Testimonail Cards",
        description: "This card includes more detailed information such as a title and action button.",
        code: `${<TestimonialScroll/>}`,
        component: (
          <TestimonialScroll />
        ),
      },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Component Description */}
      <h2 className="text-2xl font-semibold">User Cards Component</h2>
      <p className="text-gray-600 mb-4">Select different card designs to preview and view their code.</p>
      
      {/* Card Selection */}
      <div className="flex space-x-4 mb-4">
        {cardDesigns.map((design, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${selectedCard === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
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
            activeTab === 'preview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('preview')}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'code' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('code')}
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'preview' ? (
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

export default CardsSection;
