import styled from "@emotion/styled";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

interface UserAvatarButtonProps {
  image: string;
}


export const Container = styled.main`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #d1e8ff;
  padding: 0 60px 0 60px;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: #003366;
`;

export const AddUserIcon = styled(PersonAddAlt1Icon)``;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007bff;
  color: white;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  transition: 0.1s ease-in-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background: #80b0e4;
    color: #000;
  }
  &:active {
    background-color: #80b0e4;
    box-shadow: 0 5px #666;
    transform: translateY(3px);
  }
   &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;
export const UserAvatarButton = styled.button<UserAvatarButtonProps>`
  margin: -3px;
  width: 50px;
  height: 50px;
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
    transform: translateY(-3px) scale(1.2);
  }
`;
