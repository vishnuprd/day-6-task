//1) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values. 


class movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var cinema = new movie("Leo","7screenstudio","9.5");
console.log(cinema.title);
console.log(cinema.studio);
console.log(cinema.rating);

//2) 2) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided. 


class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getCineInfo() {
        return "Title: " + this.title + "\nStudio: " + this.studio + "\nRating: " + this.rating;
    }
}

var cinema = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(cinema.getCineInfo());

//3)  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getCineInfo(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

var cinema1 = new Movie("cinema1", "Studio A", "PG");
var cinema2 = new Movie("cinema2", "Studio B", "PG-13");
var cinema3 = new Movie("cinema3", "Studio C", "PG");
var cinema4 = new Movie("cinema4", "Studio D", "R");

var movies = [cinema1, cinema2, cinema3, cinema4];

var pgMovies = Movie.getCineInfo(movies); 

console.log(pgMovies);


//4) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  var mov = new movie("Casino Royale", "Eon Productions", "PG13");
  
























