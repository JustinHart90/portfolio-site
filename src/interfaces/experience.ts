export interface Role {
    title: string;
    description: Array<string>;
    dates: string;
}

export interface JobData {
    company: string;
    titles: Array<string>;
    websiteUrl: string;
    logo: string;
    roles: Array<Role>
}

export interface ActiveJob {
    activeJob: JobData;
}

export interface ExperienceData {
    companyNames: Array<string>;
    activeJob: JobData;
    allJobs: Array<JobData>;

    onChangeCompany(activeCompanyData: JobData) : void;
}