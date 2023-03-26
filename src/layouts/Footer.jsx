import React from "react";
import { GrApple } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      style={{
        height: "500px",
        marginTop: "20px",
      }}
    >
      <hr />
      <footer
        className="p-10 flex gap-12"
        style={{
          width: "850px",
          height: "250px",
          margin: "0 auto",
        }}
      >
        <ul
          style={{
            width: "390px",
            display: "flex",
          }}
        >
          <li
            className="flex "
            style={{
              width: "130px",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <a href="#" className=" link-hover">
              secondhands
            </a>
            <a href="#" className=" link-hover">
              동네가게
            </a>
            <a href="#" className=" link-hover">
              jobs
            </a>
          </li>
          <li
            className="flex "
            style={{
              flexDirection: "column",
              width: "130px",
              justifyContent: "space-around",
            }}
          >
            <a
              href="#"
              className=" link-hover"
              style={{
                marginTop: "-8px",
              }}
            >
              eYaqin business
            </a>
            <a
              href="#"
              className=" link-hover"
              style={{
                marginTop: "-15px",
              }}
            >
              채팅하기
            </a>
            <a href="#" className=" link-hover">
              {null}
            </a>
          </li>
          <li
            className="flex"
            style={{
              flexDirection: "column",
              width: "130px",
              justifyContent: "space-around",
            }}
          >
            <a href="#" className=" link-hover">
              FAQ
            </a>

            <a href="#" className=" link-hover">
              About Us
            </a>
            <a href="#" className=" link-hover">
              인재 채용
            </a>
          </li>
        </ul>
        <div
          style={{
            paddingTop: "15px",
          }}
        >
          <span
            className="font-bold flex"
            style={{
              paddingBottom: "15px",
            }}
          >
            App download
          </span>
          <div className="flex gap-8">
            <a
              href="#"
              className="flex items-center gap-2 font-bold rounded-md"
              style={{
                fontSize: "1rem",
                padding: "10px",
                backgroundColor: "#EEEEEE",
              }}
            >
              <GrApple />
              App Store
            </a>

            <a
              href="#"
              className="flex items-center gap-2 font-bold rounded-md"
              style={{
                fontSize: "1rem",
                padding: "10px",
                backgroundColor: "#EEEEEE",
              }}
            >
              <FaGooglePlay />
              Google Play
            </a>
          </div>
        </div>
      </footer>
      <div
        className="flex py-4 border-t  text-base-content border-base-300 gap-4"
        style={{
          width: "800px",
          margin: "0 auto",
        }}
      >
        <div
          className="text-sm "
          style={{
            width: "520px",
            color: "gray",
          }}
        >
          <span className="font-bold">Boss</span>
          <span> Akhmad, 윤진 </span>
          <span className="font-bold">Office Number</span>
          <span> 010-3802-1005</span>
          <br />
          <span className="font-bold">직업정보제공사업 신고번호 </span>
          <span> 010-3802-1005 </span>
          <br />
          <span className="font-bold">주소 </span>
          <span> Uzbekistan Kashkadarya, Guzor, Uyimizni oldidagi zdaniya</span>
          <br />
          <span className="font-bold">Number </span>
          <span>38021005 </span>
          <span className="font-bold">
            고객문의 <button>Click here</button>
          </span>
          <br />
          <br />

          <div
            className="font-bold  flex gap-3"
            style={{
              width: "60%",
            }}
          >
            <a href="#" className="link-hover">
              제휴 Inquiries
            </a>
            <a href="#" className="link-hover">
              Ad Inquiries
            </a>
            <a href="#" className="link-hover">
              PR Inquiries
            </a>
            <a href="#" className="link-hover">
              IR Inquiries
            </a>
          </div>
          <br />
          <div className="font-bold gap-3 flex">
            <a href="#" className="link-hover">
              Terms of using
            </a>
            <a href="#" className="link-hover">
              privacy policy
            </a>
            <a href="#" className="link-hover">
              Location-Based Services
            </a>
            <a href="#" className="link-hover">
              이용자보호 비전과 계획
            </a>
          </div>
        </div>

        <div
          className="flex gap-4"
          style={{
            width: "200px",
            fontSize: "1.5rem",
            color: "gray",
          }}
        >
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
