var arr = [];

function add(){
    var cont = document.getElementById("inputText").value;

    if(cont==""){
    alert("Değer Giriniz");
    }
    else
    {
      arr.push(cont);
      var text1 = "";
      for(i = 0 ; i<arr.length;i++){
         text1 = text1 + arr[i] + "</br>";
         document.getElementById('contentArea').innerHTML = text1;
         document.getElementById('contentCount').innerHTML = "Eleman Sayısı : " + arr.length;
      }
      document.getElementById('inputText').value="";
      }
}