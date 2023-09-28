import styled from "styled-components";

const Select = styled.select`
  box-sizing: border-box;
  width: 89%;
  background-color: #53585d;
  color: white;
  height: 50px;
  padding-left: 8px;
  @media screen and (min-width: 0) and (max-width: 768px) {
    width: 83%;
  }
`;
const Option = styled.option`
  box-sizing: border-box;
`;

const ListaOpciones = ({ categorias, actualizarValor }) => {
  const manejarValor = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <>
      {
        <Select onChange={manejarValor}>
          <Option hidden>Elige una categoria</Option>

          {categorias.map((categoria) => {
            return (
              <>
                {
                  <Option key={categoria.id} value={categoria.categoria}>
                    {categoria.titulo}
                  </Option>
                }
              </>
            );
          })}
        </Select>
      }
    </>
  );
};

export default ListaOpciones;
