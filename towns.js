$(document).ready(function () {
  $("#btnAdd").click(addTown);
});
// add town
function addTown() {
  let TtownName = $("#townNameForAdd").val();
  $("#townNameForAdd").val("");
  $("#towns").append($("<option>").text(townName));
  $("#result").text(townName + " added.");
}
