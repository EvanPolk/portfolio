import { ReactNode } from 'react';

interface Props {
  pageName: string;
  selectedPage: string;
  onPageChange: (select: string) => void;
}

function SelectorChildren({ pageName, selectedPage, onPageChange }: Props) {
  return (
    <div
      className='flex items-center hover:cursor-pointer group'
      onClick={() => onPageChange(pageName)}
    >
      <div
        className={`h-4 m-16 transition-all duration-200 ${
          pageName === selectedPage
            ? 'bg-accent w-32'
            : 'w-16 bg-secondary group-hover:bg-accent group-hover:w-32'
        }`}
      ></div>
      <h2
        className={`transition-all text-3xl ${
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
