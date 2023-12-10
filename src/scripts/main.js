export async function validarLogin(email, password, user) {
    if (email === '' || password === '' || user === '')
        return null;
    const usuario = {
        email: email,
        password: password,
        user: user,
    }
    const response = await fetch('http://localhost:3300/auth', {
        method: 'POST',
        mode: 'cors',
        credentials: "include",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        withCredentials: true,
        body: JSON.stringify(usuario)
    })
    if (response.ok){
        return true;
    }
    return null;
}

export async function agregarUsuario(email, password, user) {
    if (email === '' || password === '' || user === '')
        return null;
    else {
        const usuario = {
            email: email,
            password: password,
            user: user,
        }
        try {
            const response = await fetch('http://localhost:3300/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;chartset=utf-8'
                },
                body: JSON.stringify(usuario)
            })
            if (response.ok){
                return validarLogin(email, password, user);
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    }

}

export async function cerrarSesion () {
    console.log("xd")
    const response = await fetch('http://localhost:3300/auth', {
        method: 'GET',
        mode: 'cors',
        credentials: "include",
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },

    })
    console.log(response);
}

export async function subirPubs(fileData, text) {
    if (fileData){
        const formData = new FormData();
        formData.append('image', fileData);
        formData.append('text', text);
        console.log(formData.getAll('text'))
        const response = await fetch('http://localhost:3300/pub', {
            method: 'POST',
            credentials: "include",
            withCredentials: true,
            body: formData
        })
    }
}

export async function cargarPubs() {
    try {
        const response = await fetch('http://localhost:3300/pub')
        if (response.ok){
            return response.json();
        }
    } catch (error) {
        console.log(error);
    }
    return null
}