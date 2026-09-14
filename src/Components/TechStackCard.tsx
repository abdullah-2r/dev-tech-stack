import { useState, type Dispatch, type SetStateAction } from 'react';
import { FaStar } from "react-icons/fa";
import type { TechType } from '../Types/TechType';
import { Bounce, toast } from 'react-toastify';

interface TechStackCardProps {
    tech: TechType;
    selectedStack: TechType[];
    setSelectedStack: Dispatch<SetStateAction<TechType[]>>;
}

const TechStackCard = ({ tech, setSelectedStack }: TechStackCardProps) => {
      const [isSelected, setIsSelected] = useState<boolean>(false);

      const handleSelectTech = () => {
            if (isSelected) return;

            setIsSelected(true);
            setSelectedStack((prev) => [...prev, tech]);
            toast.success(`${tech.name} Added successfully!`, {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
            });
      };
     
    return (
     

        <div>
            <div className="card bg-base-100 w-96 shadow-sm border-1 border-gray-200">
                <figure className='flex justify-between items-center px-5'>
                    <img className='w-12 h-24'
                        src={tech.icon}
                        alt="" />
                    <span className='bg-pink-100 text-pink-600 py-1 px-3 rounded-[16px]'>{tech.badge}</span>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tech.name}</h2>
                    <p>{tech.description}</p>
                    <div className='flex justify-between items-center'>
                        <span className="badge text-[#475569] bg-gray-200">{tech.category}</span>
                        <span className=" text-[#475569]" >{tech.difficulty}</span>


                        <span className="badge"> <span className='text-yellow-300'><FaStar />
</span>{tech.rating}</span>
                    </div>
                        
                        <button
                            onClick={handleSelectTech}
                            className="btn rounded-[12px] text-white bg-linear-to-r from-[#cb32d9] to-[#8438E4] card-actions justify-centre items-center text-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSelected ? "Successfully Added" : "Add to Stack"}
                            
                               

                        </button>
                  
                    
                </div>
            </div>
        </div>
      );
};

export default TechStackCard;