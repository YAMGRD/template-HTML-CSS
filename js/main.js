let mySliderHome = document.getElementById( "home" );
let myBackgrounds = [ "doctor-s-hand-holding-stethoscope-closeup.jpg", "portrait-successful-mid-adult-doctor-with-crossed-arms.jpg", "young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg" ];
setInterval( () =>
{
    let rand= Math.floor(Math.random()*myBackgrounds.length)
    mySliderHome.style.cssText = `background: url(../images/slider/${ myBackgrounds[ rand ] }) no-repeat ;background-size:cover;`
    console.log(rand);
}
,4600)
