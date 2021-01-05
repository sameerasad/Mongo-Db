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

  const course = await Course.find({
    author: { $in: ["Mosh", "Sameer Asad"] }, //and operator options comes in array form
    isPublished: { $eq: true },
  }); //by using find all documents we could find //limit(10) //only return two documents
  //.sort({ name: 1 }); // sort by names in accending order we also sort by decending order by giving name property value of -1
  //.select({ name: 1 }); //by select method we could return only selected properties
  console.log(course);
}

getCourse();
