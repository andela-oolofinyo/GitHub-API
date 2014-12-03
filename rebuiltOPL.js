var repoSearch = {

  gitHubAPI: "https://api.github.com/search/users",

  submitForm: function() {
    $("form").submit(function(evt){
      evt.preventDefault();
      var user = {
      q: $('#search').val(),
      sort: "repositories",
      order: "desc"
      };
      $.getJSON(repoSearch.gitHubAPI, user, repoSearch.displayUsers());
    });
  },

  displayUsers: function(){

   var doIt =  function(data) {
    var repoHTML = '<ul>';
    console.log(data);
    $.each(data.items, function(i, user) {
      repoHTML += '<li class="grid-25 tablet-grid-50">';
      repoHTML += '<a href="' + user.avatar_url + '" class="image">';
      repoHTML += '<img src = "'+ user.avatar_url + '" class="image" width=200 height=200> </a>';
      repoHTML +=  '<p> '+ user.score +' </p>';
      repoHTML +=  '<p>' + user.login + '</p>'; 
      repoHTML += '</li>';
    });
    repoHTML += '</ul>';
    $('#options').html(repoHTML);
  };

  return doIt;
  }
};

$(document).ready(function(){
  repoSearch.submitForm();
});