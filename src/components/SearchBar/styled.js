import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 32%;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  @media (max-width: 768px) {
    width: 67%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const SearchBarInput = styled.input`
  width: calc(68.5% - 20px);
  border: 1px solid #ECECEC;
  color: #666E8A;
  background-color: #fafafa;
  padding 0px 10px;
  border-radius: 1px;
`;

const SearchButton = styled.div`
  width: calc(30% - 20px);
  padding: 20px 10px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background-color: #284CC9;
  border-radius: 1px;
  box-shadow: 0px 3px 6px -1px rgba(191,191,191,1);
  transition: .5s;
  text-align: center;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    transition: .5s;
  }
`;

const OptText = styled.span`

  @media (max-width: 480px) {
    display: none;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: .9em;
  color: #BB0606;
`;

export {
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
  OptText,
  ErrorMessage,
};
