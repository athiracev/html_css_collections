writeExp = (e) => {
    display.value += e.target.id
}

writeEqualExp = () => {
    if (display.value == "") {
        alert('Invalid ...Enter an Expression!!!')
    } else {
        try {

            display.value = eval(display.value)


        } catch {
            alert("Enter valid Expression")
            display.value = ""


        }

    }

}

allClear = () => {
    display.value = ""
}

backSpace = () => {

    var input = document.getElementById("calculator-input");
    input.value = input.value.substring(0, input.value.length - 1);



}

