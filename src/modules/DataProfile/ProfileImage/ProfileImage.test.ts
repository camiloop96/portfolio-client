// /**
//  * @file ProfileImage.test.tsx
//  * @description Test suite for the ProfileImage component.
//  */
// import {
//   ProfilePhotoTypes,
//   UserDataContextTypes,
// } from "@/context/UserDataContext/UserDataContextTypes";
// import { screen, fireEvent, waitFor, render } from "@testing-library/react";
// // Mock the internal components to avoid issues during testing

// // Mock the internal components to avoid issues during testing
// jest.mock("./ModalProfileImage/ModalProfileImage", () => ({
//   __esModule: true,
//   default: function ModalProfileImageMock({
//     openImageModal,
//     profilePhoto,
//     handleCloseModal,
//   }: any) {
//     return openImageModal ? (
//       <div data-testid="modal-profile-image">
//         <img
//           src={profilePhoto?.fullImage?.source}
//           alt={profilePhoto?.fullImage?.alt}
//         />
//         <div onClick={handleCloseModal} data-testid="close-modal">
//           Close
//         </div>
//       </div>
//     ) : null;
//   },
// }));

// describe("ProfileImage Component", () => {
//   const mockProfilePhoto: ProfilePhotoTypes = {
//     thumbnail: {
//       source: "mockThumbnailSource",
//       alt: "mockThumbnailAlt",
//     },
//     fullImage: {
//       source: "mockFullImageSource",
//       alt: "mockFullImageAlt",
//     },
//   };

//   const mockUserData: UserDataContextTypes = {
//     userName: "John Doe",
//     profilePhoto: mockProfilePhoto,
//   };

//   beforeEach(() => {
//     // render(
//     //   <UserDataContext.Provider value={mockUserData}>
//     //     <ProfileImage />
//     //   </UserDataContext.Provider>
//     // );
//   });

//   test("Renders profile image and skeleton loader", async () => {
//     // Check if the skeleton loader is in the document initially
//     expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument();

//     // Check if the profile image is in the document
//     const profileImage = screen.getByAltText(
//       "mockThumbnailAlt"
//     ) as HTMLImageElement;
//     expect(profileImage).toBeInTheDocument();

//     // Simulate image loading
//     fireEvent.load(profileImage);

//     // Wait for the skeleton loader to disappear
//     await waitFor(() =>
//       expect(screen.queryByTestId("skeleton-loader")).not.toBeInTheDocument()
//     );
//   });

//   test("Opens and closes modal on image click", () => {
//     // Click on the profile image to open the modal
//     fireEvent.click(screen.getByAltText("mockThumbnailAlt"));
//     expect(screen.getByTestId("modal-profile-image")).toBeInTheDocument();

//     // Click on the close button to close the modal
//     fireEvent.click(screen.getByTestId("close-modal"));
//     expect(screen.queryByTestId("modal-profile-image")).not.toBeInTheDocument();
//   });
// });
