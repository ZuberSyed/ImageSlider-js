let i=0;
let images=[];
let time =3000;

//images list
images[0]= "Images/image1.jpeg";
images[1]="Images/image2.jpeg";
images[2]="Images/image3.jpeg";
images[3]="Images/image4.jpeg";

//changing images
function changeImage(){
    document.slider.src=images[i];
    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload=changeImage;
