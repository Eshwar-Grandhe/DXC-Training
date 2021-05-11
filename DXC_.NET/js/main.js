function PlaceOrder ()
{
    alert("Thanks for placing the order");
}
function OrderConformation()
{
    var name = prompt("Enter your breed name","testing the pro");
    console.log(name);
}
function Looping()
{
    var i=0;
    while(i<10)
    {
        console.log("The i value is:"+i);
        i++;
        if(i==5)
        break;
    }
    console.log("done with the loop");
}
// starts from here once execute
function store()
{
    document.cookie = "cat_count="+cats;
    document.cookie = "dog_count="+dogs;
}
function redirect()
{
    window.location = "https://github.com";

}
function navigate()
{
    document.write("You will be redirected to another website in 6 seconds");
    redirect();
}
var dogs=0;
var cats=0;
function CatLook()
{
    dogs++;
    store();
    console.log("on cats table:"+dogs);
    if(dogs>100)
    navigate();
}
function DogLook()
{
    cats++;
    store();
    console.log("on dogs table:"+cats);
    if(cats>100)
    navigate();
}

function showTime()
{
    console.log("here");
    var date = new Date();
    var hours,min,seconds;
    hours = date.getHours();
    min = date.getMinutes();
    seconds = date.getSeconds();
    var am = document.getElementById('hours');
    if(hours === 0)
    hours = 12;
    hours > 12 ? hours = hours-12 : hours;
    hours > 12 ? am.innerText = 'AM': am.innerText = 'PM';
    hours < 10 ? hours = '0' + hours : hours;   
    min < 10 ? min = '0' + min : min;
    seconds<10? seconds = '0' + seconds : seconds;

    document.querySelector('#hours').textContent = hours;
    document.querySelector('#min').textContent = min;
    document.querySelector('#seconds').textContent = seconds;
    setTimeout(showTime , 1000);
}
showTime();
