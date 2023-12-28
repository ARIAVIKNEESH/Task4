//1. 

//Using for...of :

const MyDetail= [
  { name:"Aria",email:"usaria2005@gmail.com",MobileNumber:"1234567890",age:18},
  { name:"Vikneesh",email: "aria@gmail.com",MobileNumber:"987654321",age:19},
  { name:"Ashok",email:"ashok@gmail.com",MobileNumber:"1122334455",age:20}
];

for (let person of MyDetail) {
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

//Using regular for:

const MyDetail= [
  { name:"Aria",email:"usaria2005@gmail.com",MobileNumber:"1234567890",age:18},
  { name:"Vikneesh",email: "aria@gmail.com",MobileNumber:"987654321",age:19},
  { name:"Ashok",email:"ashok@gmail.com",MobileNumber:"1122334455",age:20}
];

for (let i=0;i<MyDetail.length;i++) {
  const person=MyDetail[i];
  for (let key in person){
    console.log(`${key}:${person[key]}`);
  }
}

//Using forEach:

const MyDetail= [
  { name:"Aria",email:"usaria2005@gmail.com",MobileNumber:"1234567890",age:18},
  { name:"Vikneesh",email: "aria@gmail.com",MobileNumber:"987654321",age:19},
  { name:"Ashok",email:"ashok@gmail.com",MobileNumber:"1122334455",age:20}
];

MyDetail.forEach(person => {
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
});

//Using for...in:

const MyDetail= [
  { name:"Aria",email:"usaria2005@gmail.com",MobileNumber:"1234567890",age:18},
  { name:"Vikneesh",email: "aria@gmail.com",MobileNumber:"987654321",age:19},
  { name:"Ashok",email:"ashok@gmail.com",MobileNumber:"1122334455",age:20}
];

for (let i in MyDetail) {
  const person = MyDetail[i];
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

//2. Resume usind JSON format:

const resume={
  "name":"Aria Vikneesh U S",
  "email":"usaria2005@gmail.com",
  "phone":"7010615636",
  "address":{
    "street":"5/55 P,Sindhu Nagar",
    "city":"Udumalpet,Tiruppur",
    "state":"Tamil Nadu",
    "pincode":"642126"
  },
  "summary":"Experienced software developer with a strong background in Full stack development and programming.",
  "education":[
    {
      "degree":"B.Tech Information Technology",
      "college":"Kongu Engineering",
      "year":2026
    }
  ],
  "skills": [
    "JavaScript",
    "C",
    "C++",
    "Python",
    "Java",
    "DataStructures",
    "HTML",
    "CSS",
  ],
  "Languages": [
      "Tamil",
      "English",
      "Japnese"
      ],
    "achievements":[
        "->Leadership Quality\n",
        "->District level chess player"
        ]
};

console.log(`Name: ${resume.name}`);
console.log(`Email: ${resume.email}`);
console.log(`Phone: ${resume.phone}`);
console.log(`Address: ${resume.address.street}, ${resume.address.city}, ${resume.address.state} ${resume.address.pincode}`);
console.log(`Summary: ${resume.summary}`);
console.log("\nEducation:");
for (let education of resume.education) {
  console.log(`- ${education.degree} at ${education.college}, Graduated in ${education.year}`);
}

console.log("\nSkills:");
for (let skill of resume.skills) {
  console.log(`- ${skill}`);
}
console.log(`Languages Known: ${resume.Languages}`);
console.log(`Achievements: \n${resume.achievements}`);