export interface SchoolData {
    readonly name: string;
    readonly longName: string;
    readonly focus: string;
    readonly showGpa: boolean;
    readonly gpa: string;
    readonly dates: string;
    readonly websiteUrl: string;
    readonly logo: string;
}

export interface ActiveSchool {
    readonly activeSchool: SchoolData;
}

export interface EducationData {
    readonly schoolNames: Array<string>;
    readonly activeSchool: SchoolData;
    readonly allSchools: Array<SchoolData>;

    onChangeSchool(activeSchoolData: SchoolData) : void;
}