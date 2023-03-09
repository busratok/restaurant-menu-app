import Card from "../components/Card";

const Desserts = ({ desserts }) => {
  console.log(desserts);
  return (
    <div className="container">
      {desserts.map((item, i) => (
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

export default Desserts;
