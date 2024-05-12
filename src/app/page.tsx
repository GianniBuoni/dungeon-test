import Stats from "@/app/_components/Stats";
import Places from "./_components/Places";
import { myCard } from "./_styles/myClasses";

const HomePage = () => {
  return (
    <div className={`${myCard} space-y-3`}>
      <Stats />
      <Places />
    </div>
  );
};

export default HomePage;
