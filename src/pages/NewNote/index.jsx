import { Header } from "../../components/Header";
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Container, Form } from "./styles";

export function NewNote() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <div className="content">
            <div>
            <Section title="Links úteis" />
            <NoteItem value="teste"/>
            <NoteItem placeholder="Novo link" isNew />
            </div>
            
            <div>
              <Section title="Marcadores" />
              <div className="tags">
                <NoteItem value="teste"/>
                <NoteItem placeholder="Novo marcador" isNew />
              </div>
            </div>

          </div>


          <Button title="Salvar" />
        </Form>
      </main>  
    </Container>
  );
}