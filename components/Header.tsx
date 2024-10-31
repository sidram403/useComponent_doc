import React from 'react' 
import { Book, Github, Menu, Search } from 'lucide-react' 
import { Button } from "@/components/ui/button" 
import { Input } from "@/components/ui/input" 
 
type HeaderProps = { 
  toggleMobileMenu: () => void; 
}; 
 
const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => { 
  return ( 
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> 
      <div className="container flex h-14 items-center"> 
        <div className="mr-4 hidden md:flex"> 
          <a className="mr-6 flex items-center space-x-2" href="#"> 
            <Book className="h-6 w-6" /> 
            <span className="hidden font-bold sm:inline-block">useComponents</span> 
          </a> 
          <nav className="flex items-center space-x-6 text-sm font-medium"> 
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Documentation</a> 
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">Guides</a> 
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">API</a> 
          </nav> 
        </div> 
        <Button variant="outline" size="icon" className="mr-2 px-0 md:hidden" onClick={toggleMobileMenu}> 
          <Menu className="h-5 w-5" /> 
          <span className="sr-only">Toggle Menu</span> 
        </Button> 
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end"> 
          <div className="w-full flex-1 md:w-auto md:flex-none"> 
            <div className="relative"> 
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> 
              <Input 
                type="search" 
                placeholder="Search documentation..." 
                className="pl-8 md:w-[300px] lg:w-[400px]" 
              /> 
            </div> 
          </div> 
          <nav className="flex items-center"> 
            <Button variant="ghost" size="icon"> 
              <Github className="h-4 w-4" /> 
            </Button> 
          </nav> 
        </div> 
      </div> 
    </header> 
  ); 
}; 
 
export default Header;
