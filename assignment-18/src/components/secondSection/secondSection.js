import SecondComponent from './SecondComponent'

import './secondSection.css';
function SecondSection(){

    let post =[{
        month: 'Apr',
        date:15,
        head: 'Jenkins Operator becomes an official sub-project!',
    para: `We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.
    What does it mean for the project?
    Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project.
    Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with...`
    
    },
    {
    month: 'Apr',
        date:7,
        head: 'Welcome the SheCodeAfrica Contributhon participants!',
    para: `The SheCodeAfrica Contributhon started April 1, 2021.
    The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors.
    This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations.
    The 5 mentees joining the...`
    
    },
    {
    month: 'Mar',
        date:22,
        head: 'Welcome Ewelina Wilkosz - new Jenkins Governance Board member',
    para: `We would like to announce changes in the Jenkins Governance Board.
    As it was announced earlier this month, Marky Jackson has decided to step down from his elected roles.
    On behalf of the Jenkins community, we would like to thank Marky for all contributions and for the continued participation in the Jenkins community.
    As an active Jenkins contributor and community leader, Marky helped a lot of initiatives...`
    
    }
]

    return(
        <div className='secondSection'>
        <h1>Recent Blog Posts</h1>
        <SecondComponent data={post[0]} />
        <SecondComponent data={post[1]} />
        <SecondComponent data={post[2]} />
    
    
    
        </div>
    );
}
export default SecondSection;