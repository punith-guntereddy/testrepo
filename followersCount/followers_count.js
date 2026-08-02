let count = 0;
function increaseCount(){
    count++;
    dispalyCount();
    checkCountValue();
}
function dispalyCount(){
    document.getElementById('countDisplay').innerText=count;
}
function checkCountValue(){
    if(count===10)
    {
    alert("you instagram post gained 10 followers!congratulations");
    }else if(count===20)
    {
        alert("you instagram post gained 20 followers!congratulations");
    }
}
