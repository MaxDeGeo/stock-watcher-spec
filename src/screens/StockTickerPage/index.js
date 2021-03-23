import React from 'react';
import SearchBar from '../../components/SearchBar/index';
import { StockTickerWrapper, StockTickerContainer, StockTitle, StockTickerHeader, StockTickerBody} from './styled';
import StockTicket from '../../components/StockTicket/index';

// Demo API for testing purposes. These are the stock symbols to use.
const demoAPI = [
  {
    name: "ALPHABET INC. CL C",
    symbol: "GOOG",
    currentPrice: 706.32,
    open: 691,
    high: 709.28,
    low: 689.47,
  },
  {
    name: "YAHOO! INC",
    symbol: "YHOO",
    currentPrice: 29.27,
    open: 29.28,
    high: 29.66,
    low: 29.06,
  },
  {
    name: "AMERICAN INTERNATIONAL",
    symbol: "AIG",
    currentPrice: 53.08,
    open: 52.06,
    high: 53.47,
    low: 52.28,
  },
  {
    name: "VELOCITYSHARES 3X LONG CRUDE ETN",
    symbol: "UWTIF",
    currentPrice: 1.61,
    open: 1.37,
    high: 1.74,
    low: 1.50,
  },
  {
    name: "3X INVERSE CRUDE",
    symbol: "DWTIF",
    currentPrice: 253.41,
    open: 307.10,
    high: 297.50,
    low: 245.59,
  },
  {
    name: "GROUPON INC",
    symbol: "GRPN",
    currentPrice: 3.74,
    open: 4.08,
    high: 4.13,
    low: 3.60,
  }
];

export default class StockTickerPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stockTickets: [], // Stock tickets that have been added
      errorMessage: '', // Error message to display
    }
  } 

  // Returns true if a ticket has been added to the screen already, and sets appropriate error message.
  ticketAlreadyExists = (symbol) => {
    for (let i = 0; i < this.state.stockTickets.length; i++) {
      if (this.state.stockTickets[i].symbol === symbol) {
        this.setMessage('Sorry, but that stock ticket has already been added.');
        return true;
      }
    }

    this.setMessage(null);
    return false;
  }

  // Returns true if a symbol exists in the api call/demoAPI, and sets appropriate error message if it doesn't.
  symbolExists = (symbol) => {
    for (let i = 0; i < demoAPI.length; i++) {
      if (demoAPI[i].symbol === symbol) {
        this.setMessage(null);
        return true;
      }
    }

    this.setMessage('Sorry, but that stock symbol doesn\'t exist.');
    return false;
  }

  // Populates screen with tickets
  loadStockTickets = () => {
    if (this.state.stockTickets.length > 0) {
      return this.state.stockTickets.map((ticket, i) => {
        return (
          <StockTicket key={i} name={ticket.name} symbol={ticket.symbol} current={ticket.currentPrice} open={ticket.open} high={ticket.high} low={ticket.low} />
        )
      })
    }

    return null;
  }

  // Get the ticket information from the demoAPI
  getTicket = (symbol) => {
    for (let i = 0; i < demoAPI.length; i++) {
      if (demoAPI[i].symbol === symbol) {
        return demoAPI[i];
      }
    }
  }

  // Actions to fire when the user submits the stock symbol
  submitSymbol = (symbol) => {
    if (this.ticketAlreadyExists(symbol)) { // Check if already added
      return;
    }

    if (!this.symbolExists(symbol)) { // Check if it exists
      return;
    }

    // Sets new ticket value
    let ticket = this.getTicket(symbol);

    // Adds new ticket to list
    let newList = this.state.stockTickets;
    newList.push(ticket);

    this.setState({
      stockTickets: newList,
    });
  }

  // Sets the error message
  setMessage = message => {
    this.setState({
      errorMessage: message,
    })
  }

  render() {
    return (
      <StockTickerWrapper>
        <StockTickerContainer>
          <StockTickerHeader>
            <StockTitle>Stock Watcher</StockTitle>
            <SearchBar submit={this.submitSymbol} message={this.state.errorMessage}/>
          </StockTickerHeader>
          <StockTickerBody>
            {this.loadStockTickets()}
          </StockTickerBody>
        </StockTickerContainer>

      </StockTickerWrapper>
    )
  }
};
