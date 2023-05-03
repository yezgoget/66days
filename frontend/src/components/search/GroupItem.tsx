import styled from "styled-components";
import { theme } from "../../styles/theme";
import Profile1 from "../../assets/main/Profile1.png";
import GroupImg from "../../assets/search/group_image.png";
// import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import { Modal } from "antd";
export default function GroupItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <ProfileWrapper>
        <img src={Profile1} />
        <TitleWrapper>
          뭉치
          <div className="sub">게으른 카피바라</div>
        </TitleWrapper>
      </ProfileWrapper>
      <img src={GroupImg} style={{ height: "18.8rem" }} />
      <MaterialWrapper>
        <div className="title">알고리즘 파트원 구해요</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.7rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            {DUMMY.map((v, idx) => {
              const category = CATEGORY.find((c) => c.title === v); // 해당 title의 category를 찾음
              const col = category ? category.color : "gray";
              return (
                <CategoryItem key={idx} color={col}>
                  {v}
                </CategoryItem>
              );
            })}
          </div>
          <span>모집중</span>
        </div>
        <div className="content">열심히 할 사람만 와주세요</div>
      </MaterialWrapper>
      <ButtonWrapper>
        66 / 66{" "}
        <div className="button" onClick={showModal}>
          Apply
        </div>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <ModalContainer>
            <div className="title">뭉치뭉치똥뭉치네</div>
            <div className="sub">그룹에 가입 신청을 요청하시겠습니까?</div>
            <div className="warning">
              그룹 가입 승인 이후 챌린지 참여가 가능합니다.
            </div>
            <ButtonWrapper>ss</ButtonWrapper>
          </ModalContainer>
        </Modal>
      </ButtonWrapper>
    </Container>
  );
}

/* Modal  */
const ModalContainer = styled.div`
  width: 6.4rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .title {
    margin-top: 12.3rem;
    font-size: 3.2rem;
    font-weight: bold;
  }

  .sub {
    margin-top: 3.2rem;
    font-size: 2.4rem;
    font-weight: ${theme.fontWeight.semibold};
  }
  .warning {
    margin-top: 4.8rem;
    font-size: 1.6rem;
    color: ${theme.colors.lightred};
  }
`;

const ModalButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 4.9rem;
`;
const Container = styled.div`
  width: 36rem;
  height: 48rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 0 5px 2px ${theme.colors.gray200};
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  height: 7.2rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  img {
    width: 4rem;
  }
`;
const TitleWrapper = styled.div`
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  .sub {
    margin-top: 0.2rem;
    color: ${theme.colors.gray400};
  }
`;

const MaterialWrapper = styled.div`
  padding: 1.7rem 1.6rem;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 2rem;
    font-weight: ${theme.fontWeight.semibold};
  }
  .content {
    margin-top: 1.3rem;
    font-size: 1.6rem;
    color: ${theme.colors.gray500};
  }
  span {
    font-size: 1.6rem;
    color: red;
    font-weight: ${theme.fontWeight.semibold};
  }
`;
const ButtonWrapper = styled.div`
  padding: 1.6rem;
  height: 7.2rem;
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
  font-weight: ${theme.fontWeight.semibold};
  font-size: 1.6rem;
  color: ${theme.colors.gray500};

  .disable-button {
    width: 11rem;
    height: 4rem;
    border-radius: 155px;
    color: white;
    background-color: red;
    text-align: center;
    padding: 0.5rem 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* &:hover {
      color: gray;
      background-color: white;
      border: solid 1px gray;
    } */
  }
  .button {
    width: 11rem;
    height: 4rem;
    border-radius: 155px;
    color: white;
    background-color: ${theme.colors.mint};
    text-align: center;
    padding: 0.5rem 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: gray;
      background-color: white;
      border: solid 1px gray;
    }
  }
`;
interface CategoryItemProps {
  color: string;
}

const CategoryItem = styled.div<CategoryItemProps>`
  color: ${(props) => props.color};
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.semibold};
  margin-right: 1.6rem;
  padding: 0.5rem 1.6rem;
  border: solid 2px ${(props) => props.color};
  border-radius: 10px;
`;

const DUMMY = ["알고리즘", "블로그"];
const CATEGORY = [
  {
    title: "알고리즘",
    color: "#6CD3C0",
  },
  {
    title: "CS",
    color: "#FBA9D6",
  },
  {
    title: "블로그",
    color: "#F37F3A",
  },
  {
    title: "강의 시청",
    color: "#B8A9FB",
  },
  {
    title: "개발 서적",
    color:
      "#FF8383                                                                                                                                      ",
  },
];
