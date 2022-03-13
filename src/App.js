import { ReactComponent as IconLuxury } from "./assets/luxury.svg";
import { ReactComponent as IconSedans } from "./assets/sedans.svg";
import { ReactComponent as IconSuvs } from "./assets/suvs.svg";

function Card({ className, icon, title, content }) {
  return (
    <div className={"card " + className}>
      <header>
        {icon}

        <strong>{title}</strong>
      </header>

      <p>{content}</p>

      <button>Learn More</button>
    </div>
  );
}

function App() {
  const cards = [
    {
      icon: <IconSedans />,
      title: "Sedans",
      content: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.`,
      className: "orange",
    },
    {
      icon: <IconSuvs />,
      title: "SUVs",
      content: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.`,
      className: "blue",
    },
    {
      icon: <IconLuxury />,
      title: "Luxury",
      content: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
      className: "green",
    },
  ];

  return (
    <div className="container">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}

export default App;
