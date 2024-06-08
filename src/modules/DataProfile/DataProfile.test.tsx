/**
 * @file DataProfile.tsx
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

describe("DataProfile Component", () => {
  const mockUserName = "John Doe";

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
  const mockUserData: UserDataContextTypes = {
    userName: "John Doe",
    profilePhoto: mockProfilePhoto,
  };

  beforeEach(() => {
    render(
      <UserDataContext.Provider value={mockUserData}>
        <DataProfile />
      </UserDataContext.Provider>
    );
  });

  test("Renders profile image", () => {
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage).toBeInTheDocument();
  });

  test("Renders user name", () => {
    const userNameElement = screen.getByText(mockUserName);
    expect(userNameElement).toBeInTheDocument();
  });

  test("Renders links container", () => {
    const linksContainer = screen.getByTestId("links-container");
    expect(linksContainer).toBeInTheDocument();
  });

  test("Renders text container", () => {
    const textContainer = screen.getByTestId("text-container");
    expect(textContainer).toBeInTheDocument();
  });

  test("Renders container flags", () => {
    const containerFlags = screen.getByTestId("container-flags");
    expect(containerFlags).toBeInTheDocument();
  });
});
