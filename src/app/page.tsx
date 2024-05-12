import { MapNav, Place, StatsRibbon } from "./_components";
import Store from "./_components/Store";

const HomePage = () => {
  return (
    <div className="w-7/12 bg-neutral rounded-md p-5 shadow-sm flex flex-col space-y-3">
      <StatsRibbon />
      <MapNav />
      <Store />
    </div>
  );
};

export default HomePage;
