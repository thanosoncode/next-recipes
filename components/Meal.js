import Link from "next/link";

const Meal = ({ meal }) => {
  const { id, name, reviews, region, category, image } = meal;

  return (
    <Link href="/meal/[id]" as={`/meal/${id}`}>
      <a>
        <div key={id}>
          <img src={image} alt={name} style={{ width: "200px" }} />
          <div>
            <h3>{name}</h3>
            <p>{reviews}</p>
            <span>{region}</span>
            <span>{category}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Meal;
