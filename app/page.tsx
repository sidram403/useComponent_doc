"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { ChevronRight, Code, Box, RefreshCw, Github, Zap, Palette, Users , ArrowRight} from "lucide-react";import Link from "next/link";
;

const sidebarItems = [
  { title: "Getting Started", items: ["Introduction"] },
  { title: "Components", items: ["Cards", "Widgets", "Rendering", "Caching"] },
  {
    title: "Advanced Guides",
    items: ["Authentication", "Deployment", "Testing", "Error Handling"],
  },
  {
    title: "API Reference",
    items: ["CLI Commands", "Configuration", "Hooks", "Components"],
  },
];

const DocsSite: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Introduction");
  const [isShowComponents,setIsShowComponents] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const features = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Ready-to-Use Components",
      description: "Copy, paste, and customize components built with React and Tailwind CSS",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Performance Optimized",
      description: "Lightweight and efficient components to keep your app fast and responsive",
    },
    {
      icon: <Palette className="w-6 h-6 text-blue-500" />,
      title: "Customizable Themes",
      description: "Easily adapt components to match your brand's look and feel",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Community Driven",
      description: "Benefit from contributions and improvements from a vibrant developer community",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
      title: "Regular Updates",
      description: "New components and features added regularly to expand your toolkit",
    },
    {
      icon: <Box className="w-6 h-6 text-blue-500" />,
      title: "Interactive Previews",
      description: "Test and interact with components before adding them to your project",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMobileMenu={toggleMobileMenu} />
     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Hero Section */}
          <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 mt-4">
          Made with React + Tailwind CSS
        </span>
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">useComponents</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your go-to collection of production-ready React components. Copy, paste, and
          transform your ideas into reality.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
         <Link href={'/doc'}>
          <button  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Explore Components
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          </Link>
          <button className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors">
            <Github className="mr-2 w-4 h-4" />
            Star on GitHub
          </button>
        </div>
            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose useComponents?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-8 border-t">
            <div className="text-center text-gray-600">
              <p>Built with ❤️ for the React community</p>
            </div>
          </footer>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default DocsSite;
