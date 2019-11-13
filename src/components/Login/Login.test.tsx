import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

let component: any;
describe("Login component", () => {
  it("should render without errors", () => {
    component = shallow(<Login />);
    // expect(component.lenght).toBe(1);
  });
  it("should have a wrapper", () => {
    const wrapper = component.find(".login-wrapper");
    // expect(wrapper.lenght).toBe(1);
  });
});
