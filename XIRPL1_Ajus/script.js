const button = document.getElementById('showImageButton');

// Tambahkan event listener ke tombol
button.addEventListener('click', function(){

    let img = document.querySelector('img');

    // jika foto kosong
    if(img.getAttribute("src") == ""){
        img.setAttribute("src", "wahyungantuk.jpeg"); //tampilkan foto  wahyu ngantuk 
    }
    else if(img.getAttribute("src") == "wahyungantuk.jpeg"){
        img.setAttribute("src", "");
    }
    
})