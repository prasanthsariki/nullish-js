const student = {
  html: true,
  css: true,
  js: true,
  bootstrap: true,
  node: true,
  react: false,
};

let student_knows =
  student.html &&
  student.css &&
  student.bootstrap &&
  student.js &&
  student.react &&
  student.node
    ? "fullstack developer"
    : student.html &&
      student.css &&
      student.js &&
      student.bootstrap &&
      student.react
    ? "frontend developer"
    : student.html &&
      student.css &&
      student.js &&
      student.bootstrap &&
      student.node
    ? "backend developer"
    : student.html && student.css && student.bootstrap
    ? "ui/ux designer"
    : "go and join 10000coders";

console.log(student_knows);
