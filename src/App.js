import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {

  //useState solo puede usarse adentro de un componente
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de Software e Instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora de Alura Latam",
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState(//Lista de Equipos
  [
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    } 
  ])

  //Ternario --> condición ? seMuestra : noSeMuestra   -- LÍNEA 23 y 24
  //Condición && seMuestra                      -- LINEA 25  Funciona igual a la línea 23 y 24 pero es más limpio

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {

    //Spread Operator: Crear una copia de los valores actuales y se lo agrega al colaborador
    actualizarColaboradores([...colaboradores, colaborador])

  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }  
  
  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav =  !colaborador.fav
      }
      return colaborador
    })
    
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}

      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        //REGLA DE USAR "MAP" cada vez que se va usar hay que usar una "Key" que es un identificador único
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />)
      }

      <Footer />
    </>
  );
}

//PÁGINAS PARA PUBLICAR PROYECTOS DE REACT:
  //1. Vercel
  //2. Netlify
  //3. Github Pages

export default App;
