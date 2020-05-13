export const team = [
    {
        id : 0,
        badge: '',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0123RSAN15-4ec1c165aab7-72',
        name: 'Paul Menard',
        role: 'Web Developer',
        location: 'Boston, Ma.',
        quote: 'Life is like a tree, it branches off into many directions. But only one branch leads to the top.',
        email: 'paul-menard@lambdastudents.com'
    },
    {
        id: 1,
        badge: 'https://emoji.slack-edge.com/TSZCHB482/javascript/87da73c317c834e7.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012BRRSR46-601b7771bb4f-72',
        name: 'Ben',
        role: 'Web Developer',
        location: 'Somewhere',
        quote: 'Stay strong',
        email: 'ben-venker@lambdastudents.com'
    },
    {
        id: 2,
        badge: 'https://emoji.slack-edge.com/TSZCHB482/hq/c06f660f10abb9d2.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0123RSBKF1-fbedb989973d-512',
        name: 'Jess Bonanno',
        role: 'Web Developer',
        location: 'Maine',
        quote: 'yep !!',
        email: ''
    },
    {
        id: 3,
        badge: 'https://emoji.slack-edge.com/TSZCHB482/lambda-new-tl/8888315fd681bb84.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012JQ21VFD-01cf6b4b0f96-72',
        name: 'Jason Long',
        role: 'TL / Web Developer',
        location: 'Chicago',
        quote: 'sure !!',
        email: ''
    },
    {
        id: 4,
        badge: 'https://emoji.slack-edge.com/TSZCHB482/lambdallama/00d0449bf475ee6c.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012JHXR8PL-96f55b1e0423-72',
        name: 'Charlene Johnson',
        role: 'Web Developer',
        location: 'Not Sure',
        quote: 'ok !!',
        email: 'charlene-johnson@lambdastudents.com'
    },
    {
        id: 5,
        badge: 'https://a.slack-edge.com/production-standard-emoji-assets/10.2/google-small/1f60e@2x.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W0138D94D7A-1a134a9187c6-72',
        name: 'Joseph Kelleher',
        role: 'Web Developer',
        location: 'Earth',
        quote: 'You can do it !!',
        email: ''
    },
    {
        id: 6,
        badge: 'https://emoji.slack-edge.com/TSZCHB482/lambdapm-new/4a9f0e6de80a7e31.png',
        image: 'https://ca.slack-edge.com/T4JUEB3ME-W012JQ02P6X-c84e5d7ba714-72',
        name: 'Austin Kelsay',
        role: 'TL / Web Developer',
        location: 'Midwest',
        quote: 'have a great day!',
        email: ''
    }
    
    

];

export const addTeamMember = function(member) {
    team.unshift(member);
}

export default team;
