var url1 = "https://docs.google.com/spreadsheets/d/1QxEyunKhNltqfXmlZkvQ7ojNpd5oGT_5xsjEi_j-BiU/edit#gid=1241393830"

function doGet() {
  return loadForm();
}

function loadForm(){
  var ss = SpreadsheetApp.openByUrl(url1);
  var ws = ss.getSheetByName("Master");
  var list = ws.getRange(8, 8, ws.getRange("H8").getDataRegion().getLastRow()-7, 1).getValues();
  
  var htmlList = list.map(function(r){return '<option>' + r[0] + '</option>';}).join("");
  var tmp = HtmlService.createTemplateFromFile("index");
  tmp.list = htmlList;
  return tmp.evaluate();

}

function userSearched(name){
  var ss = SpreadsheetApp.openByUrl(url1);
  var ws = ss.getSheetByName("Master");
  ws.getRange('B4').setValue(name);
}

function getBal(){
  var ss = SpreadsheetApp.openByUrl(url1);
  var ws = ss.getSheetByName("Master");
  var data = ws.getRange(5, 2, ws.getLastRow(), 3).getDisplayValues();
  return data;
}

function doSearch(){
  var ss = SpreadsheetApp.openByUrl(url1);
  var ws = ss.getSheetByName("Form Responses 1");
  var data = ws.getRange(2, 1, ws.getLastRow(), 5).getDisplayValues();
  var data2 = ws.getRange(2, 8, ws.getLastRow(), 1).getDisplayValues();
  
  var dateList = data.map(function(r){ return r[0];});
  
  for (var i=0; i<data2.length; i++){
  var sDateList = data2.map(function(r){ return r[0];});
  var position = dateList.indexOf(sDateList[i]);
  var check = "E"+(position+2);
  
  if(position >-1){
     ws.getRange(check).setValue("Y");
  }}
}

function doSearch2(){
  var ss = SpreadsheetApp.openByUrl(url1);
  var ws = ss.getSheetByName("Form Responses 2");
  var data = ws.getRange(2, 1, ws.getLastRow(), 5).getDisplayValues();
  var data2 = ws.getRange(2, 8, ws.getLastRow(), 1).getDisplayValues();
  
  var dateList = data.map(function(r){ return r[0];});
  
  for (var i=0; i<data2.length; i++){
  var sDateList = data2.map(function(r){ return r[0];});
  var position = dateList.indexOf(sDateList[i]);
  var check = "E"+(position+2);
  
  if(position >-1){
     ws.getRange(check).setValue("Y");
  }}
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}