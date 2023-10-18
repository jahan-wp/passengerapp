let countNm = document.getElementById("count-num")
let entriesP = document.getElementById("entries-p")

let count = 0
 
function increment() {
  count += 1
  countNm.textContent = count
}
function save() {
  entriesP.textContent += " " + count + " - "
  count = 0
  countNm.textContent = 0
 }
 