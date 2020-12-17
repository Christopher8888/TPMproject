function validasi () {  
var Name = document.getElementById('name').value;
// const errorName = document.getElementById('errorname')
var email = document.getElementById('email').value;
var phone = document.getElementById('number').value;

        if( Name !="" && email !="" && phone != "") {
            return true;
        }else {
            alert(' you must fill in all the parts of the form !');
        }

}

function validasi () {  
    var Name = document.getElementById('name').value;
    // const errorName = document.getElementById('errorname')
    var email = document.getElementById('email').value;
    var phone = document.getElementById('number').value;

    if( Name !="" && email !="" && phone != "") {
        var text;
        var input= prompt ("Are you sure want to submit the form?", "yes");
    }

}
function mustnumber (evt) {
    var phone = (evt.which) ? evt.which: evt.keycode 
    if ( phone > 31 && (phone < 48 || phone > 57))
    return false;
}



// // form validation 

// form.addEventListener('submit',(e)=>{
//     let pesan = []

//     if(Name.value.length > 10) {
//         pesan.push('NAME MUST BE NO LONGE THAN 10 CHARACTER')
//     }

// // kalo isi arraynya bukan nol, karena user input sesuatu maka terjadi:
//     if(pesan.length > 0){
//         // menahan trigger submit button ke server 
//         e.preventDefault();
//         errorName.innerText = pesan.join(',')
//     }

// })
