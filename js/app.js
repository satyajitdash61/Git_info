let gitID;
$("#btn").click(function() {
  gitID = $("#input").val();
  showData();
});

const client_id = "Iv1.50e6543175e493fc";
const client_secret = "5a84fa87938506347b27b5c8112f680200a0efc4";

const fetchUsers = async user => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data };
};

const showData = () => {
  fetchUsers(gitID).then(res => {
    console.log(res);
    $("#gitName").text(res.data.login);
    $("#gitUrl").text(res.data.html_url);
    $("#location").text(res.data.location);
    $("#totalRepo").text(res.data.public_repos);
  });
};
