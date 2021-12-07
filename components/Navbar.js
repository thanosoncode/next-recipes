import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { StyledInput } from "./styles/Input.styled";
import { NavContainer } from "./styles/NavContainer.styled";
import { Nav } from "./styles/Navbar.styled.js";
import { StyledDropDownMenu } from "./styles/Navbar.styled.js";

const Navbar = () => {
  const { handleSubmitForm, term, setTerm } = useGlobalContext();

  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => setMenu(!menu);

  return (
    <>
      <NavContainer>
        <Nav>
          <div>
            <Image src="/logo.png" width="30px" height="30px" />
          </div>
          <h1>Next-Recipes</h1>
        </Nav>
        <form onSubmit={handleSubmitForm}>
          <StyledInput>
            <span>
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search recipes"
              onChange={(e) => {
                setTerm(e.target.value);
                console.log(term);
              }}
            />
            <div onClick={handleMenuClick}>
              {menu ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </StyledInput>
        </form>
      </NavContainer>
      <StyledDropDownMenu opacity={menu ? "1" : "0"}>
        <Link href="/categories">
          <div>Categories</div>
        </Link>
        <Link href="/regions">
          <div>Regions</div>
        </Link>
      </StyledDropDownMenu>
    </>
  );
};

export default Navbar;
