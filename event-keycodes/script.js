const key_insert = document.getElementById("insert");

onkeydown = (event) => {
    console.log(event);
    key_insert.innerHTML = `<div class ="flex"><small>event.KeyCode</small><div class ='key'>${event.keyCode}</div></div><div class ="flex"><small>event.code</small><div class ='key'>${event.code}</div></div><div class ="flex"><small>event.key</small><div class ='key'>${event.key}</div></div>`;
};
