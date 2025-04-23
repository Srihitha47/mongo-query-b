//aggregation framework
db.employees.aggregate([
  {}, //pipeline 1
  {}, //pipeline 2
  {}, //pipeline 3
]);

db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } }
]);

db.employees.aggregate([
    { $project: { _id:0,name: 1, department: 1 } }
]);

db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $project: { _id:0,name: 1, department: 1 } }
]);


db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $addFields:{Bonus:"NA"}},
    { $project: { _id:0,name: 1, department: 1, Bonus:1 } },
    { $sort:{name:1}},
    { $skip:1},
    { $limit:1}
]);

db.employees.aggregate([
    { $match: { department: { $eq: "HR" } } },
    { $project: { _id:0,name: 1, department: 1, Bonus:"NA" } },
    { $sort:{name:1}},
    { $skip:1},
    { $limit:1}
]);