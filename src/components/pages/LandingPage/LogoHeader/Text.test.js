import React from "react";
import Text from "./Text";
import { shallow } from "enzyme";
import "jest-styled-components";

it("should apply correct style", () => {
  const text = shallow(<Text grey />);
  expect(text).toHaveStyleRule("color", "#7D7D7D");
});
