var i:number =0;
var answer:string="";
for(i=0;i<5;i++)
{
    for(var j=0;j<i;j++)
    {
        answer+="* ";
    }
    answer+="\n";
}
console.log(answer);