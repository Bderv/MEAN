users = [
    {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
    music: ["guitar", "flute"],
    dance: ["tap", "salsa"],
    television: ["Black Mirror", "Stranger Things"],
    },
    },
    {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
    food: ["honey", "honeycomb"],
    flowers: ["honeysuckle"],
    mysteries: ["Heffalumps"],
    },
    },
    {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
    space: ["stars", "planets", "improbability"],
    home: ["tea", "yellow bulldozers"],
    },
},
]



function userLang(users){
    for(i=0; i<users.length; i++){
        x= users[i].fname
        y= users[i].lname
        z=""
        c=""
        for(a=0; a<users[i].languages.length; a++){
            f=users[i].languages[a]
            z= z+f
            if(a<users[i].languages.length-1){
                z = z+", "
            }
            else{
                z=z+". "
            }
        }
        console.log(x,y, "knows", z)
        for(a=0; a<users[i].interests.length; a++){
            n=users[i].interests(all)
            c= c+n
            if(a<users[i].interests.length-1){
                c = c+", "
            }
            else{
                c=c+". "
            }
        }
        console.log(x, "is interested in", c)
        
    }
}

userLang(users)








