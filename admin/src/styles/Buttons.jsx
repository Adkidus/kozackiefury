import styled from 'styled-components'
import * as color from './Colors';

export const ButtonOutline = styled.button`
  position: relative;
  cursor: pointer;
  transition: all 0.32s ease-in-out;
  border-radius: 4px;
  padding: 0 24px;
  line-height: 45px;
  font-size: 13px;
  letter-spacing: 1px;
  background: transparent;
  border: 1px solid ${color.gold};
  color: ${color.gold};
  display: flex;
  align-items: center;
  gap: .25rem;
  :hover{
      background: ${color.gold};
      color: ${color.white};
  }
`;

export const ButtonFill = styled.button`
  position: relative;
  cursor: pointer;
  transition: all 0.32s ease-in-out;
  border-radius: 4px;
  padding: 0 24px;
  line-height: 45px;
  font-size: 13px;
  letter-spacing: 1px;
  background: transparent;
  background: ${color.gold};
  color: ${color.white};
  display: flex;
  align-items: center;
  gap: .25rem;
  border: 0;
  :hover {
    background-color: ${color.gold};
    box-shadow: 0px 3px 7px rgba(163, 130, 58, 0.4);
    color: ${color.white};
    transform: translateY(-1px);
}
`;

export const Actions = styled.div`
    display: flex;
    justify-content: end;
    padding: 1rem;
    gap: 2rem;
    margin-top: 1.25rem;
`;

export const Action = styled.div`
  display: flex; 
  justify-content: end; 
  margin-top: 1rem;
`;