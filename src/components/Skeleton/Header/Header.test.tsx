import React from "react";
import { shallow } from "enzyme";
import { Header } from "components";

let header: any;
describe("Header component", () => {
  it("should render without errors", () => {
    header = shallow(<Header header={() => <div>Login</div>} />);
    expect(header.length).toBe(1);
  });

  it("should have a wrapper", () => {
    const wrapper = header.find("header-container");
    expect(wrapper.length).toBe(1);
  });
});
