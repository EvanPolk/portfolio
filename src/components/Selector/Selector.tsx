import React from 'react';
import SelectorChild from './SelectorChild';

interface Props {
  selectedPage: string;
  onPageChange: (page: string) => void;
}

function Selector({ selectedPage, onPageChange }: Props) {
  return (
    <div className='h-[50%] text-lg m-4 text-secondary'>
      <SelectorChild
        pageName='About'
        selectedPage={selectedPage}
        onPageChange={onPageChange}
      />
      <SelectorChild
        pageName='Projects'
        selectedPage={selectedPage}
        onPageChange={onPageChange}
      />
      <SelectorChild
        pageName='Contact'
        selectedPage={selectedPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Selector;
