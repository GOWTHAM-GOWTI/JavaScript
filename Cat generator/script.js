function generate(){
    let image= document.createElement('img');
    image.setAttribute('id','img-gen')
    image.src="./images/d12.jpg"
    document.getElementById('gen-img').appendChild(image);
}

function clearimg() {
    document.getElementById('img-gen').remove();
}