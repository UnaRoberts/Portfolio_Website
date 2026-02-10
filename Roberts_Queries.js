//#1:


use("SamplemFlix")
db.Movies.aggregate([
   {
        $match: {
        "awards.wins": {$gt: 10}
            	}
    },
{$project: {
    title: 1, 
    "awards.wins": 1, 
_id: 0
}
},

{
    $sort: {
        "awards.wins": -1
    }
}
])




//#2


use("SamplemFlix")
db.Movies.aggregate([
   {
        $match: {
        "directors": "David Fincher", 
        "awards.nominations": {$gt: 1} 
                    }
},
{$project: {
    title: 1, 
    directors: 1,
    "awards.nominations": 1, 
    "awards.wins":1,
_id: 0
}
},

{
    $sort: {
        "awards.wins": 1
    }
}

])





//#3


use("SamplemFlix")
db.Movies.aggregate([
   {
        $match: {
        "directors": "David Fincher", 
        "awards.nominations": {$gt: 1},
        "awards.wins": {$gt: 1} 
                    }
},
{$project: {
    title: 1, 
    directors: 1,
    "awards.nominations": 1, 
    "awards.wins":1,
_id: 0
}
},

{
    $sort: {
        "awards.wins": -1
    }
}

])






//#4


use("SamplemFlix")
db.Movies.aggregate([
   {
        $match: {
        genres: {$in: [" Sci-Fi", "Drama", "Animation"]},
        
        "awards.nominations": {$gt: 1},
        "awards.wins": {$gt: 1} 
                    }
},
{$project: {
    title: 1, 
    genres: 1,
    "awards.nominations": 1, 
    "awards.wins":1,
_id: 0
}
},

{
    $sort: {
        "awards.wins": -1
    }
}

])






//#5:


use("SamplemFlix")

var numwins = 120
db.Movies.aggregate([
   {
        $match: {
        "awards.wins": {$gt: numwins} 
                    }
},
{$project: {
    title: 1, 
    genres: 1,
    "awards.nominations": 1, 
    "awards.wins":1,
_id: 0
}
},

{
    $sort: {
        "awards.wins": -1
    }
}

])







//#6

db.Movies.insertOne({

    plot: "A boy and girl compete academically.",
    genres: "Rom-com",
    cast: ["Jacob Latimore", "Sami Gayle"],
    title: "Candy Jar",
    fullplot: "Candy Jar is a 2018 American romantic comedy film directed by Ben Shelton and starring Sami Gayle and Jacob Latimore. The screenplay concerns a dueling high school debate champion duo who are trying to get into the colleges of their dreams.",
    released: ISODate("2018-04-27T00:00:00.000+00:00"),
    directors: ["Ben Shelton"]


});


return value:

{
  "acknowledged": true,
  "insertedId": {
    "$oid": "6900460f4f5f5512ab474728"
  }
}



//#6.1 




db.Movies.aggregate([
   {
        $match: {
        _id: ObjectId("69003dd306b4a8d128f2fb81")

                }
}

])


//#7


//7.1 

db.Movies.updateOne(

{  _id: ObjectId("69003dd306b4a8d128f2fb81")},
{$set: {runtime: 2}}


)



//7.2. 

db.Movies.updateOne(

{  _id: ObjectId("69003dd306b4a8d128f2fb81")},
    {$set: {
"imdb.rating": 9.5, 
"imdb.votes": 2000000, 
"imdb.id": 4
            }
    }
)



//8. 

db.Movies.deleteOne(
   {  
        _id: ObjectId("69003dd306b4a8d128f2fb81")          
}

)



















