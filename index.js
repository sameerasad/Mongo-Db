const mongoose = require("mongoose");
mongoose

  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("connected sucessfully"))
  .catch((err) => console.error("could not connect ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("course", courseSchema);
async function createCourse() {
  const course = new Course({
    name: "Sameer Asad",
    author: "Sameer Asad",
    tags: ["react", "react-native", "redux", "backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
async function getCourse() {
  /*comparision operator in monge and also available in mongoose bcz mongoose built on monge

eq(equal)
ne (not equal to)
gt (greater than)
gte (greater than equal to)
lt (less than)
lte (less than equal to)
in (means)
nin (not in)

*/
  //logical operators
  const course = await Course.find().and([
    { author: "Sameer Asad" },
    { name: "Sameer Asad" },
  ]);

  console.log(course);
}

getCourse();
