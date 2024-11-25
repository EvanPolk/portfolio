import { ReactNode } from 'react';

interface Props {
  pageName: string;
  selectedPage: string;
  onPageChange: (select: string) => void;
}

function SelectorChildren({ pageName, selectedPage, onPageChange }: Props) {
  return (
    <div
      className='h-16 w-52 flex items-center hover:cursor-pointer group'
      onClick={() => onPageChange(pageName)}
    >
      <div
        className={`h-2 m-4 transition-all duration-200 ${
          pageName === selectedPage
            ? 'bg-accent w-20'
            : 'w-8 bg-secondary group-hover:bg-accent group-hover:w-20'
        }`}
      ></div>
      <h2
        className={`transition-all text-xl ${
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
