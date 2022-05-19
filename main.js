document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#choice1").addEventListener("keyup",function(){
        let val = this.value;
       localStorage.setItem("choice1", val)
    })

    document.querySelector("#choice2").addEventListener("keyup",function(){
        let val = this.value;
       localStorage.setItem("choice2", val)
    })
})

    // document.querySelector("#choice2").addEventListener("keyup",function(){
    //     let val = this.value;
    //    localStorage.setItem("choice2", val)
    // })


