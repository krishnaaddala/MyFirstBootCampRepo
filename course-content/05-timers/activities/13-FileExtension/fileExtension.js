//we create an object and assign key value pairs of the list of arrays
var listOfFiles = {
    movieFiles: {}
    jpegFiles: {}
    audioFiles:{}
    gifFiles:{}
    pngFiles:{}
    aviFiles:{}
    mpegFiles:{}
    mp4Files:{}
    mpgFiles:{}
}
var files = [
    "ashers_first_birthday.mov",
    "mr_snuggles_asleep_at_the_computer.jpg",
    "obama_fights_a_polar_bear.mp4",
    "trump_road_rage.avi",
    "barney_skydiving.jpeg",
    "bob_getting_his_black_belt.png",
    "farley_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];
  function getFileExtension(){
      for (i=0; i<files.length;i++){
        var fileSpilt = files[i].split(".");
        console.log(fileSpilt);
        if (fileSpilt === ".mov"){
            fileSpilt.pop();
            listOfFiles.movieFiles.push();
        }
      }
  }