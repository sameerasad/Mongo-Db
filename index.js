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
const course = new Course({
  name: "Sameer Asad",
  author: "Mosh",
  tags: ["react", "react-native"],
  isPublished: true,
});
