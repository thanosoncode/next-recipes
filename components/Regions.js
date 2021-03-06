import { useState, useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { StyledRegionsList, StyledRegion } from "./styles/RegionsList.styled";
import Loading from "./Loading";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

const Regions = () => {
  const { setRegion, menu, setMenu } = useGlobalContext();

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchRegions = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setRegions(data.meals);
        } else {
          setRegions([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchRegions();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (!regions) {
    return <h4>sorry something went wrong</h4>;
  }

  return (
    <StyledRegionsList>
      {regions.map((item, index) => {
        return (
          <Link href="/" passHref key={index}>
            <StyledRegion
              onClick={() => {
                setMenu(!menu);
                setRegion(item.strArea);
              }}
            >
              {item.strArea}
            </StyledRegion>
          </Link>
        );
      })}
    </StyledRegionsList>
  );
};

export default Regions;
