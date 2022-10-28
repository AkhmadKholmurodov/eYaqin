import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import {
  BsFillEmojiSmileFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

const Articles = () => {
  return (
    <div>
      <Header />

      <div
        style={{
          width: "700px",
          margin: "0 auto",
        }}
      >
        <div className="mt-5 relative">
          <button
            className="font-bold absolute"
            style={{
              fontSize: "1.3rem",
              top: "50%",
              left: "-5%",
            }}
          >
            <BsChevronLeft />
          </button>
          <button
            className="font-bold absolute "
            style={{
              fontSize: "1.3rem",

              top: "50%",
              right: "-5%",
            }}
          >
            <BsChevronRight />
          </button>
          <a href="#">
            <img
              className="rounded-lg"
              src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
              alt=""
            />
          </a>
        </div>
        <section className="mt-6 flex justify-end gap-3">
          <div
            className="avatar flex justify-center items-center"
            style={{
              width: "3.5rem",
            }}
          >
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div
            className="flex justify-center flex-col"
            style={{
              width: "500px",
            }}
          >
            <div className="font-bold ">nickname</div>
            <div className="text-sm">대전광역시 서구 둔산동</div>
          </div>

          <div
            style={{
              width: "200px",
            }}
          >
            <div className="flex gap-2">
              <div>
                <div
                  className="font-bold flex justify-end p-1 "
                  style={{
                    color: "green",
                  }}
                >
                  38.8
                </div>
                <progress
                  className="flex progress progress-success w-32"
                  value="40"
                  max="100"
                ></progress>
              </div>
              <div
                className="flex"
                style={{
                  color: "green",
                  fontSize: "1.75rem",
                }}
              >
                <BsFillEmojiSmileFill />
              </div>
            </div>
            <div
              className="text-sm flex justify-end"
              style={{
                color: "gray",
              }}
            >
              매너온도
            </div>
          </div>
        </section>
        <br />
        <div
          style={{
            width: "700px",
            borderBottom: "1px #e4e4e4 solid",
          }}
        ></div>
        <section>
          <div className="mt-6">
            <div
              className="font-bold"
              style={{
                fontSize: "1.25rem",
              }}
            >
              다혼 자전거 판매합니다.
            </div>
            <div className="flex gap-2">
              <div
                className="text-sm"
                style={{
                  color: "gray",
                }}
              >
                스포츠/레저
              </div>
              <div
                className="text-sm"
                style={{
                  color: "gray",
                }}
              >
                2일 전
              </div>
            </div>
            <div
              className="font-bold"
              style={{
                fontSize: "1.25rem",
              }}
            >
              10,000원
            </div>
          </div>
          <br />
          <div>
            <div>
              오래 방치해서 바퀴에 바람이 빠져있는 상태이나 바람 넣으심 잘 사용
              가능합니다.
            </div>
            <div
              className="flex text-sm gap-2 my-5"
              style={{
                color: "gray",
              }}
            >
              <span>관심</span>
              <div>0</div>
              <span>채팅</span>
              <div>0</div>
              <span>조회</span>
              <div>0</div>
            </div>
          </div>
        </section>
        <br />
        <div
          style={{
            width: "700px",
            borderBottom: "1px #e4e4e4 solid",
          }}
        ></div>
        <section>
          <div>
            <div className="py-9 flex justify-between">
              <div
                className="font-bold"
                style={{
                  fontSize: "1.1rem",
                }}
              >
                당근마켓 인기중고
              </div>
              <div
                className=""
                style={{
                  color: "#FF7F3F",
                }}
              >
                <a href="#">더 구경하기</a>
              </div>
            </div>
            <div>
              <div>
                <ul
                  className="grid grid-cols-3"
                  style={{
                    maxWidth: "1000px",
                    margin: "0 auto",
                  }}
                >
                  <li
                    style={{
                      paddingBottom: "30px",
                    }}
                  >
                    <a href="http://localhost:3000/articles/1">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            className="object-fill"
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/83cbd5362a585918a9b4a7354984ecbfb20208da27522d9b39579099b2cfe1f9.webp?q=95&s=1440x1440&t=inside"
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "block",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            padding: "5px 0",
                          }}
                        >
                          <span>33,000원</span>
                        </div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          <span>부산 진구 부전동</span>
                        </div>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "gray",
                          }}
                        >
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost:3000/articles/2">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                            alt=""
                            style={{
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div>
                          <span>33,000원</span>
                        </div>
                        <div>
                          <span>부산 진구 부전동</span>
                        </div>
                        <div>
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="http://localhost:3000/articles/3">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                            alt=""
                            style={{
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div>
                          <span>33,000원</span>
                        </div>
                        <div>
                          <span>부산 진구 부전동</span>
                        </div>
                        <div>
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                            alt=""
                            style={{
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div>
                          <span>33,000원</span>
                        </div>
                        <div>
                          <span>부산 진구 부전동</span>
                        </div>
                        <div>
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                            alt=""
                            style={{
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div>
                          <span>33,000원</span>
                        </div>
                        <div>
                          <span>부산 진구 부전동</span>
                        </div>
                        <div>
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="#">
                      <div
                        style={{
                          marginLeft: "5px",
                        }}
                      >
                        <div
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "15px",
                            outline: "gray 1px solid",
                          }}
                        >
                          <img
                            src="https://dnvefa72aowie.cloudfront.net/origin/article/202210/FB78ABBCE586F6D1F5C3328D31B5C40E489C2FAB9948A1F2F23114C5633EEF36.jpg?q=82&s=300x300&t=crop"
                            alt=""
                            style={{
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            width: "200px",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                          }}
                        >
                          <span>롯데 자이언츠 이대호 은퇴경기 티켓 팔아요</span>
                        </div>
                        <div>
                          <span>33,000원</span>
                        </div>
                        <div>
                          <span>부산 진구 부전동</span>
                        </div>
                        <div>
                          <span>관심 5</span>
                          <span> º </span>
                          <span>채팅 42</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
