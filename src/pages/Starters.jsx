import Card from "../components/Card";

const Starters = ({ starters }) => {
  console.log(starters);
  return (
    <div className="container">
      {starters.map((item, i) => (
        <Card
          key={i}
          image={item.image}
          name={item.name}
          desc={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Starters;
