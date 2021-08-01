alert("Hello ")
let name = prompt("What is your Name?")
alert("Hello "+ name)
console.log(name);

let FavBrowser = prompt(name +" What is Your Favorite Browser ?  \n 1. Google Chrome \n 2. Brave \n 3. Opera ");
console.log(FavBrowser);
while(FavBrowser != "Google Chrome" && FavBrowser !="Brave" && FavBrowser != "Opera")
{
  FavBrowser = prompt("Please, Choose  From \n 1. Google Chrome \n 2. Brave \n 3. Opera ");
}
let NumberOfPic = prompt("How Many Times You Want to See The Picture: ");
while(NumberOfPic > 10)
{
  NumberOfPic =prompt("Please Enter Number Less Than or Equal 10 !!!");
}

function statement ()
{
if (FavBrowser == "Google Chrome")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
  
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/GC.png" alt="Google Chrome" width="33%" height="400px"> '  )
  }


}
else if(FavBrowser == "Brave")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
  
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/BR.png" alt="Brave" width="33%" height="400px"> '  )
    }

}
else if(FavBrowser == "Opera")
{
  document.write('<p style="text-align: center; color:gold;">' +'Your Favorite Browser is: '+ FavBrowser + '</p>');
 
  for(var i = 0;i< NumberOfPic ; i++)
  {
    document.write(' <img src="Logo/OP.png" alt="Opera" width="33%" height="400px"> '  )
  }
}
else
{
document.write("None");
}
}
statement();

