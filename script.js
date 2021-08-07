var student= {
    name: 'Ram',
    age: '25',
    gender: 'Male',
    address: {
        city: 'Lucknow',
        State:  'UP',
        Pin: 226001
    },
    displayname: function()
    {
        console.log("Hi, I am Ram");
    }
}

console.log(student.name);
console.log(student["address"]["Pin"]);
console.log(student.displayname());
student.hobbbies = ['football','cricket','swiming','dancing', 'singing'];

console.log(student);

for (i=0; i<=hobbbies.length-1; i++)
{
    console.log(hobbbies[i]);
}