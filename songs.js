$(document).ready(function () {

  const loadSongs = $("#load-songs");
  const songList = $("#song-list");

  loadSongs.click(function () {
    $.getJSON("http://localhost:8088/songs")
      .then(songs => {
        var blocks = "";
        songs.forEach(song => {
          blocks += 
          `<section class="song">
            <h1 class="song__title">${song.title}</h1>
            <section class="song__description">
              Performed by ${song.artist} on the album ${song.album}.
            </section>
          </section>`;
        })
        songList.html(`${blocks}`);
      })
  })
})