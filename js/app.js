let gitID;
$("#btn").click(function() {
  gitID = $("#input").val();
  alert(gitID);
});

const client_id = "Iv1.50e6543175e493fc";
const client_secret = "5a84fa87938506347b27b5c8112f680200a0efc4";

const fetchUsers = async user => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);
};
