import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from 'react-router-dom';
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() { 
  const { user, updateProfile } = useAuth();
  // const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword: oldPassword,
    }

    await updateProfile({ user });
  }


  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/hellenvelasques.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file"/>
          </label>
        </Avatar>
        

        <Input 
          type="text" 
          placeholder="Nome" 
          icon={FiUser}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input 
          type="text" 
          placeholder="E-mail" 
          icon={FiMail}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input 
          type="password" 
          placeholder="Senha atual" 
          icon={FiLock}
          onChange={(event) => setOldPassword(event.target.value)}
        />

        <Input 
          type="password" 
          placeholder="Nova senha" 
          icon={FiLock}
          onChange={(event) => setNewPassword(event.target.value)}
        />

        <Button 
          title="Salvar" 
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  );
}