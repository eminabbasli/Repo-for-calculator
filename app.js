let birinci_eded = 14;
let ikinci_eded = 4;
let toplam_sonrasi = 0;
let cıxma_sonrasi = 0;
let vurma_sonrasi = 0;
let bolme_sonrasi = 0;



function topla() {
    toplam_sonrasi = birinci_eded+ikinci_eded ;
    document.getElementById("netice").innerHTML = "Neticemiz: " + toplam_sonrasi;
}



function cıxma() {
    cıxma_sonrasi = birinci_eded-ikinci_eded ;
    document.getElementById("netice").innerHTML = "Neticemiz: " + cıxma_sonrasi;
}


function vurma() {
    vurma_sonrasi = birinci_eded*ikinci_eded ;
    document.getElementById("netice").innerHTML = "Neticemiz: " + vurma_sonrasi;
}



function bolme() {
    bolme_sonrasi = birinci_eded/ikinci_eded ;
    document.getElementById("netice").innerHTML = "Neticemiz: " + bolme_sonrasi;
}