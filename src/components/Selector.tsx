import React from 'react';

interface Props {
  selectedPage: string;
  onPageChange: (page: string) => void;
}

interface childrenProps {
  pageName: string;
}

function Selector({ selectedPage, onPageChange }: Props) {
  function SelectorChildren({ pageName }: childrenProps) {
    return (
      <div className='flex items-center group'>
        <div
          className={`transition-all ease-in-out duration-500  h-0.5 mr-1 ${
            selectedPage === pageName
              ? 'w-8 bg-accent'
              : 'w-4 bg-secondary group-hover:bg-accent group-hover:w-8'
          }`}
        ></div>
        <h2
          className={`m-2 transition-all ease-in-out duration-500 ${
            selectedPage === pageName
              ? 'text-accent'
              : 'text-secondary group-hover:text-accent'
          }`}
          onClick={() => onPageChange(pageName)}
        >
          {pageName}
        </h2>
      </div>
    );
  }

  return (
    <div className='w-40 h-32 text-lg m-4 text-secondary'>
      <SelectorChildren pageName='About' />
      <SelectorChildren pageName='Projects' />
      <SelectorChildren pageName='Contact' />
    </div>
  );
}

export default Selector;
