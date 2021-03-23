import React from 'react';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
  OptText,
  ErrorMessage,
} from './styled';

export default class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);

    this.searchText = React.createRef(); // Reference in order to easily get input value.
  }

  // Function that fires off on submit. Sends text to ticket renderer and clears input
  clicked = () => {
    this.props.submit(this.searchText.current.value.toUpperCase()); 
    this.searchText.current.value = "";
  }

  render() {
    return (
      <div>
        <SearchBarContainer>
          <SearchBarInput ref={this.searchText} placeholder="Enter stock symbol" />
          <SearchButton onClick={() => this.clicked()}>Add <OptText>Stock</OptText></SearchButton>
        </SearchBarContainer>
        <ErrorMessage>{this.props.message}</ErrorMessage>
      </div>
    )
  }
}