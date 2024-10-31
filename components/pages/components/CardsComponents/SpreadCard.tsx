"use client"

import { useState } from "react"

export default function SpreadCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const cards = [
    {
      title: "About John",
      content: (
        <div className="space-y-2">
          <p>Has worked with ABC for the last 10 years</p>
          <p>Developed over 2 dozen web apps</p>
          <p>His latest work is live on stores</p>
          <p>A cool guy</p>
        </div>
      ),
      bgColor: "bg-yellow-100",
    },
    {
      title: "Shopping list",
      content: (
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Milk</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span>Eggs</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span>Ground Pepper</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Spaghetti</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Butter</span>
          </label>
        </div>
      ),
      bgColor: "bg-white",
    },
    {
      title: "Kitchen Remodel Ideas",
      content: (
        <div className="space-y-2">
          <p>Install a farmhouse sink for a rustic touch</p>
          <p>Use classic subway tiles</p>
          <p>Add an island for extra counter space</p>
          <p>Opt for open shelving</p>
        </div>
      ),
      bgColor: "bg-yellow-100",
    },
    {
      title: "Reminders",
      content: (
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Book museum tickets</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span>Buy groceries</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Call mom</span>
          </label>
        </div>
      ),
      bgColor: "bg-white",
    },
  ]

  return (
    <div className="min-h-screen bg-black/90 p-4 flex items-center justify-center overflow-auto w-full">
      <div
        className="relative"
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => !isExpanded && setIsHovered(false)}
      >
        <div
          className={`flex flex-col md:flex-row ${isExpanded ? "gap-6" : isHovered ? "-space-x-60 translate-x-32" : "space-x-0"} transition-all duration-500 ease-in-out`}
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`w-full md:w-80 rounded-3xl p-6 shadow-lg cursor-pointer transition-all duration-500 ${card.bgColor} ${
                !isExpanded && !isHovered && index !== cards.length - 1 ? "hidden" : ""
              }`}
              style={{
                transform: isHovered && !isExpanded ? `rotate(${index * 5}deg)` : "",
              }}
              onClick={() => setIsExpanded(true)}
            >
              <h2 className="text-xl font-bold mb-4">{card.title}</h2>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
