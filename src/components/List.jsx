import styled from 'styled-components';
import { episodes } from '../data/episodes';

const ListContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    background: white;
    padding: 60px 80px;
    overflow-y: scroll;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;

  h1 {
    font-weight: bold;
    font-size: .80rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #A7A7A7;
    margin: 0 0 40px 0;
    padding: 0;
    width: 100%;
  }
`;

const Li = styled.li`
    list-style: none;
    cursor: pointer;
    margin-bottom: 24px;
`;

const Label = styled.label`
    cursor: pointer;
    input {
        display: none;
    }
`;

const Button = styled.button`
  background: #8C59FF;
  border: none;
  border-radius: 24px;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 8px 25px;
  color: white;
  line-height: 1;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background: #543599;
  }
  :active {
      transform: scale(.96);
  }
`;

const MarkedMultiply = (e, episode) => {
    if (
        e.getModifierState("Control")
        /*
        coloque el evento de la tecla "Shift"
        porque el desafio lo pide
        pero RECOMIENDO usar la tecla "Control" 
        para una mejor experiencia.
        */
        || e.getModifierState("Shift")
    ) {

        let inputs = document.getElementsByTagName('input');

        for (let i = episode.id - 2; i >= 1; --i) {
            if (!inputs[i].checked) inputs[i].click();
            else return;
        }
    }

}

const MarkedAll = () => {
    let button = document.getElementById('markedAll')
    let inputs = document.getElementsByTagName('input');
    let ii = Array.from(inputs);
    if (button.innerHTML === 'marked as played') {

        button.innerHTML = "Dismark All";

        ii.map(episode => {
            if (!episode.checked) episode.click();
            return true;
        });

    } else {
        button.innerHTML = "marked as played";
        ii.map(episode => {
            if (episode.checked) episode.click();
            return true;
        });

    }
}

const List = () => {
    return (
        <ListContainer>
            <Content>
                <h1>Listen to all the Compressed.fm Episodes</h1>
                <ul>
                    {episodes.map(episode => {
                        return (
                            <Li key={episode.id}>
                                <Label
                                    htmlFor={`episode-${episode.id}`}
                                    className='List__label'
                                    onClick={(e) => MarkedMultiply(e, episode)}
                                >
                                    <input type="checkbox" name={`episode-${episode.id}`} id={`episode-${episode.id}`} />
                                    <span>{episode.id} || {episode.name}</span>
                                </Label>
                            </Li>
                        )
                    }
                    )}
                </ul>
                <Button
                    onClick={MarkedAll}
                    id="markedAll"
                >
                    marked as played
                </Button>
            </Content>
        </ListContainer>
    )
}

export default List
