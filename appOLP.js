var repoSearch = {

  init: function() {
    randomRepo = $('#search').val();
    gitHubAPI = "https://api.github.com/search/users";
    user = {
      q: randomRepo,
      sort: "repositories",
      order: "desc"
    };
    repoSearch.displayUsers();
    console.log("great!!");
  },

  submitForm: function() {
    $("form").submit(function(evt){
      evt.preventDefault();
      // console.log("something");
      repoSearch.init(); 
      $.getJSON(init.gitHubAPI, init.user, repoSearch.displayUsers);
    });
  },

  displayUsers: function(data) {
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

};
$(document).ready(function(){
  repoSearch.submitForm();
});

