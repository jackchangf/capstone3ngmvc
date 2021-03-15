
// global var injected in modules providers as service
export class Global {
    customerUrl: string = "https://localhost:44301/api/CustomerAPI/";
    securityUrl: string = "https://localhost:44301/api/Security";
    courseUrl: string = "https://localhost:44301/api/CourseAPI";
    // customerUrl: string = "https://jackchangf.azurewebsites.net/api/CustomerAPI/";
    // securityUrl: string = "https://jackchangf.azurewebsites.net/api/Security";
    // courseUrl: string = "https://jackchangf.azurewebsites.net/api/CourseAPI";
    token: string = "";
}