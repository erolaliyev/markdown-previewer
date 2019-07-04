import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 2.5%;
  width: 45%;

  @media (max-width: 600px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const Header = styled.h2`
  text-align: center;
  margin: 1% 0;
  color: #373737;
`;

const MarkdownPreview = styled.div`
  border: 1px solid #373737;
  margin: 0;
  border-radius: 0.5rem;
  display: inline-block;
  padding: 0 2%;
`;

DOMPurify.setConfig({ ADD_ATTR: ['target'] });

const renderer = new marked.Renderer();

marked.setOptions({
  renderer,
  breaks: true
});

renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}" title="${title}" >${text}</a>`;

const Preview = props => (
  <AppWrapper>
    <Header>Preview</Header>
    <MarkdownPreview
      id='preview'
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked(props.value, { renderer }))
      }}
    />
  </AppWrapper>
);

export default Preview;
