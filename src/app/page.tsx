'use client'

import Home from '@/pages/Home'
import Head from 'next/head'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home |Greater Tech Hub</title>
        <meta name="description" content="Welcome to our website. Explore our services and offerings to find the best solutions for your needs." />
      </Head>
      <div className='mt-20'>
        <Home />
      </div>
    </>
  )
}

export default HomePage
