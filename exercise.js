const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/vidly1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected sucessfully"))
  .catch((err) => console.error("could not connect ", err));

const moviesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  genre: String,
  availability: Boolean,
  date: { type: Date, default: Date.now },
});

const Movies = mongoose.model("movies", moviesSchema);
async function createMovies() {
  const movies = new Movies({
    name: "harry potter1",
    price: 60,
    genre: "fiction",
    availability: true,
  });

  const result = await movies.save();

  console.log(result);
}

async function getMovies() {
  try {
    const result = await Movies.find({ name: /^harry/i }) //regular expresion to find document contain harry at the beginning "i" use at end to make expresion string insensitive
      .find({ name: /potter$/i }) //regular expresion to find document contain pootter at the ending $ sign represent the ending ogf string
      .find({ name: /.*potter.*/i }); // find the document  in which potter could be anywhere begin,end or middle
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getMovies();
