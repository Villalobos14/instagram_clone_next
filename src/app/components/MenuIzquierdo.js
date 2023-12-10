"use client"
import "../styles/StylesMenuIzquierdo.css";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {cerrarSesion} from "@/scripts/main";
export default function MenuIzquierdo() {
    const navigate = useRouter();
    const [imagenPerfil, setImagePerfil] = useState(""); // VARIABLE PARA LA IMAGEN


    function inicio() {
        navigate.push('/home')
    }

    async function logout() {
        try {
            await cerrarSesion();
            navigate.push('/login')
        }catch (e) {
            navigate.push('/login')
        }

    }

    function perfil() {

    }

    function crear() {
        navigate.push('/crear')
    }

    const cargarImagenUsuario = () => {
        // Aquí we puedes llamar a lau base de datos para obtener la imagen del usuario y actualizar 'imagenPerfil'
    };

    useEffect(() => {
        cargarImagenUsuario();
    }, []);



    return (
        <main className="container-menu-izquierdo">
            <img className="imgLogo" src={"/assets/logo.svg"} alt="intagram-logo.png" />
            <div className="botones-container">
                <button onClick={inicio} className="boton">
                    <img className="imgbtns" src={"/assets/image 29.svg"} alt="intagram-logo.png" />
                    Inicio
                </button>
                <button onClick={perfil} className="boton">
                    <img className="imguser" src={"/assets/user.jpg"} alt="jpg user" />
                    Perfil
                </button>

                <button onClick={crear} className="boton">
                    <img className="imgbtns" src={"/assets/image 56.svg"} alt="intagram-logo.png" />
                    Crear
                </button>

                <button onClick={logout} className="boton">
                    Cerrar sesion
                </button>
            </div>
        </main>


    );
}
