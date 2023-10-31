// StudentManagementSystem.ts
import { Student } from './Student';
import * as inquirer from 'inquirer';

class StudentManagementSystem {
  students: Student[] = [];

  async addStudent() {
    const { id, name, grade } = await inquirer.prompt([
      {
        name: 'id',
        message: 'Enter student ID:',
        type: 'input',
      },
      {
        name: 'name',
        message: 'Enter student name:',
        type: 'input',
      },
      {
        name: 'grade',
        message: 'Enter student grade:',
        type: 'input',
      },
    ]);

    const student = new Student(parseInt(id), name, parseFloat(grade));
    this.students.push(student);

    console.log('Student added successfully!');
  }

  listStudents() {
    console.log('List of Students:');
    this.students.forEach((student) => {
      console.log(`ID: ${student.id}, Name: ${student.name}, Grade: ${student.grade}`);
    });
  }

  run() {
    const actions = [
      {
        name: 'Add Student',
        value: 'add',
      },
      {
        name: 'List Students',
        value: 'list',
      },
      {
        name: 'Exit',
        value: 'exit',
      },
    ];

    (async () => {
      while (true) {
        const { action } = await inquirer.prompt([
          {
            name: 'action',
            message: 'Select an action:',
            type: 'list',
            choices: actions,
          },
        ]);

        if (action === 'add') {
          await this.addStudent();
        } else if (action === 'list') {
          this.listStudents();
        } else if (action === 'exit') {
          break;
        }
      }
    })();
  }
}

const system = new StudentManagementSystem();
system.run();
