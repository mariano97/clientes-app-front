import React, { Component } from 'react';
import { AsesorService } from '../../services/asesor.service';

class AsesorComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            asesores: []
        };
        this.asesorService = new AsesorService();
        this.consultarAsesores = this.consultarAsesores.bind(this);
    }

    componentDidMount() {
        this.consultarAsesores();
    }

    consultarAsesores() {
        this.asesorService.getAll().then((response) => {
            this.setState({
                asesores: response.data
            });
        }).catch(e => {
            console.log(e);
        })
    }

    render() {
        const { asesores } = this.state;
        return (
            <div>{!asesores ? "No Data" : (
                asesores.map((asesor, index) => {
                    return (
                        <div>
                            <h1>{asesor.nombre}</h1>
                            <h3>{asesor.correoElectronico}</h3>
                        </div>
                    );
                })
            )}</div>
        );
    }
}
 
export default AsesorComponent;
