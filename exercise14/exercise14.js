const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

// function uncompletedNotes(array) {
//   for (let i = 0; i < array.length; i++) {
//     let roadmap = array[i]
//     for (let j = 0; j < roadmap.todos.length; j++) {
//       let todo = roadmap.todos[j]
//       if (!todo.done) {
//         console.log(todo)
//       }
//     }
//   }
// }
console.log(notes.todos)
// uncompletedNotes(notes)
function uncompletedNotes(array) {
  for (const key in object) {
    if (Object.id.call(object, key)) {
      const element = object[key];
      console.log(element)
    }
  }
}
uncompletedNotes(notes)