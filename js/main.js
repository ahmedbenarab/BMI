function clcBmi() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let h_t = document.getElementById("height").value;
    let w_t = document.getElementById("weight").value;
    let htsqr = h_t ** 2;
    let bmiValue = (w_t / htsqr);
    let result = `hey ${name} ${surname} your bmi is ${bmiValue} , have a nice day bruh 🙂`

    //alert(result) ;
    document.getElementById('content').textContent = result
        //document.getElementsByClassName('content').textContent = result
}