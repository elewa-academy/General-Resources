window.onload = function() {
  var deleteButtons = document.getElementsByClassName("deleteButton");

  deleteButtons[0].onclick = function() {
    console.log(this);
    var id = this.getAttribute("id");
    sendDeleteRequest(id);
  };
};

function sendDeleteRequest(id) {
  var request = new Request("/students/profile/" + id, {
    method: "DELETE",
    redirect: "follow"
  });

  fetch(request)
    .then(response => {
      //console.log(response);
      return response.json();
      //return response.json();
    })
    .then(body => {
      var message = body.name + " has been deleted!";
      alert(message);
      window.location.href = "/";
    })
    .catch(error => console.log(error));
}
