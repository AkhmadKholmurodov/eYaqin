import { useState } from "react";
import Header from "../layouts/Header";
import axios from "axios";
import { useEffect } from "react";
import { MdAddAPhoto } from "react-icons/md";

const Test = () => {
  const [category, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [completeToggle, setCompleteToggle] = useState(false);
  const [showImages, setShowImages] = useState([]);
  const [id, setId] = useState("");
  const onPriceChange = (e) => {
    setPriceValue(e.target.value);
  };
  const onContentChange = (e) => {
    setContentValue(e.target.value);
  };
  const onSubjectChange = (e) => {
    setSubjectValue(e.target.value);
  };
  const onCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };
  //사진 여러개 https://cotak.tistory.com/124

  const onCompleteChange = () => {
    setCompleteToggle(!completeToggle);
  };

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    console.log(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const onSubmit = async (subjectValue, contentValue, category, priceValue) => {
    try {
      const data = await axios({
        url: `http://localhost:8083/createProduct`,
        method: "POST",
        data: {
          productCategory: category,
          productPrice: priceValue,
          productSubject: subjectValue,
          productContent: contentValue,
        },
      });
      setId(data.data.productId);
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmits = async (
    subjectValue,
    contentValue,
    category,
    priceValue,
    showImages
  ) => {
    try {
      const data = await axios({
        url: `http://localhost:8083/createProduct`,
        method: "POST",
        data: {
          productCategory: category,
          productPrice: priceValue,
          productSubject: subjectValue,
          productContent: contentValue,
        },
      });
      setId(data.data.productId);

      const data2 = await axios({
        url: `http://localhost:8083/createProductImages/${data.data.productId}`,
        method: "POST",
        data: {
          path: showImages,
        },
      });
      console.log(data2);
      window.alert("사진추가d");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header />
      <div
        className="pt-4"
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: "bolder",
        }}
      >
<<<<<<< Updated upstream
        <span
          style={{
            color: "#ffa445",
          }}
        >
          중고거래 글쓰기
        </span>
      </div>
      <div
        className="flex justify-center "
        style={{
          width: "850px",
          margin: "0 auto",
          height: "700px",
          position: "relative",
          marginTop: "1rem",
          border: "1px red solid",
        }}
      >
        <div
          style={{
            display: "inline-block",
          }}
        >
=======
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(subjectValue, contentValue, category, priceValue);
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bolder",
            }}
          >
            <span
              style={{
                color: "#ffa445",
              }}
            >
              중고거래 글쓰기
            </span>
          </div>
>>>>>>> Stashed changes
          <div>
            <div>제목</div>
            <div>
              <input
                type="text"
                placeholder="게시글 제목"
                value={subjectValue}
                onChange={onSubjectChange}
                style={{
                  border: "1px  #d5d5d5 solid",
                  height: "40px",
                  width: "600px",
                }}
              />
            </div>
          </div>
<<<<<<< Updated upstream
          <div className="pt-4">
            <select
=======
          <div
            style={{
              paddingLeft: "10px",
            }}
          >
            내용
          </div>
          <div
            style={{
              paddingLeft: "10px",
            }}
          >
            <input
              type="text"
              placeholder="게시글 내용을 작성해주세요. (가품 및 판매금지 물품은 게시가 제한될 수 있어요)"
              value={contentValue}
              onChange={onContentChange}
              style={{
                border: "1px black solid",
                borderRadius: "10px",
                width: "80%",
                height: "120px",
                paddingLeft: "10px",
              }}
            />
          </div>
          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <input
              placeholder="가격"
              value={priceValue}
              onChange={onPriceChange}
              style={{
                border: "1px black solid",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <input
              type="text"
              placeholder="카테고리 선택"
>>>>>>> Stashed changes
              value={category}
              onChange={onCategoryChange}
              style={{
                border: "1px #d5d5d5 solid",
                width: "35%",
              }}
            >
              <option value="01">카테고리 선택</option>
              <option value="01">디지털기기</option>
              <option value="02">생활가전</option>
              <option value="03">가구/인테리어</option>
              <option value="04">생활/주방</option>
              <option value="05">유아동</option>
              <option value="06">유아도서</option>
              <option value="07">여성의류</option>
              <option value="08">여성잡화</option>
              <option value="09">남성패션/잡화</option>
              <option value="10">뷰티/미용</option>
              <option value="11">스포츠/레저</option>
              <option value="12">취미/게임/음반</option>
              <option value="13">도서</option>
              <option value="14">티켓/교환권</option>
              <option value="15">가공식품</option>
              <option value="16">반려동물용품</option>
              <option value="17">식물</option>
              <option value="18">기타 중고물품</option>
              <option value="19">삽니다</option>
            </select>
          </div>
          <div className="pt-4">
            <input
              type="text"
              placeholder="\ 가격"
              value={priceValue}
              onChange={onPriceChange}
              style={{
                border: "1px  #d5d5d5 solid",
                width: "35%",
              }}
            />
          </div>
<<<<<<< Updated upstream
          <div>
            <div className="pt-4">내용</div>
            <div>
              <input
                type="text"
                placeholder="게시글 내용을 작성해주세요. (가품 및 판매금지 물품은 게시가 제한될 수 있어요)"
                value={contentValue}
                onChange={onContentChange}
                style={{
                  border: "1px #d5d5d5 solid",
                  width: "100%",
                  height: "120px",
                  paddingLeft: "5px",
                }}
              />
            </div>
          </div>
          <div
            className="pt-4"
=======
          <div>사진 업로드하기 (추후 추가)</div>
          <button
>>>>>>> Stashed changes
            style={{
              color: "#ffa445",
              fontWeight: "bolder",
            }}
          >
<<<<<<< Updated upstream
            사진은 최대 10장까지 추가할 수 있습니다.
          </div>
          <div
            className="flex "
            style={{
              border: "1px red solid",
              maxWidth: "600px",
            }}
          >
            <div
              className="p-5 rounded-lg"
              style={{
                border: "1px #d5d5d5 solid",
                width: "90px",
                height: "90px",
                color: "#8f8f8f",
              }}
            >
              <label htmlFor="input-file" onChange={handleAddImages}>
                <input
                  type="file"
                  id="input-file"
                  multiple
                  style={{
                    display: "none",
                  }}
                />
                <MdAddAPhoto
                  style={{
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                />
              </label>
            </div>

            <ul className="grid grid-cols-5 gap-5 pl-4">
              {showImages.map((image, id) => (
                <div
                  key={id}
                  style={{
                    width: "110px",
                    height: "100px",
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    marginBottom: "20px",
                    border: "1px red solid",
                  }}
                >
                  <img
                    src={image}
                    alt={`${image}-${id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      display: "block",
                    }}
                  />
                  <div />
                  <button
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "-30%",
                    }}
                    onClick={() => handleDeleteImage(id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <button
              onClick={() => {
                if (showImages.length == 0) {
                  onSubmit(subjectValue, contentValue, category, priceValue);
                  onCompleteChange();
                } else {
                  onSubmits(
                    subjectValue,
                    contentValue,
                    category,
                    priceValue,
                    showImages
                  );
                  onCompleteChange();
                }
              }}
              style={{
                outline: "1px #ffa445 solid",
                borderRadius: "10px",
                padding: "15px",
                fontWeight: "bolder",
                color: "white",
                backgroundColor: "#FFB26B",
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              판매게시글 작성완료
            </button>
          </div>
          {completeToggle && (
            <div
              style={{
                position: "absolute",
                transform: "translate(95%,-120%)",
                width: "300px",
                height: "150px",
                justifyContent: "center",
                background: "white",
                outline: "1px #ffa445 solid",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              <a
                href={`/articles/${id}`}
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  color: "#ffa445",
                  fontWeight: "bolder",
                  paddingTop: "10px",
                }}
              >
                {" "}
                게시글 작성이
                <br />
                완료되었습니다.
                <div
                  style={{
                    padding: "10px",
                    outline: "1px #ffa445 solid",
                    borderRadius: "10px",
                    color: "#ffa445",
                    width: "80px",
                    margin: "30px auto",
                  }}
                >
                  확인
                </div>
              </a>
            </div>
          )}
        </div>
=======
            판매게시글 작성완료
          </button>
        </form>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Test;
