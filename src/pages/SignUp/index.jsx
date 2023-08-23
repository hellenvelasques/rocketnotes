import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export function SignUp() {

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocketnotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button type="button" title="Cadastrar" />


        <Link to="/">Voltar para o login</Link>
      </Form>

    </Container>
  );
}