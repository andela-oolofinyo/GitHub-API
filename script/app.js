$(document).ready(function() {


$('form').submit(function(evt) {
    evt.preventDefault(); // this is to prevent the submit button from refrshing the page when clicked

  var randomRepo = $('#search').val();

  var gitHubAPI = "https://api.github.com/search/users";
  var users = randomRepo;
  var user = {
    q: randomRepo,
    sort: "repositories",
    order: "desc",
  };

  function displayUsers(data) {
      var repoHTML = '<ul>';
      $.each(data.items, function(i, user) {
        repoHTML += '<li class="grid-25 tablet-grid-50">';
        repoHTML += '<a href="' + user.avatar_url + '" class="image">';
        repoHTML += '<img src = "'+ user.avatar_url + '" class="image" width=200 height=200>';
        repoHTML +=  user.score;
        repoHTML +=  user.login;
      });

      repoHTML += '</ul>';
      $('#options').html(repoHTML);
    }
    $.getJSON(gitHubAPI, user, displayUsers);

  });

});
