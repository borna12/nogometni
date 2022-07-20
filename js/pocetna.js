let pointsURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR0iDSMy5nlcRLlqwu3knhJFaWyi67HQTGMKokDQVOO5RX9s9m1421hKeWKNCP_Qd-iw6uWo6iQ9JJU/pub?output=csv";

window.addEventListener("DOMContentLoaded", init);
function init() {
Papa.parse(pointsURL, {
    download: true,
    header: true,
    complete: addPoints,
  });
}
  function addPoints(data) {
    data = data.data;
    for (let row = 0; row < data.length; row++) 
    {
      if (data[row].Grupa=="A"){
        br=row+1
        document.getElementById("A").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"  
    }

    else if (data[row].Grupa=="B"){
      br=row+1
      document.getElementById("B").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"  
  }    
  else if (data[row].Grupa=="C"){
      br=row+1
      document.getElementById("C").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"  
  }    
  else if (data[row].Grupa=="D"){
      br=row+1
      document.getElementById("D").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"  
  }    
  else if (data[row].Grupa=="E"){
      br=row+1
      document.getElementById("E").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>" 
  }    
  else if (data[row].Grupa=="F"){
      br=row+1
      document.getElementById("F").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"   
  }    
  else if (data[row].Grupa=="G"){
      br=row+1
      document.getElementById("G").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>"  
  }    
  else if (data[row].Grupa=="H"){
      br=row+1
      document.getElementById("H").innerHTML +="<tr><td ></td><td><a href='"+data[row].Enciklopedija+"'><img src='"+data[row].Zastava+"' class='zastava'>"+data[row].Zemlja+"</td><td>"+data[row].Bodovi+"</td></tr>" 
  }
    }
    $("table tr:nth-child(1) td:nth-child(1)").html("1")
    $("table tr:nth-child(2) td:nth-child(1)").html("2")
    $("table tr:nth-child(3) td:nth-child(1)").html("3")
    $("table tr:nth-child(4) td:nth-child(1)").html("4")
    
  }