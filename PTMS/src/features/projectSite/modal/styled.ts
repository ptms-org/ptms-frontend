import styled from "@emotion/styled";

interface UserAvatarButtonProps {
  image: string;
}

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
  max-height: 90vh;
  overflow-y: auto;
`;

export const UserAvatarButton = styled.button<UserAvatarButtonProps>`
  margin: 0 10px 20px 35px;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-position: center;
  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`;

export const UserList = styled.div``;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  justify-content: center;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

export const UserEmail = styled.p`
  font-size: 0.8;
  color: gray;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
