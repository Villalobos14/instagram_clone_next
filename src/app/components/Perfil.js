'use client';
import React, {useState} from 'react';
import "../styles/Perfil.css"
import Swal from 'sweetalert2';
import MenuIzquierdo from "@/app/components/MenuIzquierdo";
import {subirPubs} from "@/scripts/main";

function Perfil() {
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescription] = useState("");/** manuel en esta variable se guarda todo lo que escribe el usuario para que lo subas a la base de datos*/

    async function btnsubmit() {
        try {
            await subirPubs(imagen, descripcion);
            Swal.fire('Publicación exitosa', 'Tu publicación se ha subido con éxito', 'success');
        } catch (error) {
            Swal.fire('Ups, algo salió mal', 'Ha ocurrido un error al subir la publicación', 'error');
        }
    }

    return (
        <div className="perfil-container">
            <div className="left-section">
                <MenuIzquierdo/>
            </div>


            <div className="right-section">
                <div className="card">
                <div className="card-header">
                <h2>Crear una nueva publicación</h2>

            <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                        <textarea 
                      required cols="50" rows="10" id="textarea" name="textarea" value={descripcion} onChange={(e) => setDescription(e.target.value)} ></textarea>
                        </div>
                    </form>
                </div>

            </div>
                    {imagen && <div >
                        <img className="img_upload" src={URL.createObjectURL(imagen)} alt={'...'}/>
                    </div>
                    }

                    <div className="card-body">
                        <p>Arrastra las fotos y videos aquí</p>
                        <button type="file" className="seleccionar-button">
                            <input type={"file"}
                                   onChange={(e) => setImagen(e.target.files[0])}/>
                            Seleccionar de la computadora</button>
                    </div>
                    <button className="btn-submit" onClick={btnsubmit} type="submit">Submit</button>

                </div>

            </div>


        </div>
    );
}

export default Perfil;
