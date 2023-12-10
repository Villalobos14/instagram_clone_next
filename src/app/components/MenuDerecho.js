"use client"
import "../styles/StylesMenuDerecho.css";
import { useRouter } from "next/navigation";
import React, {useEffect, useState} from "react";
import {cerrarSesion} from "@/scripts/main";

export default function MenuDerecho() {
    const navigate = useRouter();
    const [nombre, setNombre] = useState("Nombre de usuario desde BD");
    const [imagenPerfil, setImagePerfil] = useState(""); // VARIABLE PARA LA IMAGEN


    async function logout() {
        try {
            await cerrarSesion();
            navigate.push('/login')
        }catch (e) {
            navigate.push('/login')
        }

    }

    const cargarImagenUsuario = () => {
        // Aquí we puedes llamar a lau base de datos para obtener la imagen del usuario y actualizar 'imagenPerfil'
    };

    useEffect(() => {
        cargarImagenUsuario();
    }, []);

    return (
        <main className="container-menuDerecho">
            <div className="contenidoUser">
                <div className="img2">
                    <img className="imguser" src={imagenPerfil} alt="Imagen de usuario" />
                </div>

                <div className="textos">
                    <h3>{nombre}</h3>
                    <p>{nombre} (user name)</p>
                </div>

                <div className="buton">
                    <button onClick={logout} className="btncambiar">Cerrar Sesion</button>
                </div>

            </div>


            <div className="sugerencias">
                <div className="texto">
                    <h3>Sugerencias para ti</h3>
                    <h3>ver todo</h3>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>

                <div className="personas">
                    <img className="imguser" src={"/assets/image 40.svg"} alt="AURA-logo.png" />
                    <p>victor.vll te sigue </p>
                    <h4>seguir</h4>
                </div>
                
            </div>
            
            <div className="information">
                <p>
                    Información  Ayuda   Prensa   API   Empleo
                    Privacidad   Condiciones   Ubicaciones   Idioma
                    Meta Verified

                    © 2023 INSTAGRAM FROM META

                </p>
            </div>
        </main>
    );
}
