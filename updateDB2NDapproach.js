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

async function deleteDocs() {
  // const result = await Course.deleteOne({_id:id}) suppose if pass afilter {isPublished:fales}instead of {_id:id} there could be many false published docs, this method delete only one
  //const result = await Course.deleteMany({ _id: id })suppose if pass afilter {isPublished:fales}instead of {_id:id} there could be many false published docs, this method delete  all docs match the given filter
  const result = await Course.findByIdAndRemove(id); //this method allow us to see the remove docs on the console
  console.log(result);
}

updateCourse("5ffeede9a5a59c113fe3a611");
