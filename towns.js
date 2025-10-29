$(document).ready(function () {
  $("#btnAdd").click(addTown);
});
// add town
function addTown() {
<<<<<<< HEAD
  let townName = $("#townNameForAdd").val();
  $("#townNameForAdd").val(",");
=======
  let TtownName = $("#townNameForAdd").val();
  $("#townNameForAdd").val("");
>>>>>>> 0538751 (some changes)
  $("#towns").append($("<option>").text(townName));
  $("#result").text(townName + " added.");
}
