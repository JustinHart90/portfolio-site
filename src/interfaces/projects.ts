export interface ActiveProjectData {
    title: string;
    techStack: string;
    description: string;
    logo: string;
    githubUrl: string;
    images: Array<string>;
}

export interface ProjectDetails {
    projectNames: Array<string>;
    activeProject: ActiveProjectData;
    allProjects: Array<ActiveProjectData>;

    onChangeProject(activeProject: ActiveProjectData) : void;
}