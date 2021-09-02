import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactContainer = styled.div`
  width: 850px;
  height: 50vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
    width: unset;
    align-items: center;
`;

export const OptionLink = styled.a`
  padding: 10px 15px;
  cursor: pointer;
`;