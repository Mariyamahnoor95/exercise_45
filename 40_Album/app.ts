function make_album(
  artist: string,
  albumTitle: string,
  tracks?: number
): object {
  let album: { artist: string; albumTitle: string; [key: string]: any } = {
    artist: artist,
    albumTitle: albumTitle,
  };
  if (tracks) {
    album["tracks"] = tracks;
  }

  return album;
}

let album1 = make_album("zain", "peace");
let album2 = make_album("Nir", "Nevermind", 9);
let album3 = make_album("head", "Computer", 8);

console.log(album1);
console.log(album2);
console.log(album3);
