function loadJson(file,callback){
   var xhr= new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status=="200"){
  callback(xhr.responseText);
   }
}
xhr.send();
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.Career);
  Education(data.Education);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.image;
left.append(image);

var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);

var h1=document.createElement("h1");
h1.textContent=p.dob;
left.append(h1);
var h3=document.createElement("h3");
h3.textContent=p.Education;
left.append(h3);
var h4=document.createElement("h4");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h5");
h5.textContent=p.email;
left.append(h5);
}
var right=document.querySelector(".right");
function career(ca){
  var h1=document.createElement("h1");
  h1.textContent="career";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

  var h2=document.createElement("h2");
  h2.textContent=ca.info;
  right.append(h2);
  var hr=document.createElement("hr");
  right.append(hr);
}
function Education(edu) {
  var h1=document.createElement("h1");
  h1.textContent="Education";
  right.append(h1);

  var hr=document.createElement("hr");
  right.append(hr);

    var table=document.createElement("table");
    table.border="2";
    var tr1="<tr><th>qualifications</th><th>name of the institute</th><th>percentage</th><th>yop</th>";
    var tr2=" ";
  for(var i=0;i<edu.length;i++)
  {
    tr2=tr2+"<tr><td>"+edu[i].qualifications+"</td><td>"+edu[i].name_of_the_institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].year_of_pass+"</td></tr>";
  }
  table.textContent=tr2;
  table.innerHTML=tr1+tr2;
  right.append(table);
}
function skills(sk){
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in sk){
    var li=document.createElement("li");
    li.innerHTML=sk[i].name+":"+sk[i].info;
    ul.append(li);
  }
  right.append(ul);
  var hr=document.createElement("hr");
  right.append(hr);
}
