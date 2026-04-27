function crearItem() {
    const contenedor = document.getElementById('lista-elementos');
    const div = document.createElement('div');
    div.className = 'caja';
    div.innerHTML = '<h3>Servicio</h3><p>Activo</p>';
    contenedor.appendChild(div);
}

function editarTodo() {
    const cajas = document.querySelectorAll('.caja');
    cajas.forEach(caja => {
        caja.style.backgroundColor = '#ff8800';
        caja.style.color = 'white';
        caja.style.borderRadius = '25px';
        caja.querySelector('h3').innerText = 'Editado';
    });
}

function borrarItem() {
    const contenedor = document.getElementById('lista-elementos');
    if (contenedor.lastElementChild) {
        contenedor.removeChild(contenedor.lastElementChild);
    }
}
