import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { StyledInput } from "./styles/Input.styled";
import { NavContainer } from "./styles/NavContainer.styled";
import { Nav } from "./styles/Navbar.styled.js";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { handleSubmitForm, term, setTerm } = useGlobalContext();

  return (
    <>
      <NavContainer>
        <Nav>
          <div>
            <Image src="/logo.png" width="30px" height="30px" />
          </div>
          <h1>Next-Recipes</h1>
          <span>
            <AiOutlineMenu />
          </span>
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
          </StyledInput>
        </form>
      </NavContainer>
    </>
  );
};

export default Navbar;
