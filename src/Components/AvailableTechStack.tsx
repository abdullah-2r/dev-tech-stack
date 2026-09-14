import type { Dispatch, SetStateAction } from 'react';
import type { TechType } from '../Types/TechType';
import TechStackCard from './TechStackCard';
import SelectedTechStack from './SelectedTechStack';

interface AvailableTechStackProps {
      technologies: TechType[];
      selectedStack: TechType[];
      setSelectedStack: Dispatch<SetStateAction<TechType[]>>;
}

const AvailableTechStack = ({ technologies, selectedStack, setSelectedStack }: AvailableTechStackProps) => {
      return (
             <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 '>
            {technologies.map((tech: TechType)=> {
                return (
            <TechStackCard 
            key={tech.id} 
            tech={tech} 
            selectedStack={selectedStack} 
            setSelectedStack={setSelectedStack}
            />
        );
    })}
</div>
    <div className="w-full md:w-80 shrink-0 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                            <SelectedTechStack selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
                    </div>
</div>
      );
};

export default AvailableTechStack;