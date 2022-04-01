let color_a = document.getElementById("color-a");
let color_b = document.getElementById("color-b");
let current_direction = "to bottom"
let output_code = document.getElementById("code")

function setDirection(value, _this){
    let direction = document.querySelectorAll(".row-2 button")
    
    for(let i of direction){
        i.classList.remove('active')
    }
    _this.classList.add("active")
    current_direction = value;
    // console.log(current_direction)
}

function generateCode(){
    output_code.value = `background-image : linear-gradient(${current_direction}, ${color_a.value}, ${color_b.value})`

    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${current_direction}, ${color_a.value}, ${color_b.value})`
}

function copyText(){
    output_code.select();
    document.execCommand('copy')
    alert('Gradient Copied');
}