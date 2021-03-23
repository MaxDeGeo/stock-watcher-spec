import styled from 'styled-components';

const StockTickerWrapper = styled.div`
  width: 85vw;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95vw;
    height: 100vh;
    margin: 0 auto;
  }
`;

const StockTickerContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
`;

const StockTitle = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: #3E5769;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const StockTickerHeader = styled.div`
  margin-bottom: 40px;
`;

const StockTickerBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export {
  StockTickerWrapper,
  StockTickerContainer,
  StockTitle,
  StockTickerHeader,
  StockTickerBody,
}
