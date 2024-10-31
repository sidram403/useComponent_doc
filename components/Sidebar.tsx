// components/Sidebar.tsx
import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {  X } from 'lucide-react'

type SidebarProps = {
  sidebarItems: { title: string; items: string[] }[];
  activeItem: string;
  setActiveItem: (item: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};


const Sidebar: React.FC<SidebarProps> = ({ sidebarItems, activeItem, setActiveItem, isMobileMenuOpen, toggleMobileMenu }) => (
  <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block ${isMobileMenuOpen ? 'block' : ''}`}>
    <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
      <div className="flex justify-between md:hidden">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-4">
        {sidebarItems.map((section) => (
          <div key={section.title} className="py-1">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">{section.title}</h2>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Button
                  key={item}
                  variant={activeItem === item ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveItem(item);
                    toggleMobileMenu();
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </aside>
);

export default Sidebar;
