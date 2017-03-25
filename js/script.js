var user=function(firstname,lastname,userName,password,date)
{
  this.firstname=firstname;
  this.lastname=lastname;
  this.userName=userName;
  this.password=password;
  this.date=date;
}
function userObj()
{
  var firstname=document.getElementById('fname').value;
  var lastname=document.getElementById('lname').value;
  var userName=document.getElementById('exampleInputEmaillog').value;
  var password=document.getElementById('exampleInputPasswordpas').value;
  var date=document.getElementById('dateentry').value;
  var newUser=new user(firstname,lastname,userName,password,date);
  var temp;

  try {
  valueStore=JSON.parse(localStorage.getItem("user"))||[];

} catch (e) {
  valueStore=[];
}
valueStore.push(newUser);
console.log(temp);
var updated=JSON.stringify(temp);
localStorage.setItem('user',updated);
var valueFetch=localStorage.getItem("user");
var parsedValue=JSON.parse(valueFetch);
}


function fetchUser()
{
 var fetchValue=localStorage.getItem("user");
 var parsedValue=JSON.parse(fetchValue);
for(var i in parsedValue)
{
  if(parsedValue[i].userName==document.getElementById('exampleInputEmaillog').value && parsedValue[i].password==document.getElementById('exampleInputPasswordpas').value)
  {
    alert("you are the valid user");
    printPage();
    break;
  }
}
  if(parsedValue[i].userName!=document.getElementById('exampleInputEmaillog').value && parsedValue[i].password!=document.getElementById('exampleInputPasswordpas').value)
  {
    alert("you are not the valid user");
  }
}
function printPage()
{

  $.ajax({
    url:"welcome.html",
    type:"GET",
    datatype:"html",
    success:function(response)
    {
        console.log("the page was loaded",response);
      $('#b1').html(response);
    },
});
}
