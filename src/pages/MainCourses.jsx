import Card from "../components/Card";

const MainCourses = ({ mainCourses }) => {
  return (
    <div className="container">
      {mainCourses.map((item, i) => (
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

export default MainCourses;
