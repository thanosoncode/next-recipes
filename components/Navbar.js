import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "./Context";
import { FaSearch, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { StyledInput } from "./styles/Input.styled";
import { NavContainer } from "./styles/NavContainer.styled";
import { Nav } from "./styles/Navbar.styled.js";
import { StyledDropDownMenu, Flex } from "./styles/Navbar.styled.js";

const Navbar = () => {
  const { handleSubmitForm, term, setTerm, menu, setMenu } = useGlobalContext();

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
        </Nav>

        {menu ? (
          <StyledDropDownMenu
            opacity={menu ? "1" : "0"}
            visibility={menu ? "visible" : "hidden"}
          >
            <Link href="/categories">
              <div>Categories</div>
            </Link>
            <Link href="/regions">
              <div>Regions</div>
            </Link>
          </StyledDropDownMenu>
        ) : (
          <Flex>
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
            <div onClick={handleMenuClick}>
              {menu ? <FaTimes /> : <GiHamburgerMenu />}
            </div>
          </Flex>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;
