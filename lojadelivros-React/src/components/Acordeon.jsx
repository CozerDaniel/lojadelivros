import Accordion from 'react-bootstrap/Accordion';

import '../css/acordeon.css'

function BookAcordeon(props) {
  return (
    <Accordion defaultActiveKey="0" flush className='acordeon'>
      <Accordion.Item eventKey="0" className='acordeon-item'>
        <Accordion.Header bsPrefix='person' className='acordeon-header'>descrição</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          {props.descricao} 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='acordeon-item'>
        <Accordion.Header className='acordeon-header'>autor</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          {props.autor}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='acordeon-item'>
        <Accordion.Header className='acordeon-header'>outras informações</Accordion.Header>
        <Accordion.Body className='acordeon-body'>
          <b> Idioma: </b> {props.idioma} <br/>
          <b> Editora: </b> {props.editora} <br/>
          <b> Data de publicação: </b> {props.publicacao} <br/>
          <b> Quantidade de página: </b> {props.npaginas}

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BookAcordeon;