import React, { useState } from 'react';
import { Header } from '@components/Header';
import { Services } from '@components/Services';
import './styles.scss';

export const Layout = ({ children }) => {
  const [parentScrollTop, setParentScrollTop] = useState(0);
  const handleScroll = ({ target: { scrollTop} }) => setParentScrollTop(scrollTop);
  return (
    <main className='layout'>
      <div className='container' onScroll={handleScroll}>
        <Header />
        <Services parentScrollTop={parentScrollTop} />
        <section className='content'>
          {children}
        </section>
      </div>
    </main>
  );
}