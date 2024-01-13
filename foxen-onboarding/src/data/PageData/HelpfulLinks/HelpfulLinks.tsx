interface ILinkData {
    Url: string;
    Title: string;
}

interface IHelpfulLinksPageData { 
    foxenLinks: ILinkData[];
    implementationDeliveryLinks: ILinkData[];
}

const FoxenLink1: ILinkData = {
    Url: "https://foxen.atlassian.net/wiki/home",
    Title: "Confluence - Home"
};

const FoxenLink2: ILinkData = {
    Url: "https://identity.foxen.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DPMPBlazor%26redirect_uri%3Dhttps%253A%252F%252Fproperty.foxen.com%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520openid%2520profile%2520email%2520pmp.user%26state%3De0e13bf673d74708ad45b22367c45b4a%26code_challenge%3DOTUYGS7m8oLkUAxzOMNfSXXfzuSC0VlFfEAjzkiLwAo%26code_challenge_method%3DS256%26response_mode%3Dquery",
    Title: "PM Portal"
};

const FoxenLink3: ILinkData = {
    Url: "https://foxen.atlassian.net/servicedesk/customer/portal/3",
    Title: "Service Desk"
};

const FoxenLink4: ILinkData = {
    Url: "https://foxen.atlassian.net/servicedesk/customer/portal/3/topic/f2570c11-8c9e-40b3-a8bc-62b04d0f95ae/article/2686977",
    Title: "Printing"
};


const ImplementationDeliveryLink1: ILinkData = {
    Url: "https://dev.azure.com/Foxen/",
    Title: "ADO Projects - Home"
};

const ImplementationDeliveryLink2: ILinkData = {
    Url: "https://portal.azure.com/#@foxen.com/resource/subscriptions/7f11419e-4f2b-4edf-9fd7-321e8928481e/resourceGroups/integration-dev/providers/microsoft.insights/workbooks/c34a058b-0bf9-40d2-9dce-ddd86d34e01f/workbook",
    Title: "Azure Dashboard - Integration Monitor Spikes"
};

const ImplementationDeliveryLink3: ILinkData = {
    Url: "https://foxen.atlassian.net/jira/software/c/projects/ID/boards/23/",
    Title: "Implementation Delivery - Jira Project"
};

const ImplementationDeliveryLink4: ILinkData = {
    Url: "https://foxen.atlassian.net/jira/servicedesk/projects/ENG/queues/custom/239",
    Title: "Prod Support Queue"
};

const ImplementationDeliveryLink5: ILinkData = {
    Url: "https://dev.azure.com/Foxen/Integration",
    Title: "Integration ADO Project"
};

const ImplementationDeliveryLink6: ILinkData = {
    Url: "https://grafana-foxen-prod-ftfxg5b8bubkb8bs.eus.grafana.azure.com/?orgId=1",
    Title: "Grafana (Logging)"
};

const ImplementationDeliveryLink7: ILinkData = {
    Url: "https://foxen.atlassian.net/wiki/spaces/foxenproduct/pages/45285458/Database+Table+Definitions",
    Title: "Database Table Definitions"
};

const HelpfulLinksPageData: IHelpfulLinksPageData = {
    foxenLinks: [
        FoxenLink1,
        FoxenLink2,
        FoxenLink3,
        FoxenLink4
    ],
    implementationDeliveryLinks: [
        ImplementationDeliveryLink1,
        ImplementationDeliveryLink2,
        ImplementationDeliveryLink3,
        ImplementationDeliveryLink4,
        ImplementationDeliveryLink5,
        ImplementationDeliveryLink6,
        ImplementationDeliveryLink7
    ]

};

export default HelpfulLinksPageData;