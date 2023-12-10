import React, { useState, useEffect } from "react";
import "../styles/StylesMenuCentral.css";
import { cargarPubs } from "@/scripts/main";

export default function MenuCentral() {
    const [text, setText] = useState([]);
    const [image, setImage] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [fechaPub, setFechaPub] = useState([])
    const [horaPublicacion, setHoraPublicacion] = useState([]);


    // Función para cargar las imágenes desde la base de datos
    const cargarImagenesDesdeBD = async () => {
        const pubs = await cargarPubs();
        let imagenes = [];
        let textos = [];
        let usuarios = [];
        let fechas = [];
        let horas = [];
        if (pubs) {
            pubs.imagedir.map((pub, index) => {
                imagenes[index] = pub;
            });
            pubs.textdir.map((pub, index) => {
                textos[index] = pub;
            });
            pubs.user?.map((pub, index) => {
                usuarios[index] = pub;
            });
            pubs.fechas.map((pub, index) =>{
                fechas[index] = pub;
                console.log(pub);
            })
            pubs.horas.map((pub, index) => {
                horas[index] = pub;
            })
            setUsuario(usuarios);
            setImage(imagenes);
            setText(textos);
            setFechaPub(fechas);
            setHoraPublicacion(horas);
        }
    };

    useEffect(() => {
        cargarImagenesDesdeBD();
    }, []);

    return (
        <main className="container-menu-central">

            <div className="conten">
                {text.map((text, index) => (
                    <div key={index}>
                        <div className="user-info">
                            <img className="imguser" src={"/assets/user.jpg"} alt="jpg user" />
                            <h1>{usuario[index]}</h1>
                            <span className="time">{horaPublicacion[index]}-{fechaPub[index]}</span>
                        </div>
                        <img
                            className="img1"
                            src={"http://localhost:3300/" + image[index]}
                            alt={`Imagen ${index}`}
                        />
                        <h1 className="text_img">{text}</h1>
                    </div>
                ))}
            </div>
        </main>
    );
}
