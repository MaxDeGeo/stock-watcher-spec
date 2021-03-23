import styled from 'styled-components';

const TicketContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 1px 6px -1px rgba(191,191,191,1);
  background-color: #fff;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 48%;
  }

  @media (max-width: 480px) {
    width: 100%;
    box-shadow: 0px 1px 6px -1px rgba(191,191,191,1);
    margin-bottom: 10px;
  }
`;

const TicketPosition = styled.div`
  display: flex;
  flex-direction: row;  
  width: calc(20% - 20px);
  height: calc(100% - 20px);
  padding: 10px 10px;
  background-image: ${props => props.gradient || "linear-gradient(#6AF531, #00A333)"};

  @media (max-width: 1100px) {
    width: calc(30% - 40px);
  }

  @media (max-width: 960px) {
    width: calc(40% - 40px);
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const TicketDescription = styled.div`
  width: calc(80% - 40px);
  padding: 14px 20px;

  @media (max-width: 1100px) {
    width: calc(70% - 40px);
  }

  @media (max-width: 960px) {
    width: calc(60% - 40px);
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const TicketTitle = styled.div`
  font-weight: 700;
  color: #3E5769;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    width: 60%;
    display: inline-block;
  }
`;

const StockName = styled.div`
  margin-top: 5px;
  color: #919AA0;
  font-size: .6em;
`;

const TicketHeader = styled.div`
  width: 100%;
`;

const CurrentChangeBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  @media (max-width: 630px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: col;
    display: inline-block;
    margin-top: 0px;
  }
`;

const CurrentPrice = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const ChangeSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 15px;
  font-size: .6em;

  @media (max-width: 630px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;

const ChangeIcon = styled.div`
  width: 6px;
  background-color: ${props => props.fill || "#000"};
  -webkit-mask: url(${props => props.src}) no-repeat center;
  mask: url(${props => props.src}) no-repeat center;
  transform: rotate(${props => props.rotation || "0deg"});
`;

const TicketFrame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TicketArrowContainer = styled.div`
  height: 100%;
`;

const ChangeText = styled.div`
  margin-top: 1px;
  margin-left: 3px;
  color: ${props => props.color || "#ff0000"};
`;

const DetailBody = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    display: none;
  }
`;

const DetailText = styled.div`
  margin-right: 10px;
  font-size: .5em;
  margin-bottom: 5px;
`;

const TicketArrow = styled.div`
  border-top: 5px solid transparent;
  border-left: 10px solid #fff;
  border-bottom: 5px solid transparent;
  position: relative;
`;

const TicketLine = styled.div`
  height 100%;
  min-width: 1px;
  background-image: ${props => props.gradient || "#ff0000"};
  margin: 0px 5px;
`;

const High = styled.div`
  font-size: .4em;
  color: #fff;
  position: relative;
`;

const Low = styled.div`
  font-size: .4em;
  color: #fff;
  position: relative;
`;

export {
  TicketContainer,
  TicketPosition,
  TicketDescription,
  TicketTitle,
  TicketHeader,
  StockName,
  CurrentChangeBody,
  CurrentPrice,
  ChangeIcon,
  ChangeText,
  DetailBody,
  DetailText,
  ChangeSection,
  TicketArrow,
  TicketLine,
  High,
  Low,
  TicketFrame,
  TicketArrowContainer,
}
