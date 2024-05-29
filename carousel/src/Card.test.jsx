import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.jsx";
import TEST_IMAGES from "./_testCommon.js";

const { caption, src } = TEST_IMAGES[0];

it("renders without crashing", function () {
  render(<Card
    caption={caption}
    src={src}
    currNum={1}
    totalNum={1}
  />);
});


it("matches snapshot", function () {
  const { container, debug } = render(<Card
    caption={caption}
    src={src}
    currNum={1}
    totalNum={1}
  />);

  expect(container).toMatchSnapshot();
})