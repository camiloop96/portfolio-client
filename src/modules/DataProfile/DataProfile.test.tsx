/**
 * @file DataProfile.test.tsx
 * @description Test suite for DataProfile component.
 */

import { UserDataContext } from "@/context/UserDataContext/UserDataContext";
import { render, screen } from "@testing-library/react";
import DataProfile from "./DataProfile";
import {
  ProfilePhotoTypes,
  UserDataContextTypes,
} from "@/context/UserDataContext/UserDataContextTypes";

// Mock the internal components to avoid issues during testing
jest.mock("./ProfileImage/ProfileImage", () => () => (
  <div data-testid="profile-image">Profile Image</div>
));
jest.mock("./LinksContainer/LinksContainer", () => () => (
  <div data-testid="links-container">Links Container</div>
));
jest.mock("./TextContainer/TextContainer", () => () => (
  <div data-testid="text-container">Text Container</div>
));
jest.mock("./ContainerFlags/ContainerFlags", () => () => (
  <div data-testid="container-flags">Container Flags</div>
));

/**
 * Test suite for the DataProfile component.
 */
describe("DataProfile Component", () => {
  // Mock user name
  const mockUserName = "John Doe";

  // Mock profile photo details
  const mockProfilePhoto: ProfilePhotoTypes = {
    thumbnail: {
      source: "mockThumbnailSource",
      alt: "mockThumbnailAlt",
    },
    fullImage: {
      source: "mockFullImageSource",
      alt: "mockFullImageAlt",
    },
  };

  // Mock user data context value
  const mockUserData: UserDataContextTypes = {
    userName: mockUserName,
    profilePhoto: mockProfilePhoto,
  };

  // Render the component with the mocked context before each test
  beforeEach(() => {
    render(
      <UserDataContext.Provider value={mockUserData}>
        <DataProfile />
      </UserDataContext.Provider>
    );
  });

  /**
   * Test to verify if the profile image is rendered.
   */
  test("Renders profile image", () => {
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage).toBeInTheDocument();
  });

  /**
   * Test to verify if the user name is rendered.
   */
  test("Renders user name", () => {
    const userNameElement = screen.getByText(mockUserName);
    expect(userNameElement).toBeInTheDocument();
  });

  /**
   * Test to verify if the links container is rendered.
   */
  test("Renders links container", () => {
    const linksContainer = screen.getByTestId("links-container");
    expect(linksContainer).toBeInTheDocument();
  });

  /**
   * Test to verify if the text container is rendered.
   */
  test("Renders text container", () => {
    const textContainer = screen.getByTestId("text-container");
    expect(textContainer).toBeInTheDocument();
  });

  /**
   * Test to verify if the container flags are rendered.
   */
  test("Renders container flags", () => {
    const containerFlags = screen.getByTestId("container-flags");
    expect(containerFlags).toBeInTheDocument();
  });
});
