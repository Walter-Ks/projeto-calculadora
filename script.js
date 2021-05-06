function inserir(tecNumero) {
   let numero = document.getElementById('txtPainel').innerHTML;
   document.getElementById('txtPainel').innerHTML = numero + tecNumero;
}

function ce() {
   document.getElementById('txtPainel').innerHTML = '';
}

function apagar() {
   let limpa = document.getElementById('txtPainel').innerHTML;
   document.getElementById('txtPainel').innerHTML = limpa.substring(0, limpa.length -1);
}

function igual() {
   let resultado = document.getElementById('txtPainel').innerHTML;
   if(resultado) {
      document.getElementById('txtPainel').innerHTML = eval(resultado)
   }
}