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
          <Link href="/" passHref>
            <a>
              <div>
                <Image src="/logo.png" width="30px" height="30px" />
              </div>
              <h1>allrecipes</h1>
            </a>
          </Link>
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
      <StyledDropDownMenu
        opacity={menu ? "1" : "0"}
        visibility={menu ? "visible" : "hidden"}
      >
        <Link href="/categories">
          <div onClick={() => setMenu(false)}>Categories</div>
        </Link>
        <Link href="/regions">
          <div onClick={() => setMenu(false)}>Regions</div>
        </Link>
      </StyledDropDownMenu>
    </>
  );
};

export default Navbar;
