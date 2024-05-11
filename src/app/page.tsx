import { ButtonHub, StatsRibbon, TextBlock, Alert } from "./_components";

const HomePage = () => {
  return (
    <div className="w-7/12 bg-sky-900 rounded-md p-5 shadow-sm flex flex-col space-y-3">
      <StatsRibbon />
      <ButtonHub />
      <Alert />
      <TextBlock />
    </div>
  );
};

export default HomePage;
