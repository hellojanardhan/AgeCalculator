//getting submit button
var submitBtn=document.querySelector('button');

//getting input data
var input_date=document.querySelector('#date');

submitBtn.addEventListener('click',function(){
      const inputValue=input_date.value;
      if(inputValue==""){
        alert("enter a valid date")
      }
      else{
        const age=getAge(inputValue);

        document.getElementById("result").textContent=`Your age is ${age} years old`;
      }
})
//get 
function getAge(inputValue){
    const currentDate=new Date();
    // console.log(currentDate.getFullYear());
    const dateOfBirthday=new Date(inputValue);

    const age=currentDate.getFullYear()-dateOfBirthday.getFullYear();
    return age;
}