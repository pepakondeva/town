$(document).ready(function () {
  $("#btnAdd").click(addTown);
});
// add town
function addTown() {
<<<<<<< HEAD
  let TtownName = $("#townNameForAdd").val();
  $("#townNameForAdd").val("");
=======
  let townName = $("#townNameForAdd").val();
  $("#townNameForAdd").val(".......");
>>>>>>> e15b455 (conf)
  $("#towns").append($("<option>").text(townName));
  $("#result").text(townName + " added.");
}
