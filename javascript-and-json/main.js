var arr = [
  {
    title: 'The Go Giver',
    author: 'Bob Burg',
    isbn: '978-1591842002'
  },
  {
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
    isbn: '978-1484218624'
  },
  {
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
    isbn: '978-1491929483'
  }
];

console.log('value of array:', arr, 'type of:', typeof arr);

var jsonString = JSON.stringify(arr);
console.log('JSON String: ', jsonString, 'type of: ', typeof jsonString);
var book = JSON.stringify(arr[0]);
console.log(book);

var student = '{"Student ID": "1", "Student Name": "Bob", "Student ID": "2", "Student Name": "Wallace", "Student ID": "3", "Student Name": "Lindsay"}';

console.log('String student: ', student, 'type of: ', typeof student);
var parsed = JSON.parse(student);

console.log('var: ', parsed, 'type of: ', typeof parsed);
