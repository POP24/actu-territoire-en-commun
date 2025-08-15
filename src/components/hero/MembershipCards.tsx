import MembershipCard from "./MembershipCard";

const MembershipCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <MembershipCard
        type="local"
        price="10€ + prix libre"
        title="ADHÉSION LOCALE"
        description="Habitants unis, projets réalisés"
      />
      <MembershipCard
        type="architect"
        price="100€"
        title="ADHÉSION ARCHITECTE"
        description="Territoires connectés, impact démultiplié"
      />
    </div>
  );
};

export default MembershipCards;