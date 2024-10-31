"use client"

import Content from '@/components/Content'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

const page = () => {
    const [activeItem, setActiveItem] = useState("Introduction");
    const [isShowComponents,setIsShowComponents] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMobileMenu={toggleMobileMenu} />
    
     <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar
          sidebarItems={sidebarItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Content activeItem={activeItem} />
      </div>
      <Footer />

      </div>  
  )
}

export default page
