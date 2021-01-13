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

async function createCourses() {
  const course = new Course({
    tags: ["frontend"],
    name: "react-native",
    author: "mosh",
    isPublished: true,
    price: 40,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const result = await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(result);
}

getCourses();
