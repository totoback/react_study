import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'

export default function Page() {
  return (
    <div className='page'>
      <Header/>
      <Contents/>
      <Footer/>
    </div>
  )
}
