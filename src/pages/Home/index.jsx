import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import CardNote from '../../components/CardNote';
import { Section } from '../../components/Section';

export function Home() {

  return ( 
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li><ButtonText title={"Todos"} $isactive /></li>
        <li><ButtonText title={"React"} /></li>
        <li><ButtonText title={"Node"} /></li>
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          icon={FiSearch} 
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <CardNote data={
            {
              title: "ReactJS", 
              tags: [
                {id: '1', name: 'useEffect'},
                {id: '2', name: 'useState'}
              ] 
            }
          }/>
        </Section>
      </Content>  

      <NewNote to="/newnote">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}