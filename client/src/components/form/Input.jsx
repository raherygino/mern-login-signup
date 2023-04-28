import Form from 'react-bootstrap/Form';


const Input = (props) => {
    return (
        <Form.Floating className="mb-3">
            <Form.Control
                id={ props.id }
                type={ props.type }
                name={ props.id }
                placeholder={ props.label } />
            <label htmlFor={ props.id }>{ props.label }</label>
        </Form.Floating>
    );
}

export default Input;