/**
 * Index Component
 *
 * This component serves as the main content container for the application.
 * It renders several modules including Banner, DataProfile, ContactContainer, and FeedContainer.
 */
// import Banner from "@/global/Banner/Banner";
// import DataProfile from "@/modules/DataProfile/DataProfile";
// import FeedContainer from "@/modules/FeedContainer/FeedContainer";
import Banner from "@/global/Banner/Banner";
import DataProfile from "@/modules/DataProfile/DataProfile";
import FeedContainer from "@/modules/FeedContainer/FeedContainer";
import { FC } from "react";

/**
 * Index Functional Component
 *
 * @returns JSX.Element
 */
const Index: FC = () => {
  return (
    <div className="app-content">
      {/* Renders the Banner component */}
      <Banner />

      {/* Renders the DataProfile component */}
      <DataProfile />

      {/* Renders the ContactContainer component */}
      {/* <ContactContainer /> */}

      {/* Renders the FeedContainer component */}
      <FeedContainer />
    </div>
  );
};

export default Index;
