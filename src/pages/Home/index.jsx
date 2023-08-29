import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import CardNote from '../../components/CardNote';
import { Section } from '../../components/Section';
import { api } from '../../services/api';

export function Home() {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleSelectedTag(tagName) {
  
    if(tagName === 'all') {
      return setTagsSelected([]);
    }

    tagsSelected.includes(tagName)
    ? setTagsSelected(tagsSelected.filter(tag => tag !== tagName)) 
    : setTagsSelected(prevState => [...prevState, tagName]);
  } 

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }
    fetchNotes();

  }, [tagsSelected, search]);

  return ( 
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText 
            title="Todos"
            onClick={() => handleSelectedTag("all")}
            $isactive={tagsSelected.length === 0}
          />
        </li>
        { tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleSelectedTag(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch} 
          onChange={(event) => setSearch(event.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          { 
            notes.map(note => (
              <CardNote 
                data={note} 
                key={String(note.id)}
                onClick={() => handleDetails(note.id)} />
            ))
          }
        </Section>
      </Content>  

      <NewNote to="/newnote">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}