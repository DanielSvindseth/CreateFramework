// This script is part of the create framework
//
// Functions to shorten the script
function id(id) {
  document.getElementById(id) }

// http-functions
function reloadPage() {
  window.reload() }

// Writing and reading information to localStorage and sessionStorage
// is used for storing answers inputed by the user

// define global variables
var username = 'bob'
var usergroup
var datetime

function setTime() {
  datetime = new Date()
  //console.log(datetime)
  localStorage.setItem('datetime', datetime) }

function setUsername() {
  //console.log(username)
  localStorage.setItem('username', username) }

function setUsergroup() {
  //console.log(usergroup)
  localStorage.setItem('usergroup', usergroup) }



function write() {

}


// IDEA: for å sample sammen svara submitta kan vi merge saman informasjonen lagra i localStorage til ein HTML-tabell, og sende den til ein epost-addresse som ei HTML-fil.

setUsername()

function tableify(title, value) {
  console.log(title)
  console.log(value)
}

function createTable() {
  for (var e = 0; e < localStorage.length; e++) {
    let a = localStorage.key(e)
    let b = localStorage.getItem(a)
    console.log(a)
    console.log(b)
    console.log('————————————————————————————————————————————————————————————————————');
  }
  //tableify(a, b)
}

createTable()
