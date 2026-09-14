// import React, { use } from 'react';
// import { useState } from 'react';
// import AvailableTechStack from './AvailableTechStack';
// import type { TechType } from '../Types/TechType';

// const Technologies = ({ techDataPromise }: { techDataPromise: Promise<TechType[]> }) => {
//       const technologies = use(techDataPromise);
//       const [selectedStack, setSelectedStack] = useState<TechType[]>([]);
//       return (
//             <div className='container mx-auto'>
//             <div>
//                 <h2 className='mt-4 mb-1.5 font-extrabold text-4xl'>Explore the <span className='text-transparent bg-clip-text bg-linear-to-r  from-[#E22B66] to-[#8438E4]'>Technologies</span></h2>
//                 <p className='mb-6 text-[16px] text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
//             </div>
//                <AvailableTechStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} technologies={technologies}></AvailableTechStack>
//         </div>
//       );
// };

// export default Technologies;