//JOINS
//-$lookup operator

db.posts.aggregate([
    {
        $lookup:{
    from:"users",
    localField:"userId",
    foreignField:"_id",
    as:"user"
        },
    },

]);

db.users.aggregate([
    {
        $lookup:{
    from:"posts",
    localField:"_id",//main field
    foreignField:"userId",//matching with localfield
    as:"user"
        },
    },

]);