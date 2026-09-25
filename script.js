const cadastro = document.getElementById("cadastro");

const login = document.getElementById("login");

function mostrarLogin() {

    cadastro.classList.add("escondido");

    login.classList.remove("escondido");

}

function mostrarCadastro() {

    login.classList.add("escondido");

    cadastro.classList.remove("escondido");

}

function mostrarSenha(id) {

    const senha = document.getElementById(id);


    if (senha.type === "password") {

        senha.type = "text";

    } else {

        senha.type = "password";

    }

}


function googleLogin() {

    alert(
        "Login com Google será implementado futuramente."
    );

}

document
    .getElementById("cadastroForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const email =
            document.getElementById("email").value;

        const senha =
            document.getElementById("senha").value;

        const cidade =
            document.getElementById("cidade").value;

        const estado =
            document.getElementById("estado").value;

        const termos =
            document.getElementById("termos").checked;


        if (nome === "") {

            alert("Digite seu nome.");

            return;
        }


        if (email === "") {

            alert("Digite seu e-mail.");

            return;
        }

        if (senha.length < 8) {

            alert(
                "A senha precisa ter pelo menos 8 caracteres."
            );

            return;
        }

        if (cidade === "") {

            alert("Digite sua cidade.");

            return;
        }


        if (estado === "") {

            alert("Selecione seu estado.");

            return;
        }


        if (!termos) {

            alert("Aceite os termos de uso.");

            return;
        }


        alert(
            "Cadastro realizado com sucesso! 🌱"
        );


        this.reset();

    });

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("emailLogin").value;

        const senha =
            document.getElementById("senhaLogin").value;


        if (email === "") {

            alert("Digite seu e-mail.");

            return;
        }


        if (senha === "") {

            alert("Digite sua senha.");

            return;
        }

        alert(
            "Login realizado com sucesso! 🌱"
        );

    });
