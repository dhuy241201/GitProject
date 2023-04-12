    function doiTien(){
    let sotien=document.getElementById('Sotien').value;
    let a=document.getElementById('From').value;
    let b=document.getElementById('To').value;
    let c;

    if(a=='VND'&& b=='USD') {
        c=sotien/23000}
    else
    if(a=='USD'&& b=='VND') {
        c=sotien*23000}
    else
    if(a=='USD'&& b=='USD') {
        c=sotien/sotien}
    else
    if(a=='USD'&& b=='VND') {
        c=sotien/sotien}
    document.getElementById('ketqua').innerHTML='Kết quả: ' +c
    }