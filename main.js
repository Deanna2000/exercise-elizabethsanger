// Candidate object will include things related directly to the candidate
const candidate =
{
    name: "Elizabeth Sanger",
    district: "7th District",
    donationSite: "https://donatetomywallet.com",
    bioTitle: "Biography of Elizabeth Sanger",
    bioDescription: "",
    missionStmt: ""
}

// Platform object will contain a list of issues related to platform topics of the candidate
const platform =
{
    platformTopics:
    [
        {
            topicName: "Taxes",
            description: "State income tax",
            position: "against"
        },
        {
            topicName: "Jobs",
            description: "Job creation plans",
            position: "for"
        },
        {
            topicName: "Infrastructure",
            description: "Building and maintaining roads and bridges",
            position: "against"
        },
        {
            topicName: "Health Care",
            description: "Funding health care services for low income families",
            position: "against"
        },
        {
            topicName: "Crime and Enforcement",
            description: "Adding more law enforcement officers and investing in more weaponry",
            position: "for"
        },
    ]
}

// Events object will contain the events that are related to the candidate or constituency
const events =
{
    listOfEvents:
        [
            {
                title: "Rally",
                description: "Rally to get out the vote for Elizabeth",
                date: "4/14/2018"
            },
            {
                title: "Donor Dinner",
                description: "Dinner to meet with donors to ELizabeth's campaign",
                date: "4/28/2018"
            },
            {
                title: "Ribbon Cutting",
                description: "New manufacturer is moving their business to TN and Elizabether will be speaking",
                date: "5/2/2018"
            },
        ]
}

// Volunteer object will contain information to be collected via a volunteer sign up form - initialize each
let volunteers =
    {
        volunteerInfo:
            [
                {
                    ID: "0001",
                    name: "Jerry Lizard",
                    address: "under a rock",
                    email: "jlizard@gmail.com",
                    phone: "777-777-7777",
                    availability:
                    {
                        daysOfWeek: "Thursday", //Multiple days?
                        timeOfDay: "AM", //AM or PM
                    },
                    activities: "answering phone"
                }
            ]
    }

const imageGallery =
{
    headshot: "http://waterfordwhispersnews.com/wp-content/uploads/2016/07/fPDv1cz.jpg",
    family: "https://i.pinimg.com/originals/f2/7c/43/f27c43d49f2ef793f5ab1c28a0c507d0.jpg",
    constituents: "https://www.geek.com/wp-content/uploads/2016/04/featured-8-625x352.jpg"
}





