
 const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 5,
      completed: 2,
      failed: 9
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create initial UI design for the landing page",
        taskDate: "2025-01-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve alignment issue in navbar",
        taskDate: "2024-12-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate third-party payment API",
        taskDate: "2024-12-28",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    name: "Zoya Khan",
    email: "employee2@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 5,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Prepare wireframes for dashboard",
        taskDate: "2025-01-06",
        category: "UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update README",
        taskDescription: "Add setup instructions to README file",
        taskDate: "2024-12-18",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image size without quality loss",
        taskDate: "2024-12-25",
        category: "Performance"
      }
    ]
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "employee3@company.com",
    password: "123",
    taskCounts: {
      active: 8,
      newTask: 3,
      completed: 0,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Develop login UI with validation",
        taskDate: "2025-01-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Git Repo",
        taskDescription: "Initialize repository and push base code",
        taskDate: "2024-12-15",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for auth module",
        taskDate: "2024-12-27",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    name: "Ananya Iyer",
    email: "employee4@company.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 7,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB schema for users",
        taskDate: "2025-01-03",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from team",
        taskDate: "2024-12-22",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy to Server",
        taskDescription: "Deploy app to staging server",
        taskDate: "2024-12-30",
        category: "Deployment"
      }
    ]
  },
  {
    id: 5,
    name: "Harpreet Singh",
    email: "employee5@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 7,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Test Cases",
        taskDescription: "Write test cases for checkout flow",
        taskDate: "2025-01-07",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported UI bugs",
        taskDate: "2024-12-19",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Audit",
        taskDescription: "Analyze performance bottlenecks",
        taskDate: "2024-12-26",
        category: "Analysis"
      }
    ]
  }
];
 
  
  const admin = [{
    "id": 101,
    "email": "admin@me.com",
    "password": "123"
  }]


export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

 
  

  return{employees,admin} 
}
