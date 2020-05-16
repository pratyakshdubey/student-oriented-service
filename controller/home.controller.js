const Student = require("../model/student.model");

exports.getHome = function (req, res) {
  res.render("index", { title: "Student Oriented Services", result: "", student: "" });
  //res.json('Home page')
};

exports.getStudent = function (req, res) {
  const id = +req.params.id;
  Student.findOne({ idno: id }).then(result => {
      console.log(result);
        res.json(result);
       //res.redirect("/", { title: "Student Oriented Services", result: "", student: result })
        // res.render('index', { title: "Student Oriented Services", result: "", student: result })
  }).catch(err => console.log(err))
}

exports.addStudents = function (req, res) {
  const { name, college, email, phoneno, adhaar, course } = req.body;
  /*
    if(!name || !college) {
        res.json({
            message: "No name or college found"
        });
        return;
    }*/

  console.log(name, college, email, adhaar, phoneno, course);
  let idno;
  Student.count({}, (err, count) => {
    if (err) return "something went wrong";

    //console.log(count)
    console.log(typeof count);
    idno = count + 1;
    console.log(idno, count);

    const newStudent = new Student({
      name,
      college,
      email,
      adhaar,
      course,
      phoneno,
      idno,
    });

    newStudent
      .save()
      .then(function (result) {
        if (!result) {
          res.json({
            message: "Unable to add student. Try again later",
          });
          return;
        }
        //res.json(result);
        res.render("index", { title: "Student Oriented Services", result , student: ""});
      })
      .catch((err) => console.log(err));
  });
} 
