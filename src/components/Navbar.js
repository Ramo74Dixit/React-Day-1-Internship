import React from "react";
import { NavLink, NavLinkLink } from "react-router-dom";

const Navbar = ({cart,showCart,setShowCart}) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: "800",
          color: "#2563eb",
          letterSpacing: "2px",
          cursor: "pointer",
        }}
      >
        LOGO
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f3f4f6",
          borderRadius: "30px",
          padding: "5px",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width: "350px",
            border: "none",
            outline: "none",
            background: "transparent",
            padding: "12px 18px",
            fontSize: "15px",
          }}
        />

        <button
          style={{
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 22px",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Search
        </button>
        <button
        onClick={()=>setShowCart(!showCart)}
          style={{
            padding:"10px",
            backgroundColor:"green",
            color:"white",
            border:"1px solid yellow",
            borderRadius:"10px"
          }}
        >
          Cart({cart.length})
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
         <NavLink to="/">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/home">MainLandingPage</NavLink>
         <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;