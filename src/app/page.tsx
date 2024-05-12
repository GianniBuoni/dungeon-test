import Stats from "@/app/_components/Stats";
import Places from "./_components/Places";
import TextBlock from "./_components/TextBlock";
import { myCard } from "./_styles/myClasses";

const HomePage = () => {
  return (
    <div className={`${myCard} space-y-3`}>
      <Stats />
      <Places />
      <TextBlock />
    </div>
  );
};

export default HomePage;
