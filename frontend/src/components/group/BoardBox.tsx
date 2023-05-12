import { Layout } from "antd";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NotificationFilled } from "@ant-design/icons";
import changeDateFormat from "../../util/common";

const { Content } = Layout;

export function BoardBox({ ...props }) {
  return (
    <>
      <BoardBoxWrapper onClick={() => props.setBoardModal(true)}>
        {props.admin ? <NotificationFilled className="admin" /> : null}
        <div className="board-title">{props.title}</div>
        <div className="board-info">
          <div className="board-date">
            {changeDateFormat(new Date(props.createdAt))}
          </div>
          <div>작성자: {props.writer}</div>
        </div>
      </BoardBoxWrapper>
    </>
  );
}

const BoardBoxWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 10px;
  height: 16rem;
  padding: 2rem 2rem 1rem;
  background-color: ${theme.colors.mint};
  margin-right: 1.6rem;
  border-radius: 1rem;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  font-size: 1.6rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.45));
  }

  .admin {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 3rem;
    color: ${theme.colors.failure};
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2));
  }

  .admin:hover {
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));
  }

  .board-title {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 0.5rem;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .board-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-weight: 600;

    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .board-date {
    font-weight: ${theme.fontWeight.medium};
  }
`;
