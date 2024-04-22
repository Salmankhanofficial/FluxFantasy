import React, { useState } from 'react';

interface CheckboxItem {
  id: number;
  label: string;
}

interface Props {
  className?: string;
  checkboxes: CheckboxItem[];
  onCheckboxChange: (id: number) => void;
}

const Faction: React.FC<Props> = ({ className, checkboxes, onCheckboxChange }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<number | null>(null);

  const handleCheckboxChange = (id: number) => {
    setSelectedCheckbox(id);
    onCheckboxChange(id);
  };

  return (
    <div className={` w-full flex flex-col bg-[#EDEDED]`} >
      <div className={`${className} w-full `}>
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className="flex gap-2 px-5 py-1">
            <input 
              type="checkbox" 
              id={`checkbox-${checkbox.id}`} 
              checked={selectedCheckbox === checkbox.id}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            <label htmlFor={`checkbox-${checkbox.id}`}>{checkbox.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faction;
