import Current from '@/components/message/Current'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
  return (
    <section className='w-full '>
      <Current />
    </section>
  )
}

export default Page