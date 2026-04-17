let idx=1;
function addtodo()
{
    const element=document.getElementById("idtodo")
    let val=element.value
    element.value=""
    if(val==="")
        return 
    
    const newdiv=document.createElement("div")
    newdiv.setAttribute("id","todo"+idx)
    newdiv.setAttribute("class","todoclass")
    const newspn=document.createElement("div")
    newspn.innerHTML=val



    
    const heshdiv=document.createElement("div")
    heshdiv.innerHTML=idx
    newdiv.appendChild(heshdiv)



    newdiv.appendChild(newspn)

    const newbutton=document.createElement("button")
    newbutton.setAttribute("onclick","deletetodos("+idx+")")
    newbutton.innerHTML="Delete_todos"
    newdiv.appendChild(newbutton)
    document.getElementById("todos").appendChild(newdiv)
    idx=idx+1
}
function deletetodos(index)
{
    const divelement=document.getElementById("todo"+index)
    document.getElementById("todos").removeChild(divelement)
}