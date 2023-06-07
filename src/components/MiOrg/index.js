import "./MiOrg.css"


const MiOrg = (props) => {
    //Estado - hooks
    //useState "Usa el Estado"
    //Usar la función useState()

    //Forma que siempre se usa el estado:
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState("Harland");

    /*const [mostrar, actualizarMostrar] = useState(true)
    

    const manejarClick = () => {
        console.log("Mostrar/Ocultar Elemento", !mostrar);
        actualizarMostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg