import {
  Backdrop,
  StyledModal,
  UserList,
  StyledList,
  UserAvatarButton,
  UserName,
  StyledItem,
  UserEmail,
  UserInfo,
} from "./styled";
import { users } from "../../../temporaryFiles/users";
import { StyledButton } from "../styled";

interface User {
  id: number;
  name: string;
  email: string;
  img: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onAddUser: (user: User) => void;
  onRemoveUser: (userId: number) => void;
  addedUsers: User[];
}

export const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  onAddUser,
  onRemoveUser,
  addedUsers,
}) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!show) {
    return null;
  }

  const isUserAdded = (userId: number) => {
    return addedUsers.some((user) => user.id === userId);
  };

  return (
    <Backdrop onClick={onClose}>
      <StyledModal onClick={handleModalClick}>
        <UserList>
          <StyledList>
            {users.map((user) => (
              <StyledItem key={user.id}>
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
                <UserAvatarButton image={user.img} />
                <StyledButton
                  onClick={() => onAddUser(user)}
                  disabled={isUserAdded(user.id)}
                >
                  Add
                </StyledButton>
                <StyledButton
                  onClick={() => onRemoveUser(user.id)}
                  disabled={!isUserAdded(user.id)}
                >
                  Remove
                </StyledButton>
              </StyledItem>
            ))}
          </StyledList>
        </UserList>
      </StyledModal>
    </Backdrop>
  );
};
