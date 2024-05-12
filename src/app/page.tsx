import { Alert, MapNav, StatsRibbon, TextBlock } from "./_components";

const HomePage = () => {
  return (
    <div className="w-7/12 bg-neutral rounded-md p-5 shadow-sm flex flex-col space-y-3">
      <StatsRibbon />
      <MapNav />
      <Alert />
      <TextBlock />
    </div>
  );
};

export default HomePage;
