import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { FaChevronDown, FaChevronUp, FaSearch, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { StyledInput } from "./styles/Input.styled";
import { NavContainer } from "./styles/NavContainer.styled";
import { Nav } from "./styles/Navbar.styled.js";
import { StyledDropDownMenu } from "./styles/Navbar.styled.js";

const Navbar = () => {
  const { handleSubmitForm, term, setTerm } = useGlobalContext();

  const [menu, setMenu] = useState(false);
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleMenuClick = () => setMenu(!menu);

  return (
    <>
      <NavContainer>
        <Nav>
          <Link href="/" passHref>
            <a>
              <div>
                <Image src="/logo.png" width="50px" height="50px" />
              </div>
              <h1>allrecipes</h1>
            </a>
          </Link>
          <div onClick={handleMenuClick}>
            {menu ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
        </Nav>

        {menu ? (
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
        ) : (
          <form onSubmit={handleSubmitForm}>
            <StyledInput>
              <span>
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="Search recipes"
                ref={inputEl}
                onChange={() => {
                  setTerm(inputEl.current.value);
                  console.log(term);
                }}
              />
            </StyledInput>
          </form>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;
