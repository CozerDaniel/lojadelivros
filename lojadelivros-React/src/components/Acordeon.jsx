import Accordion from 'react-bootstrap/Accordion';

import '../css/acordeon.css'

function FlushExample() {
  return (
    <Accordion defaultActiveKey="0" flush className='acordeon'>
      <Accordion.Item eventKey="0" className='acordeon-item'>
        <Accordion.Header bsPrefix='person' className='acordeon-header'>descrição</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          Descrição do livro
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='acordeon-item'>
        <Accordion.Header className='acordeon-header'>autor</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          Nome do autor
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='acordeon-item'>
        <Accordion.Header className='acordeon-header'>outras informações</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          Idioma: idioma <br/>
          editora: editora <br/>
          Quantidade de páginas: numero

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FlushExample;