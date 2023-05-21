
'use client';
import type { IMembership } from '../configs/memberships.config'
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function MembershipCard({ membership }: { membership: IMembership }) {
  return (
    <div className='w-full max-w-sm bg-base-100 p-4 border-black border-2 grid text-black rounded-2xl mx-auto shadow-lg dark:shadow-none'>
      <h5 className='font-light text-2xl'> {membership.name} plan</h5>
      <h3 className='text-3xl font-bold' > ${membership.pricePerMember} <span className='text-lg'> /month </span> </h3>
      <small className='text-black font-light mt-2 mb-4'>{membership.desc}</small>
      <ul className='grid gap-2 h-max'>
        {membership.benefits.map((benefit, index) => (
          <li key={index + benefit} className={`${benefit === 'VOID' ? 'invisible' : 'visible'} flex gap-1 items-center`}>
            <BsFillCheckCircleFill className='text-green-600' />{benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}
