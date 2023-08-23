import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export function SignIn() {

  return (
    <Container>
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button type="button" title="Entrar" />


        <a href="#">Criar conta</a>
      </Form>

      <Background />

    </Container>
  );
}