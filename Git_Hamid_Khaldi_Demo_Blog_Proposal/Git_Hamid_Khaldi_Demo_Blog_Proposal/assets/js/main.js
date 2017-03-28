/**
 * @name    main.js
 * @desc    this script will provide the animation for the photo gallery
 */

(function () {
    var
        slider          =   document.getElementById("slider"),
        index           =   0,
        prevBtn         =   document.getElementById("prevBtn"),
        nextBtn         =   document.getElementById("nextBtn"),
        path            =   'resources/images-2/',
        pics            =   ["laptop_960x460.jpg", "apple_desktop_960x460.jpg", "heroes_960x460.jpg", "laptop2_960x460.jpg", "technology_960x460.jpg"],
        p1              =   document.getElementById("p1"),
        p2              =   document.getElementById("p2"),
        p3              =   document.getElementById("p3"),
        p4              =   document.getElementById("p4"),
        dayBtn1         =   document.getElementById("dayBtn1"),
        dayBtn2         =   document.getElementById("dayBtn2"),
        dayBtn3         =   document.getElementById("dayBtn3"),
        dayBtn4         =   document.getElementById("dayBtn4"),
        logoLink        =   document.getElementById("logoLink"),




        slideShow       =   function(e){

                if (e == "&#10095"){
                    if(index < pics.length-1){
                        index++;
                    } else {index = 0}
                } else {
                    if (index > 0){
                        index--;
                    } else {
                        index = pics.length-1;
                    }
                }// if e

                slider.src = path + pics[index];


                    },//slideShow


        bindBtns        =   function () {
            nextBtn.addEventListener("click",function(){
                slideShow("&#10095");
            });
            prevBtn.addEventListener("click",function(){
                slideShow("&#10094");
            });

        },//bindBtns

        showPar         =   function(){

            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";
            p4.style.display = "none";

            dayBtn1.addEventListener("click",function(){
                    p1.style.display = "block";
                    p2.style.display = "none";
                    p3.style.display = "none";
                    p4.style.display = "none";


            });

            dayBtn2.addEventListener("click",function(){
                p2.style.display = "block";
                p1.style.display = "none";
                p3.style.display = "none";
                p4.style.display = "none";


            });
            dayBtn3.addEventListener("click",function(){
                p3.style.display = "block";
                p2.style.display = "none";
                p1.style.display = "none";
                p4.style.display = "none";


            });
            dayBtn4.addEventListener("click",function(){
                p4.style.display = "block";
                p2.style.display = "none";
                p3.style.display = "none";
                p1.style.display = "none";


            });

        };//showPar



    function init() {
                bindBtns();
                showPar();
        };//init




    window.addEventListener("load", init);
})();