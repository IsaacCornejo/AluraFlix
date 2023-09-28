import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: none;
  background-color: #53585d;
  color: white;
  padding: 8px;
  margin-bottom: 1rem;
  font-family: "Montserrat", sans-serif;
`;
const Label = styled.label`
  box-sizing: border-box;
  display: block;
  width: 100%;
  position: relative;
  background-color: #53585d;
  color: white;
  margin-bottom: -5px;
  text-align: left;
  padding-left: 8px;
  font-size: 14px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  box-sizing: border-box;
  padding: 1rem;
`;

const Campo = ({
  label,
  placeholder,
  type = "text",
  value,
  actualizarValor,
}) => {
  const manejarValor = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <>
      {
        <Container>
          <Label placeholder={placeholder}>{label}</Label>
          <Input type={type} onChange={manejarValor} value={value} required />
        </Container>
      }
    </>
  );
};

export default Campo;
