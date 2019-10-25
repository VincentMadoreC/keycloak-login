import React from "react";
import { shallow } from "enzyme";
import Logout from "../Logout";
import App from "../../App";

describe("Logout component test", () => {
  test("renders without crashing", () => {
    shallow(<Logout />);
  });
});
