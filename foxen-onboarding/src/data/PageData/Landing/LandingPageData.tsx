interface ILandingPageData {
    purposeStatement: string;
    missionStatement: string;
    teamNorms: string[];
}

const LandingPageData: ILandingPageData = {
    purposeStatement: 'Our PURPOSE is to elevate the customer onboarding experience by providing technology solutions to the Implementation team',
    missionStatement: 'Our MISSION is to support revenue growth by delivering technology improvements that allow our systems to scale for growth, reduce manual effort and shorten the sales/implementation cycle. ',
    teamNorms: [
        'The team will prioritize and deliver work in a 2 -week sprint/deployment cycle',
        'Work is tracked on a Kanban board. Unplanned work will go through a PM/EM approval process before being pulled into the sprint',
        'The team will participate in Scrum ceremonies - daily stand-ups/refinement/sprint planning/retrospectives'
    ],
};

export default LandingPageData;