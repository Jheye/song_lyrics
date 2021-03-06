/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) {
  //your code here
}

function displaySearchData(data) {
  //your code here
}

function watchSubmit() {
  //your code here
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val(); //value is text typed in input box
    queryTarget.val(query);
    $("main").prop('hidden', false)
    getDataFromApi(query, displayMealSearchData);
    scrollToMealResults();
  });
}


$(watchSubmit);