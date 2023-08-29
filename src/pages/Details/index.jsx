import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const handleRemove = async () => {
    const confirm = window.confirm('Deseja realmente excluir esta nota?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
    
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      { data &&
        <main>
          <Content>
            <ButtonText 
              title="Excluir nota"
              onClick={handleRemove}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links &&
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a target="_blank" href={link.url} rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>  
              </Section>
            }

            {data.tags &&
              <Section title="Marcadores">
                { data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)} 
                      title={tag.name}
                    /> 
                  ))
                }
              </Section>   
            }
            <Button className="buttonBack" 
              onClick={() => navigate(-1)}
              title="Voltar"
            />
          </Content>
        </main>
      }
    </Container>
  );
}