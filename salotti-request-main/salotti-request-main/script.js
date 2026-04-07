
const btnPetisco = document.getElementById('btnEnviar');
const btnSoneca = document.getElementById('btnExcluir');


btnPetisco.addEventListener('click', () => {
   
    const originalText = btnPetisco.innerHTML;
    btnPetisco.innerHTML = "";
    
    btnPetisco.style.transform = 'scale(1.1)';

    setTimeout(() => {
        btnPetisco.innerHTML = originalText;
        btnPetisco.style.transform = 'scale(1)';
        alert('Ok');
    }, 400);
});


btnSoneca.addEventListener('click', () => {
    const originalText = btnSoneca.innerHTML;
    btnSoneca.innerHTML = "";
    btnSoneca.style.opacity = '0.7';

    setTimeout(() => {
        btnSoneca.innerHTML = originalText;
        btnSoneca.style.opacity = '1';
        alert('Erro');
    }, 1000); 
});