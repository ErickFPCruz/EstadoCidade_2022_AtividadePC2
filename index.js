let campoEstado = null;
let campoCidade = null;
let estadoCidade = {
    estado: null,
    cidadeTexto: null,
    cidadeValor: null
};

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const campoExibicao = document.getElementById("exibeCidadeEstado");
    campoEstado = document.getElementById("selectEstado");
    campoCidade = document.getElementById("selectCidade");

    campoEstado.addEventListener("change", () => {
        estadoCidade.estado = campoEstado.value;

        if (estadoCidade.estado == 0) {
            campoCidade.setAttribute("disabled", "");
            RemoveOptions(campoCidade);
            campoExibicao.innerText = "";
        }
        else {
            RemoveOptions(campoCidade);
            AdicionaCidades(estadoCidade.estado);
            campoCidade.removeAttribute("disabled");
        }
    });

    campoCidade.addEventListener("change", () => {
        estadoCidade.cidadeValor = campoCidade.value;
        estadoCidade.cidadeTexto = campoCidade.options[campoCidade.selectedIndex].text;

        if (estadoCidade.cidadeValor != 0) {
            campoExibicao.innerText = `${estadoCidade.cidadeTexto}/${estadoCidade.estado}`;
        }
    });
}

function AdicionaCidades(estado) {
    if (estado == "PR") {
        CriaOption(1, "Curitiba");
        CriaOption(2, "Cascavel");
        CriaOption(3, "Maringá");
    }

    else if (estado == "SC") {
        CriaOption(4, "Florianópolis");
        CriaOption(5, "Blumenau");
        CriaOption(6, "Lages");
    }

    else if (estado == "RS") {
        CriaOption(7, "Porto Alegre");
        CriaOption(8, "Gramado");
        CriaOption(9, "Caxias do Sul");
    }
}

function CriaOption(vl, txt) {
    let opt = document.createElement("option");
    opt.value = vl;
    opt.text = txt;
    campoCidade.add(opt);
}

function RemoveOptions(campoCidade) {
    while (campoCidade.options.length > 1) {
        campoCidade.remove(1);
    }
}