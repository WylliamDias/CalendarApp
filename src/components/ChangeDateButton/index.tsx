import React from 'react';

import { ButtonContainer } from './styles';

interface IChangeDateButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ChangeDateButton: React.FC<IChangeDateButtonProps> = ({ handleClick, children }) => {

  return (
    <ButtonContainer>

      <button onClick={handleClick}>
        {children}
      </button>

    </ButtonContainer>
  );

};

export default ChangeDateButton;
