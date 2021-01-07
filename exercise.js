const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  availability: Boolean,
  date: { type: Date, default: Date.now },
});
const Movies = mongoose.model("vidly", moviesSchema);
async function createMovies() {
  const movies = new Movies({
    name: "harry potter",
    price: 50,
    category: "fiction",
    availability: true,
  });

  const result = await movies.save(movies);

  console.log(result);
}
