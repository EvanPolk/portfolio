import { ReactNode } from 'react';

interface Props {
  pageName: string;
  selectedPage: string;
  onPageChange: (select: string) => void;
}

function SelectorChildren({ pageName, selectedPage, onPageChange }: Props) {
  return (
    <div
      className='flex items-center group'
      onClick={() => onPageChange(pageName)}
    >
      <div
        className={`h-0.5 w-8 transition-all duration-300 transform ${
          pageName === selectedPage ? 'bg-accent' : 'scale-x-50 bg-secondary'
        }`}
      ></div>
      <h2
        className={`transition-all ${
          pageName === selectedPage
            ? 'text-accent'
            : 'text-secondary group-hover:text-accent'
        }`}
      >
        {pageName}
      </h2>
    </div>
  );
}

export default SelectorChildren;
