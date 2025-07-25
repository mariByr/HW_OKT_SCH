

 let coursesArray = [
           {
               title: 'JavaScript Complex',
               monthDuration: 5,
                hourDuration: 909
           },
            {
                title: 'Java Complex',
                monthDuration: 6,
                hourDuration: 900,

    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909

    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 907


    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 900
    }]
 let groupedByDuration= coursesArray.reduce((acc, course) => {
     const key = course.hourDuration
     if (!acc[key]) {
         acc[key] = []}
         acc[key].push({title:course.title,
        monthDuration:course.monthDuration} );

         return acc;
     },
     {})
 console.log(groupedByDuration)
