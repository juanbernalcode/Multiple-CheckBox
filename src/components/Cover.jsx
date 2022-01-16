import styled from 'styled-components';
import cover from '../images/podcast-cover.png';

const CoverContainer = styled.div`
    filter: drop-shadow(0px 4px 24px #453F3F);
`;

const Cover = () => {
    return (
        <CoverContainer>
            <img src={cover} alt="cover" />
        </CoverContainer>
    )
}

export default Cover;
