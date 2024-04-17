const modalbtn=document.getElementsByClassName("modal-btn")[0];
const modal=document.getElementsByClassName("modal")[0];
const closebtn=document.getElementsByClassName("closeBtn")[0];

function openmodal()
{
    modal.style.display="block";
}

function closemodal()
{
  modal.style.display="none";
}
function checkclick(e)
{
  if(e.target.className=="modal")
  {
    closemodal();
  }
}
modalbtn.addEventListener("click",openmodal);
closebtn.addEventListener("click",closemodal);
window.addEventListener("click",checkclick);