//SET UP OBJECTS
//Candidate object will include things related directly to the candidate
const candidate =
{
    name: "Elizabeth Sanger",
    district: "7th District",
    donationSite: "https://donatetomywallet.com",
    bioTitle: "Biography of Elizabeth Sanger",
    bioDescription: "Congressman Sanger began her elected service career in 1998 as a Tennessee State Senatorn Sanger’s Senate career was marked by her commitment to fiscal common sense and government accountability. She became known to Tennesseans for holding “Budget Schools” both in her district and across the state; identifying waste, proposing realistic spending cuts, and offering solutions for a state in a budget crunch. While serving in the Tennessee Senate, Sanger led a statewide grassroots campaign to defeat a proposed state income tax. While defeating the tax, she earned the reputation as a champion of anti-tax and government accountability issues, taking to the airwaves to make the case that government wrongly believes it never gets enough of the taxpayer’s paycheck.",
    missionStmt: "As a small business woman, author, mother, grandmother, and Member of Congress, Elizabeth Sanger has dedicated her service to making America a more prosperous place to live."
}

//Platform object will contain a list of issues related to platform topics of the candidate
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

//Events object will contain the events that are related to the candidate or constituency
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

//Volunteer object will contain information to be collected via a volunteer sign up form - initialize each
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

//SET UP FUNCTIONS

//1--Donation Function: Update the url for the donation site
console.log("original donation site:", candidate.donationSite) //see what the original site was
const updateDonationSite = (url) =>
{
    candidate.donationSite = url
    console.log("updated donation site:",candidate.donationSite) //confirm the site url was updated
}

//Invoke Donation Function
updateDonationSite("https:doodrop.io")

//2--Platform Function: Update description for a platform topic
const updatePlatformTopic = (nameOfTopic, DescOfTopic) =>
{

    //Iterate through the platform array to find the correct topic to update
    for (i=0; i<platform.platformTopics.length; i++)
        if (platform.platformTopics[i].topicName === nameOfTopic) //make sure to [i] on the array to get the right instance
        {
            let original = platform.platformTopics[i].topicName + " - " + platform.platformTopics[i].description
            console.log("original topic and description", original)
            platform.platformTopics[i].description = DescOfTopic //updating description here
            let update = platform.platformTopics[i].topicName + " - " + platform.platformTopics[i].description
            console.log("updated platform topic description", update) //confirm the description was updated
        }

}
//Invoke Platform Function
updatePlatformTopic("Health Care","Lowering Health Care Costs" )


//3--Events Function: Add a new event
const addNewEvent = (title, description, date) =>
{

//add a new event to the events array
        events.listOfEvents.push({title,description,date})
            console.log("New Event", events) //see if it was added
        }


//Invoke Events Function
addNewEvent("May Day","Party at Hermitage Elementary for May Day", "05/01/2018" )









