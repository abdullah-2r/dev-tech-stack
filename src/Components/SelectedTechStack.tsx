import type { Dispatch, SetStateAction } from 'react';
import { Bounce, toast } from 'react-toastify';
import { TiDelete } from 'react-icons/ti';
import type { TechType } from '../Types/TechType';

interface SelectedTechStackProps {
  selectedStack: TechType[];
  setSelectedStack: Dispatch<SetStateAction<TechType[]>>;
}

const SelectedTechStack = ({ selectedStack, setSelectedStack }: SelectedTechStackProps) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all', {
      position: 'bottom-right',
      autoClose: 3000,
      theme: 'light',
      transition: Bounce,
    });
  };

  const handleRemoveTech = (tech: TechType) => {
    const restTech = selectedStack.filter((selectedTech) => selectedTech.name !== tech.name);
    setSelectedStack(restTech);
  };

  return (
    <div>
      <div className='flex flex-col mb-14'>
      <h2 className='font-bold text-2xl mb-2'>Your Stack</h2>
      <p>{selectedStack.length} Technology{selectedStack.length === 1 ? '' : ''} Selected</p>
       </div>
      {selectedStack.map((tech) => (
        <div key={tech.id} className='p-4 card card-xs shadow-sm mb-7 flex flex-row justify-between items-center'>
          <div className='flex gap-4 justify-between items-center '>
            <div className='w-8 rounded-full'>
              <img src={tech.icon} alt={tech.name} />
            </div>
            <div>
              <h2 className='card-title'>{tech.name}</h2>
              <p>{tech.category}</p>
            </div>
          </div>
          <div className='text-4xl text-red-500' onClick={() => handleRemoveTech(tech)}>
            <TiDelete />
          </div>
        </div>
      ))}

      <div className='w-full justify-centre'>
        <button className='btn' onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  );
};

export default SelectedTechStack;