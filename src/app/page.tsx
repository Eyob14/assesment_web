'use client'

import React from 'react'
import AppBar from '@/component/appBar';
import ApiTwoSection from '@/component/apiTowSection';

export default function Home() {
  return (
    <main className="py-10">
      <div className="px-96">
        <AppBar />
      </div>
      <div className='w-full border-b py-2'></div>
      <div className='w-full h-48 border-b py-2 flex justify-center items-center'>
        Carausel
      </div>
      {/** API-2 */}
      <div className="px-96 py-8">
        <ApiTwoSection />
      </div>

      {/** API-3 */}
      <div className="px-96 py-8">
        {/* <ApiTwoSection /> */}
      </div>

    </main>
  );
}
