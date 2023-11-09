function displayDate() {
    let d = new Date ("2023-05-11");
    console.log(d.toString());
    let dateParagraph= document.getElementById("dateParagraph")
    dateParagraph.innerText= d.toString();
}
displayDate();