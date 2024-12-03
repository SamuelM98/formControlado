import { useState } from "react";

const FormularioControlado = () => {
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(miembro)
  }

  const [miembro, setMiembro] = useState({
    codigo: '',
    name: '',
    lastname: '',
    type: '',
  });

  return (
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Codigo" name="codigo" autoComplete="false" className="form-control mb-2" onChange={e=>setMiembro({...miembro,codigo:e.target.value})}/>
        <input type="text" placeholder="Nombre" name="name" autoComplete="false" className="form-control mb-2" onChange={e=>setMiembro({...miembro,name:e.target.value})}/>
        <input type="text" placeholder="Apellidos" name="lastname" autoComplete="false" className="form-control mb-3" onChange={e=>setMiembro({...miembro,lastname:e.target.value})}/>
        <label htmlFor="tipo" className="mb-2">Tipo de Membresia:</label>
        <select name="type" value={miembro.type} id="tipo" className="form-select mb-2" onChange={(e)=>setMiembro({...miembro, type: e.target.value})}>
          <option value="basica">Basica - S/100.00</option>
          <option value="gold">Gold - S/200.00</option>
          <option value="premiun">Premiun - S/300.00</option>
        </select>
        <div className="container botones mt-3">
          <button type="reset" className="btn btn-danger">Limpiar</button>
          <button type="submit" className="btn btn-primary">Registrar</button>
        </div>
      </form>
  )
}

export default FormularioControlado
