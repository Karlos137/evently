import React from "react";
import { shallow } from "enzyme";
import LogoHeader from "./index";

it("should render without crashing", () => {
  shallow(<LogoHeader />);
});

it("should render title text", () => {
  const wrapper = shallow(<LogoHeader />);
  const text = wrapper.dive("Text");
  const result = text.text();

  expect(result).toEqual("Webová aplikace pro vytváření událostí");
});
