// components/Content.tsx
import React from 'react';
import Introduction from './pages/Introduction';
import Widgets from './pages/components/Widgets';
import Cards from './pages/components/Cards';
import CardsSection from './pages/components/Cards';

type ContentProps = {
  activeItem: string;
};

const Content: React.FC<ContentProps> = ({ activeItem }) => {
  let ContentComponent;

  switch (activeItem) {
    case 'Introduction':
      ContentComponent = <Introduction />;
      break;
    case 'Widgets':
    ContentComponent = <Widgets />;
      break;
    case 'Cards':
      ContentComponent = <CardsSection />;
      break;
    // case 'Data Fetching':
    //   ContentComponent = <DataFetching />;
    //   break;
    default:
      ContentComponent = <p>Content coming soon...</p>;
      break;
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{activeItem}</h1>
        <div className="mt-12 space-y-6">{ContentComponent}</div>
      </div>
    </main>
  );
};

export default Content;
