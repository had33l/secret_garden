import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

function NavigationBar() {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
  };

  const iconStyle = {
    color: "white",
    fontSize: "24px",
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#183425", padding: "20px" }}>
      <Container>
        <Nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Link to="/" style={{ ...linkStyle, marginLeft: "100px" }}>
              Home
            </Link>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <Link to="/plants" style={linkStyle}>
              Plants
            </Link>
            <Link to="/pots_&_accessories" style={linkStyle}>
              Pots & Accessories
            </Link>
            <Link to="/seeds" style={linkStyle}>
              Seeds
            </Link>
            <Link to="/blog" style={linkStyle}>
              Blog
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
            <FaSearch
              style={iconStyle}
              title="Search"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <Form inline style={{ marginLeft: "10px" }}>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                  style={{ borderRadius: "20px", padding: "5px" }}
                />
                <Button varient="outline-light" style={{ marginLeft: "5px" }}>
                  {" "}
                  Go{" "}
                </Button>
              </Form>
            )}

            <FaHeart
              style={iconStyle}
              title="Likes"
              onClick={() => navigate("/wishlist")}
            />
            <FaShoppingCart
              style={iconStyle}
              title="Cart"
              onClick={() => navigate("/Cart")}
            />
            <FaUser
              style={iconStyle}
              title="Profile"
              onClick={() => navigate("/profile")}
            />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
