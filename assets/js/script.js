document.addEventListener("DOMContentLoaded", function(event){
    dinamica = document.getElementById('dinamica')
    hidrostatica = document.getElementById('hidrostatica')
    hidrodinamica = document.getElementById('hidrodinamica')
    gravitacao = document.getElementById('gravitacao')
    estatica = document.getElementById('estatica')

    var contador_de_formulas = 0;

    if(dinamica != null){
        dinamica.addEventListener('click', function(event){
            img = dinamica.querySelector('img')
            img.src='assets/img/dinamica_bloqueada.png'
            function reseta_img() {
                img.src='assets/img/dinamica.png'
            }
            setTimeout(reseta_img, 2000)
        });
    }

    if(hidrostatica != null){
        hidrostatica.addEventListener('click', function(event){
            img2 = hidrostatica.querySelector('img')
            img2.src='assets/img/hidrostatica_bloqueada.png'
            function reseta_img2() {
                img2.src='assets/img/hidro-removebg-preview.png'
            }
            setTimeout(reseta_img2, 2000)
        });
    }

    if(hidrodinamica != null){
        hidrodinamica.addEventListener('click', function(event){
            img3 = hidrodinamica.querySelector('img')
            img3.src='assets/img/hidrodinamica_bloqueada.png'
            function reseta_img3() {
                img3.src='assets/img/hidrod.png'
            }
            setTimeout(reseta_img3, 2000)
        });
    }
    
    if(gravitacao != null){
        gravitacao.addEventListener('click', function(event){
            img4 = gravitacao.querySelector('img')
            img4.src='assets/img/gravitacao_bloqueada.png'
            function reseta_img4() {
                img4.src='assets/img/gravitacao.png'
            }
            setTimeout(reseta_img4, 2000)
        });
    }

    if(estatica != null){
        estatica.addEventListener('click', function(event){
            img5 = estatica.querySelector('img')
            img5.src='assets/img/estatica_bloqueada.png'
            function reseta_img5() {
                img5.src='assets/img/estatica.png'
            }
            setTimeout(reseta_img5, 2000)
        });
    }

    var url = window.location.href;
    if(url.includes('index') || url.includes('mecanica') || url.includes('cinematica') || url.includes('mruv'))
    {
        document.getElementById('home').src='assets/img/home_preenchido.png';
    }
    if(url.includes('outras') || url.includes('matematica') || url.includes('materias'))
    {
        document.getElementById('lupa').src='assets/img/lupa_preenchida.png';
    }
    if(url.includes('formulas') || url.includes('eletricidade'))
    {
        document.getElementById('formula').src='assets/img/bloco_preenchido.png';
    }

    if(url.includes('eletricidade'))
    {
        contador_formulas()
        var itens_nao_selecionados = document.querySelector('.nao-selecionados').querySelectorAll('li');
        for (let x = 0; x < itens_nao_selecionados.length; x++) {
            itens_nao_selecionados[x].addEventListener('click', selecionar);   
        }

        var itens_selecionados = document.querySelector('.selecionados').querySelectorAll('li');
        for (let x = 0; x < itens_selecionados.length; x++) {
            itens_selecionados[x].addEventListener('click', nao_selecionar);   
        }
    }

})

function contador_formulas(){
    var span_restantes = document.getElementById('restantes');
    var span = document.getElementById('quantidade_formulas');
    var quantidade_disponiveis = document.querySelector('.selecionados').querySelectorAll('.oculto').length;
    var quantidade_total = document.querySelector('.selecionados').querySelectorAll('li').length;
    span.innerHTML = quantidade_disponiveis;
    span_restantes.innerHTML = quantidade_disponiveis;
    
    /* Mostra plural */
    if(quantidade_disponiveis == 1)
    { document.getElementById('plural').classList.add('oculto'); }
    else
    { document.getElementById('plural').classList.remove('oculto'); }

    /* Mostra quando não houver nenhuma formula para fixar*/
    if(quantidade_disponiveis == 0)
    {   
        document.getElementById('nenhuma_formula').classList.remove('oculto'); 
        document.getElementById('pode_adicionar').classList.add('oculto');
    }else{
        document.getElementById('nenhuma_formula').classList.add('oculto');
        document.getElementById('pode_adicionar').classList.remove('oculto');
    }

    /* Mostra quando não houver formula fixada */
    if(quantidade_disponiveis == quantidade_total)
    {   document.getElementById('nenhuma_formula_fixada').classList.remove('oculto'); 
        document.getElementById('pode_adicionar').classList.add('oculto');
    }
    else
    {   document.getElementById('nenhuma_formula_fixada').classList.add('oculto'); }
}

function selecionar(){
    var nome_classe = this.classList[0];
    document.querySelector('.selecionados').querySelector('.'+nome_classe).classList.remove('oculto');
    document.querySelector('.nao-selecionados').querySelector('.'+nome_classe).classList.add('oculto');
    contador_formulas();
}

function nao_selecionar(){
    var nome_classe = this.classList[0];
    document.querySelector('.nao-selecionados').querySelector('.'+nome_classe).classList.remove('oculto');
    document.querySelector('.selecionados').querySelector('.'+nome_classe).classList.add('oculto');
    contador_formulas();
}