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
    name: "fateh 1443",
    price: 120,
    genre: "history",
    availability: true,
  });

  const result = await movies.save();

  console.log(result);
}

async function getMovies() {
  /* /api/course?pageNumber=2&pageSize =10 in rest full api it will come from 
  querry string parameter in order to apliment pagination we need to skip the previous pages */

  try {
    const result = await Movies.find({ availability: true })
      .select({ name: 1, genre: 1 })
      .sort({ price: 1 });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getMovies();
