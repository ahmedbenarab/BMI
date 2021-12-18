function clcBmi() {
    let h_t = document.getElementById("height").value ;
    let w_t = document.getElementById("weight").value ;
    let htsqr = h_t**2 ;
    let bmiValue = (w_t/htsqr); 
    
    alert(bmiValue) ;
}