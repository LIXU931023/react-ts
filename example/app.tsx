import React from 'react';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Main from '@/components/main';
import Footer from '@/components/footer';
import logo from './name.jpg';

export default function App () {
  return (
    <div style={{ padding: 20, lineHeight: 3 }}>
      <Header />
      <Nav />
      <Main />
      <p style={{ margin: '0 auto', width: 100, height: 100 }}>
        <img src={logo} style={{ width: 100, height: 100 }} alt="" />
        <span>45454</span>
      </p>
      <Footer />
    </div>
  )
}