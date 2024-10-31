// components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => (
  <footer className="border-t py-6 md:py-0">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        © 2024 DocsSite. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <a className="text-sm hover:underline underline-offset-4" href="#">
          Terms of Service
        </a>
        <a className="text-sm hover:underline underline-offset-4" href="#">
          Privacy
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
