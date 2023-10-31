"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// StudentManagementSystem.ts
const Student_1 = require("./Student");
const inquirer = __importStar(require("inquirer"));
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, grade } = yield inquirer.prompt([
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
            const student = new Student_1.Student(parseInt(id), name, parseFloat(grade));
            this.students.push(student);
            console.log('Student added successfully!');
        });
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
        (() => __awaiter(this, void 0, void 0, function* () {
            while (true) {
                const { action } = yield inquirer.prompt([
                    {
                        name: 'action',
                        message: 'Select an action:',
                        type: 'list',
                        choices: actions,
                    },
                ]);
                if (action === 'add') {
                    yield this.addStudent();
                }
                else if (action === 'list') {
                    this.listStudents();
                }
                else if (action === 'exit') {
                    break;
                }
            }
        }))();
    }
}
const system = new StudentManagementSystem();
system.run();
