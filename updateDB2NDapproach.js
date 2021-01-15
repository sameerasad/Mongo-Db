const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/exercise", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDb  connected sucessfully");
  })
  .catch((err) => console.error("could not connect"));

const schema = mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("courses", schema);

async function updateCourse(id) {
  //2nd
  //update first
  //update directly
  // optionally get the updated document as well
  //let use 1st approach

  let result = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        isPublished: true,
        author: "json",
      },
    },
    { new: true }
  );

  console.log(result);
}

updateCourse("5ffeede9a5a59c113fe3a611");
