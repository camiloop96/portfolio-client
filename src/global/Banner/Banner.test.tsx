/**
 * @file Banner.test.tsx
 * @description Test suite for the Banner component.
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";

/**
 * Test suite for the Banner component.
 */
describe("Banner component - Banner.tsx", () => {
  /**
   * Test to verify that the Banner component renders an image with the correct source and alt text.
   */
  test("Renders an image with the correct source and alt text", () => {
    render(<Banner />);

    // Verify if the image is in the document
    const bannerImage = screen.getByRole("img", {
      name: /Banner Portfolio Image/i,
    });
    expect(bannerImage).toBeInTheDocument();

    // Verify the source of the image
    expect(bannerImage).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/devsy44f3/image/upload/f_auto,q_auto,fl_lossy,c_scale/v1712203352/Portfolio/Banner/1682042717920_1_qlwume.png"
    );

    // Verify the alt text of the image
    expect(bannerImage).toHaveAttribute("alt", "Banner Portfolio Image");
  });
});
