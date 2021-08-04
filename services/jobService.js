const getJobs = () => {
    var jobs = [
        {   
            id: 4518,
            title: "Door inspection",
            status: "Acknowledged",
            description: "Ensure fire door is secure",
            location: "Cambridge Harcome Plaza",
            date: new Date(2021, 9, 4, 9, 30)
          }
          , {   
            id: 4519,
            title: "Lift inspection",
            status: "Acknowledged",
            description: "Repair to broken glazing in reception",
            location: "Cambridge Harcome Plaza",
            date: new Date(2021, 8, 10, 9, 0)
          }
          , {   
            id: 4500,
            title: "Glazing repair",
            status: "Acknowledged",
            description: "Repair to broken glazing in reception",
            location: "The Shopping Centre",
            date: new Date(2021, 8, 6, 11, 0)
          }     
          , {   
            id: 4520,
            title: "General inspection",
            status: "Await more information",
            description: "General inspect of property and site",
            location: "10 Downing Street",
            date: new Date(2022, 1, 1, 15, 45)
          }                    
    ];

    return jobs;
}