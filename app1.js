// $(document).ready(function() {


//  $('form').submit(function (evt) {
//      evt.preventDefault();

//     var searching = $('#search').val();
  

//     // the AJAX part

//     var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//     var animal = searching;
//     var flickrOptions = {
//       tags: animal,
//       format: "json"
//     };
//     function displayPhotos(data) {
//       var photoHTML = '<ul>';
//       $.each(data.items,function(i,photo) {
//         photoHTML += '<li class="grid-25 tablet-grid-50">';
//         photoHTML += '<a href="' + photo.link + '" class="image">';
//         photoHTML += '<img src="' + photo.media.m + '"></a></li>';
//       }); // end each
//       photoHTML += '</ul>';
//       $('#photos').html(photoHTML);
//     }
//     $.getJSON(flickerAPI, flickrOptions, displayPhotos);

//   }); // end click

// }); // end ready



// $(document).ready(function() {


// $('form').submit(function(evt) {
//     evt.preventDefault(); // this is to prevent the submit button from refrshing the page when clicked

//   var randomRepo = $('#search').val();

//   var GitHubAPI = "https://api.github.com/search/users";
//   var users = randomRepo;
//   var user = {
//     q: randomRepo,
//     sort: "repositories",
//     order: "desc",
//     // format: "json"
//   };

//   function displayUsers(data) {
//       var repoHTML = '<ul>';
//       $.each(data.items, function(i, user) {
//         repoHTML += '<li class="grid-25 tablet-grid-50">';
//         // repoHTML += '<a href="' + user.followers_url + '" class="salutation">';
//         repoHTML += '<a href="' + user.avatar_url + '" class="image">';
//         repoHTML += '<img src = "'+ user.avatar_url + '" class="image">';
//         repoHTML +=  user.score ;
//       });

//       repoHTML += '</ul>';
//       $('#options').html(repoHTML);
//     }
//     $.getJSON(GitHubAPI, user, displayUsers);

//   });

// });





// $(document).ready(function() { //this is the basic code


// $('form').submit(function(evt) {
//     evt.preventDefault(); // this is to prevent the submit button from refrshing the page when clicked

//   var randomPerson = $('#search').val();

//   var randomUserAPI = "http://api.randomuser.me/?results=40";
//   var people = randomPerson;
//   var person = {
//     tags: people,
//     format: "json"
//   };
//   function displayPerson(data) {
//       var rPersonHTML = '<ul>';
//       $.each(data.list, function(i, name) {
//         // rPersonHTML += '<li class="grid-25 tablet-grid-50">';
//         rPersonHTML += '<a href="' + name.title + '" class="salutation">';
//         rPersonHTML += '<img src="' + name.first + '"></a></li>';
//       });
//       rPersonHTML += '</ul>';
//       $('#options').html(rPersonHTML);
//     }
//     $.getJSON(randomUserAPI, person, displayPerson);

//   });

// });









