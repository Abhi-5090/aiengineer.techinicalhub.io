import AllTeamWork from "@/components/AllTeamWork";
import ClientLogo from "@/components/ClientLogo";
import CountersBox from "@/components/CounterBox";
import ImageSlider from "@/components/ImageSlider";
import TeamWork from "@/components/TeamWork";
import Seo from "@/components/common/Seo";

export default function Team() {
  return (
    <>
      <Seo title="Team" />
      <TeamWork />
      <CountersBox />
      <ImageSlider />
      <AllTeamWork />
      <ClientLogo />
    </>
  );
}
