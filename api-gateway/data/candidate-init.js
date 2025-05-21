//create db
db = db.getSiblingDB('candidate');


//create user
db.createUser({
    user: "candidate_user",
    pwd: "candidate_password",
    roles:[
        {
            role: "readWrite",
            db: "candidate"
        }
    ]
});

//create collection
db.createCollection('candidate');

//    @Id
//    private String id;
//    private String name;
//    private Set<String> skills;


//create docs
db.candidate.insertMany([
    {
        _id: "1",
        name: "Aditya",
        skills: ["java", "spring"]
    },
    {
        _id: "2",
        name: "Manika Shrivastav",
        skills: ["docker"]
    },
    {
        _id: "3",
        name: "Anjali",
        skills: ["C++", "C"]
    },
    {
        _id: "4",
        name: "Natasha Meena",
        skills: ["testing"]
    }
]);

