// import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyCrack, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  // const onSearchChange = (e) => {
  //   setSearch(e.target.value);
  // };
  // const onSearch = (searchKeyword) => {
  //   navigate(`/search/${searchKeyword}`);
  // };
  return (
    <div
      style={{
        width: "100%",
        height: "65px",
        position: "sticky",
        top: "0%",
        zIndex: "9999",
        backgroundColor: "white",
      }}
    >
      <div className="sticky top-0 flex p-3 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center " //ozgardi
        // style={{
        //   width: "1100px",
        //   height: "100%",
        //   justifyContent: "space-between",
        //   margin: "0 auto",
        //   display: "flex",
        //   backgroundColor: "white",
        //   position: "sticky",
        //   top: "0%",
        //   zIndex: "9999",
        // }}
      >
        <div
          className="flex items-center justify-around sticky top-0  mx-6" // ozgardi
          style={{
            width: "550px",
            height: "100%",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              color: "#ffa445",
              fontSize: "1.4rem",
            }}
          >
            <a href={`/`} className="fontt relative">
              <FontAwesomeIcon
                icon={faHouseChimneyCrack}
                style={{
                  fontSize: "1.8rem",
                }}
              />
              eYaqin
            </a>
          </div>
          <div 
          className="hidden uppercase xl:inline-flex text-sm" //ozgardi
          >
            <div className=" text-amber-500 p-3" //ozgardi
              // style={{
              //   color: "#ffa445",
              // }}
            >
              <a href={`/allproduct`}>Secondhands</a>
            </div>
            <div className="p-3">
              <a href={`/alljobs`}>PT jobs</a>
            </div>
            <div className="p-3">
              <a href={`/allrealty`}>Real Estate</a>
            </div>
            <div className="p-3">
              <a href={`/board`}>동네게시판</a>
            </div>
          </div>
          </div>
        <div 
        className="flex-grow justify-center items-center flex relative" //ozgardi
        >
          <a
            href={`/login`}
            className=" outline-gray-500 p-1.5 rounded-md ml-3 hover:bg-gray-300 hover:text-black" //ozgardi
            // style={{
            //   outline: "1px #bcbcbc solid",
            //   padding: "5px 10px",
            //   borderRadius: "5px",
            // }}
          >
            Login
          </a>
          <a
            href={`/signup`}
            className=" outline-gray-500 p-1.5 rounded-md ml-3 hover:bg-gray-300 hover:text-black" //ozgardi
              //  style={{
              // outline: "1px #bcbcbc solid",
              // padding: "6px",
              // borderRadius: "6px",
              // marginLeft: "10px",
            //  }}
          >
            SignUp
          </a>
        </div>
        <div
          className="flex items-center gap-3 relative left-6" // ozgardi
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FontAwesomeIcon
            className="relative mr-6"
            icon={faMagnifyingGlass}
            style={{
              fontSize: "1.5rem",
            }}
          />
          <input
            className=" w-72 rounded-md p-1.5 bg-gray-100 hidden md:inline-flex"
            type="text"
            placeholder="Search by Town or Stuff"
//             value={search}
//             onChange={onSearchChange}
// {(e) => {
//               if (e.key == "Enter") {
//                 onSearch(search);
//               }
//             }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
