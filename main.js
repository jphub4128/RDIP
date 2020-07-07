function calculate(result){
    form.displayResult.value=form.displayResult.value+result;  
    return value;
}
function clr() 
         { 
             document.getElementById("result").value = "" 
             return 0;
         }
function percen(x,y) 
         { 
            var x = document.getElementById("result").value;
            var y = document.getElementById("result").value;
            var z = x % y;
            document.getElementById("result").value = z; 
             return value;
         }
function squareroot() {
            var a= document.getElementById("result").value
            document.getElementById("result").value = Math.sqrt(a);
            return value;
          }
function absolute() {
            var b= document.getElementById("result").value
            var c=Math.round(b)
            document.getElementById("result").value = Math.abs(c);
            return value;
          }
function phoneno() {
            var x, text;
            x = document.getElementById("ouh").value;
            if (isNaN(x) || x < 999999999 || x > 9999999999) {
              text = "Input not valid";
            } else {
              text = "Input OK";
            }
            document.getElementById("my").innerHTML= text;
          }
function namecheck() {
            var x, text;
            x = document.getElementById("hello").value;
            if (isNaN(x)) {
              text = "input valid";
            } else {
              text = "Input not valid";
            }
            document.getElementById("kk").innerHTML= text;
          }

function Palindrome() {
            var revStr = "";
            var str = document.getElementById("str").value;
            var m = str.length;
            for(var n=m; n>=0; n--) {
            revStr = revStr+str.charAt(n);
            }
            if(str == revStr) {
            alert(str+" the given is Palindrome");
            } else {
            alert(str+" the given is not a Palindrome");
            }
            }

function anagram()
            {
            var a1=document.getElementById("string1").value;
            var a2=document.getElementById("string2").value;
            
             var string1=a1.replace(/\s+/g,"");
             
             var string2=a2.replace(/\s+/g,"");
             
             
            var con1=string1.toLowerCase();
            var con2=string2.toLowerCase();
            
            var arr1=con1.split("");
            var arr2=con2.split("");
            arr1.sort();
            arr2.sort();
            
             var kl1=arr1.join("");
             var kl2=arr2.join("");
           
            if(kl1==kl2)
            {
            alert("anagrams");	
            }
            else
            {
              alert("not anagrams");
            }
            
            return false;
              
            }

function rand()
{
var r1= Math.floor(Math.random() * (+1000 - +0) + +0);	
var r2= Math.floor(Math.random() * (+1000 - +0) + +0);	

document.getElementById("mele1").value=r1;
document.getElementById("mele2").value=r2;

var re1=r1%3;
var re2=r2%3;
if(re1==0 && re2==1 || re2==0 && re1==1)
{
	
	document.getElementById("result").value="human survives";
}
else if(re1==re2)
{
	document.getElementById("result").value="tie";
}
else if(re1==1 && re2==2 || re2==1 && re1==2)
{
document.getElementById("result").value= "Cockroach survives";	
}
else if(re1==0 && re2==2 || re2==0 && re1==2)
{
document.getElementById("result").value="human dies";	
}

	return false;
}