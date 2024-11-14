document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculation-form');
    const taraCanastaSelect = document.getElementById('taracanasta');

    taraCanastaSelect.addEventListener('change', function() {
        if (taraCanastaSelect.value === '1.8') {
            taraCanastaSelect.classList.remove('bg-green');
            taraCanastaSelect.classList.add('bg-red');
        } else if (taraCanastaSelect.value === '2.0') {
            taraCanastaSelect.classList.remove('bg-red');
            taraCanastaSelect.classList.add('bg-green');
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtén los valores de los inputs como decimales
        const numCanastas = parseFloat(document.getElementById('numcanastas').value);
        const taraCanasta = parseFloat(taraCanastaSelect.value);
        const pesoBruto = parseFloat(document.getElementById('pesobruto').value);

        // Realiza el cálculo
        const resultado = pesoBruto - (numCanastas * taraCanasta);

        // Muestra el resultado
        document.getElementById('resultado').textContent = `${resultado.toFixed(2)} kl.`;
    });
});