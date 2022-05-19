document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#choice1").innerHTML = localStorage.getItem("choice1")
    document.querySelector("#choice2").innerHTML = localStorage.getItem("choice2")
})

 let button = document.getElementById("flip");
    let result = document.getElementById("result");

    function fnClick(event) {
      let qty = document.getElementById("quantity").value;
      let score = "";

      for (let i = 0; i < qty; i++) {
        let num = Math.random();

        if (num < 0.5) {
          score += document.querySelector("#choice1").innerHTML = localStorage.getItem("choice1");
        } else {
          score += document.querySelector("#choice2").innerHTML = localStorage.getItem("choice2");
        }
      }
      result.innerHTML = score;
    }

    button.addEventListener("click", fnClick);


