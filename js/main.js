document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtén los valores de los inputs como decimales
        const numCanastas = parseFloat(document.getElementById('numcanastas').value);
        const taraCanasta = parseFloat(document.getElementById('taracanasta').value);
        const pesoBruto = parseFloat(document.getElementById('pesobruto').value);

        // Realiza el cálculo
        const resultado = pesoBruto - (numCanastas * taraCanasta);

        // Muestra el resultado
        document.getElementById('resultado').textContent = ` ${resultado.toFixed(2)}`;
    });
});
