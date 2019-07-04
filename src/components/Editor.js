import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 2.5%;
  width: 45%;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0 auto 5% auto;
  }
`;

const TextArea = styled.textarea`
  background-color: #373737;
  color: #ffffff;
`;

const Header = styled.h2`
  text-align: center;
  margin: 1% 0;
  color: #373737;
`;

const Editor = props => (
  <AppWrapper>
    <Header htmlFor='editor'>Editor</Header>
    <TextArea
      id='editor'
      name='editor'
      rows='30'
      cols='100'
      wrap='true'
      autoFocus
      value={props.value}
      onChange={props.onChange}
    />
  </AppWrapper>
);

export default Editor;
