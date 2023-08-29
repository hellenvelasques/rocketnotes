import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Container, Form } from "./styles";

import { api } from "../../services/api";

export function NewNote() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  
  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {

    if (!title) {
      return alert('Preencha o campo título para continuar.');
    }

    if (newLink || newTag) {
      return alert('Existe um link ou uma tag sem adicionar. Adicione ou remova para continuar.');
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    });

    alert('Nota criada com sucesso!');
    navigate(-1);
  }  

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={() => navigate(-1)} />
          </header>

          <Input 
            placeholder="Título"
            onChange={event => setTitle(event.target.value)}
          />

          <Textarea 
            placeholder="Observações"
            onChange={event => setDescription(event.target.value)}
          />

          <div className="content">
            <Section title="Links úteis" />
            {links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            
            <NoteItem
              isNew={"Novo link"}
              value={newLink}
              onChange={event => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
            
            <Section title="Marcadores" />
            <div className="tags">
            {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
                ))
              }
          
                <NoteItem
                  isNew={"Novo Marcador"}
                  value={newTag}
                  onChange={event => setNewTag(event.target.value)}
                  onClick={handleAddTag}
                />
            </div>
          </div>


          <Button 
            className="buttonSave"
            title="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>  
    </Container>
  );
}