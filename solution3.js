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

async function getCourses() {
  return await Course.find({
    isPublished: true,
  })
    .or([{ price: { $gte: 50 } }, { name: /.*by.*/i }])
    .sort("-price") //we could write it like {price:-1}in object form
    .select(" name author"); //we could write it like {name:1,author:1cle}in object form
}

async function displayCourses() {
  const result = await getCourses();
  console.log(result);
}

displayCourses();
