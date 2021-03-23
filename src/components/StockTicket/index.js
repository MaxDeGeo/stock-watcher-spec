import React from 'react';
import { 
  TicketContainer, 
  TicketPosition, 
  TicketDescription,
  TicketTitle,
  StockName,
  CurrentChangeBody,
  ChangeSection,
  CurrentPrice,
  ChangeIcon,
  ChangeText,
  DetailBody,
  DetailText,
  TicketArrow,
  TicketLine,
  High,
  Low,
  TicketHeader,
  TicketFrame,
  TicketArrowContainer,
} from './styled';


export default class StockTicket extends React.Component {
  
  constructor(props) {
    super(props);

    this.arrow = React.createRef(); // Reference to the arrow indicator to point towards current value relative to high/low
  }


  // Returns the respective gradient for a ticket box based upon current vs open
  getTicketChangeColor = () => {
    if (this.getDifferenceNum() < 0) {
      return "linear-gradient(#EB5631, #901700)";
    }
    
    return "linear-gradient(#6AF531, #00A333)";
  }

  // Returns color for text and svg icon to represent change of current vs open
  getColor = () => {
    if (this.getDifferenceNum() < 0) {
      return "#BB0606";
    } else {
      return "#299E00";
    }
  }

  // Returns the arrow-down.svg for the change indicator
  getChangeIcon = () => {
    return "images/arrow-down.svg";
  }

  // Returns the difference between open and current
  getDifferenceNum = () => {
    return (this.props.current - this.props.open)
  }

  // Returns the difference between open and current in percent
  getDifferencePercent = () => {
    return ((this.getDifferenceNum() / this.props.open) * 100);
  }

  // Returns rotation of arrow based upon current/open change
  getRotation = () => {
    if (this.getDifferenceNum() > 0) {
      return "180deg";
    }

    return "0deg";
  }

  // Sets the location of the arrow indicator relative to the height of the bar in relation to the high
  setArrow = _ => {
    let overallDifference = this.props.high - this.props.low;
    let highDifference = this.props.high - this.props.current;
    let difference = highDifference / overallDifference * 100;

    let location = `calc(${difference}% - 5px)`; // Remove 5px based on size of arrow to correct offset
    this.arrow.current.style.top = location;
  }

  // Sets the arrow location on mount of component
  componentDidMount() {
    this.setArrow();
  }
  
  render() {
    return (
      <TicketContainer>
        <TicketPosition gradient={() => this.getTicketChangeColor()}>
          <TicketArrowContainer>
            <TicketArrow ref={this.arrow}/>
          </TicketArrowContainer>
          <TicketLine gradient="linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, .2))"></TicketLine>
          <TicketFrame>
            <High>{this.props.high}</High>
            <Low>{this.props.low}</Low>
          </TicketFrame>
        </TicketPosition>
        <TicketDescription>
          {/* <TicketTitle>{this.props.title}</TicketTitle> */}
          <TicketHeader>
            <TicketTitle>{this.props.name}</TicketTitle>
            <StockName>{this.props.symbol}</StockName>
          </TicketHeader>
          <CurrentChangeBody>
            <CurrentPrice>{this.props.current}</CurrentPrice>
            <ChangeSection>
              <ChangeIcon rotation={this.getRotation()} fill={this.getColor()} src={this.getChangeIcon()} />
              <ChangeText color={this.getColor()}>{this.getDifferenceNum().toFixed(2)} ({this.getDifferencePercent().toFixed(2)}%)</ChangeText>
            </ChangeSection>
          </CurrentChangeBody>
          <DetailBody>
            <DetailText>OPEN <span>{this.props.open}</span></DetailText>
            <DetailText>HIGH <span>{this.props.high}</span></DetailText>
            <DetailText>LOW <span>{this.props.low}</span></DetailText>
          </DetailBody>
        </TicketDescription>
      </TicketContainer>
    )
  };
}