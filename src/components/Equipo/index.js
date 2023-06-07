import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) =>{

    //Destructuración
    //Manera para no repetir tanto el props.

    const {titulo, colorPrimario, colorSecundario, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    /*return <section className="equipo" style={{backgroundColor: props.datos.colorSecundario}}>
        <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">


        </div>

    </section> */

    const estiloTitulo = {borderColor: colorPrimario}
    const estiloSubrayado = {backgroundColor: hexToRgba(colorPrimario, 0.6)}
    
    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={estiloSubrayado}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(event) => {
                        actualizarColor(event.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {   
                        //key siempre es importante
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>    

}

export default Equipo