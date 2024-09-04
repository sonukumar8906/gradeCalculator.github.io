//   getting the reference and variable
 const web = document.querySelector('#wd');
 const mathematics = document.querySelector('#math');
 const physics = document.querySelector('#phy');
 const computer = document.querySelector('#comp');
 const button = document.querySelector('#sp');
 const show_marks = document.querySelector('#showData');
//  const form = document.querySelector('.app-form');
 const my_form = document.querySelector('#my_form')
//  console.log(my_form)

 button.addEventListener('click', () =>{
    let web_value = web.value;
    let math_value = mathematics.value;
    let phy_value = physics.value;
    let comp_value = computer.value;

    // finding the total marks of student
  let total_marks = parseFloat(web_value)+parseFloat(math_value)+parseFloat(phy_value)+
  parseFloat(comp_value);

  let percentage = (total_marks/400) * 100;
  let grades = "";
  if(percentage <=100 && percentage >= 80){
    grades = "A";
  }else if(percentage <= 79 && percentage >= 60){
    grades = "B"
  }else if(percentage <= 59 && percentage >= 40){
    grades = "C";
  }else{
    grades = "F";
  }

if(percentage >39.9999999){
  show_marks.innerHTML = `your marks is ${total_marks} out of 400 and ${percentage}%
   your grades is ${grades} your are pass`;
}else{
    show_marks.innerHTML = `your marks is ${total_marks} out of 400 and ${percentage}%
    your grades is ${grades} your are fail`; 
}
resetData();
 })
//  reset input field
 const resetData = () =>{
  my_form.reset();
 }