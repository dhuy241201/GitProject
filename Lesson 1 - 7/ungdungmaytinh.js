function Addition(){
    let a=parseInt(document.getElementById('soThunhat').value)
    let b=parseInt(document.getElementById('soThuhai').value)
    let c=a+b;
    document.getElementById('ketqua').innerHTML=(+c)
    } 
    document.getElementById('ketqua').innerHTML=(+c)
    function Subtraction(){
    let a=parseInt(document.getElementById('soThunhat').value)
    let b=parseInt(document.getElementById('soThuhai').value)
    let c=a-b;
    document.getElementById('ketqua').innerHTML=(+c)
    }
    function Multiplication(){
    let a=parseInt(document.getElementById('soThunhat').value)
    let b=parseInt(document.getElementById('soThuhai').value)
    let c=a*b;
    document.getElementById('ketqua').innerHTML=(+c)
    }
    function Division(){
    let a=parseInt(document.getElementById('soThunhat').value)
    let b=parseInt(document.getElementById('soThuhai').value)
    let c=a/b;
    document.getElementById('ketqua').innerHTML=(+c)
    }