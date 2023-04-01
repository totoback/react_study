import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'


export default function Page({isDark,setIsDark}) {
  return (
    <div>
      <Header isDark={isDark}/>
      <Contents isDark={isDark}/>
      <Footer idDark={isDark} setIsDark={setIsDark}/>
    </div>
  )
}
