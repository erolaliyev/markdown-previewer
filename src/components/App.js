import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styled, { createGlobalStyle } from 'styled-components';

const placeholder = `
# Header

## Sub-header

[Link](https://www.freecodecamp.com)

\`<p>Inline code</p>\`

\`\`\`;
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- List item

> Block Quote

**Bold text**

![React Logo w/ Text](https://goo.gl/Umyytc)`;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width: 100%;
  }
  body {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    font-size: 1.6rem;
    width: 100%;
    background-color: #F4F4F4;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    width: 100%;
  }

  code, pre { 
    font-size: 1rem !important;
    background-color: #ffffff;
    max-width: 90%;
  }

  img {
    max-width: 100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.h1`
  text-align: center;
  color: #373737;
`;

const MarkdownBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    flex-flow: column nowrap;
  }
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <Header>Markdown Previewer</Header>
        <MarkdownBox>
          <Editor value={this.state.value} onChange={this.handleChange} />
          <Preview value={this.state.value} />
        </MarkdownBox>
      </AppWrapper>
    );
  }
}
