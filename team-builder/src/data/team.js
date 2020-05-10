export const team = [
    {
        id : 0,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0123RSAN15-4ec1c165aab7-72',
        name: 'Paul H. Menard',
        role: 'Web Developer',
        location: 'Boston, Ma.',
        quote: 'Life is like a tree, it branches off into many directions. But only one branch leads to the top.',
    },
    {
        id: 1,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012BRRSR46-601b7771bb4f-72',
        name: 'Ben',
        role: 'Web Developer',
        location: 'Somewhere',
        quote: 'Stay strong',
    },
    {
        id: 2,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0123RSBKF1-fbedb989973d-512',
        name: 'Jess Bonanno',
        role: 'Web Developer',
        location: 'Maine',
        quote: 'yep !!',
    },
    {
        id: 3,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012JQ21VFD-01cf6b4b0f96-72',
        name: 'Jason Long',
        role: 'TL / Web Developer',
        location: 'Chicago',
        quote: 'sure !!',
    },
    {
        id: 4,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012JHXR8PL-96f55b1e0423-72',
        name: 'Charlene Johnson',
        role: 'Web Developer',
        location: 'Not Sure',
        quote: 'ok !!',
    },
    {
        id: 5,
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0138D94D7A-1a134a9187c6-72',
        name: 'Joseph Kelleher',
        role: 'Web Developer',
        location: 'Earth',
        quote: 'You can do it !!',
    }
    
    

];

export const addTeamMember = function(member) {
    team.unshift(member);
}

export default team;
