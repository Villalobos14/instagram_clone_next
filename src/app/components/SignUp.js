"use client";
import React, {useState} from 'react';
import "../styles/StylesSignUp.css";
import {useRouter} from "next/navigation";
import {agregarUsuario} from "@/scripts/main";

const SignUp = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameUser, setNameUser] = useState('');
    const navigate = useRouter();



    function btnLogin() {
        navigate.push('/login')
    }
    async function btnRegister(event) {
        event.preventDefault();
       if (await agregarUsuario(usernameOrEmail, password, nameUser)){
            navigate.push('/home')
        }
    }
    return (

        <div className="loginContainer">
            <div className="container">
                <div className="content">

                    <i
                        style={{
                            backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png")',
                            backgroundPosition: '0px -52px',
                            backgroundSize: 'auto',
                            width: '175px',
                            height: '51px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block',
                        }}
                        role="img"
                        className=""
                        aria-label="Instagram"
                        data-visualcompletion="css-img"
                    ></i>


                    <h3>
                        Regístrate para ver fotos y vídeos de
                        tus amigos
                    </h3>

                    <div className="contenedor-btnFace">
                        <button className="btn-face">
                            <svg data-name="Layer 1" id="addad26c-c76f-4459-b531-8d2782d63202" viewBox="0 0 750 750" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="ae7b52d5-c285-49b3-846b-b956f860d49b" d="M405.51,571.13V392.43h61l8.72-69.74H405.51V279.12c0-19.61,6.54-34.86,34.87-34.86h37V181.05c-8.72,0-30.51-2.18-54.44-2.18-52.3,0-89.35,32.69-89.35,91.53v52.29H272.58v69.74h61v178.7Z" data-name="Path 1" id="fa3a6b04-de12-4b8c-b3fa-3825c59e9db7"></path></svg>
                            <span className="label">Inicia sesión con Facebook</span>
                        </button>
                    </div>





                    <form className="content__form">
                        <div className="content__inputs">
                            <label>
                                <input
                                    required
                                    type="text"
                                    value={usernameOrEmail}
                                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                                />
                                <span>Phone number, username, or email</span>
                            </label>

                            <label>
                                <input
                                    required
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span>Password</span>
                            </label>

                            <label>
                                <input
                                    required
                                    type="name user"
                                    value={nameUser}
                                    onChange={(e) => setNameUser(e.target.value)}
                                />
                                <span>Full name</span>
                            </label>


                            <h5>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. Más información

                                Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</h5>



                        </div>

                        <button onClick={btnRegister}>Sign Up</button>


                    </form>
                    <div className="content__or-text">
                        <span></span>
                        <span></span>

                    </div>
                    <div className="content__forgot-buttons">
                        <button onClick={btnLogin}>Do you have an account?</button>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default SignUp;
