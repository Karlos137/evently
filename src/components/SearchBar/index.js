import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import StyledInputField from "./StyledInputField";
import SearchIcon from "./SearchIcon";

const SearchBar = props => {
  return (
    <Wrapper>
      <SearchIcon />
      <StyledInputField placeholder={props.placeholder} />
    </Wrapper>
  );
};

export default SearchBar;
