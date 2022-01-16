import styled from 'styled-components';

//Components
import Cover from './components/Cover';
import List from './components/List';


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const App = () => {

    return (
        <Container>
            <Cover />
            <List />
        </Container>
    );

}


export default App;