import { useState } from "react";
import { Modal } from "./modal/Modal";

import {
  Container,
  Wrapper,
  Header,
  AddUserIcon,
  StyledButton,
} from "./styled";
import { UserAvatarButton } from "./styled";

interface User {
  id: number;
  name: string;
  email: string;
  img: string;
}

export const ProjectSite: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [addedUsers, setAddedUsers] = useState<User[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const addUser = (user: User) => {
    setAddedUsers([...addedUsers, user]);
  };

  const removeUser = (userId: number) => {
    setAddedUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Header>Project Name</Header>
          <Wrapper>
            <Wrapper>
              {addedUsers.map((user) => (
                <div key={user.id}>
                  <UserAvatarButton image={user.img} />
                </div>
              ))}
            </Wrapper>
            <StyledButton onClick={showModal}>
              <AddUserIcon />
            </StyledButton>
          </Wrapper>
        </Wrapper>
        <StyledButton> + Add New Task</StyledButton>
        <Modal
          show={isModalVisible}
          onClose={closeModal}
          onAddUser={addUser}
          onRemoveUser={removeUser}
          addedUsers={addedUsers}
        />
      </Container>
    </>
  );
};
