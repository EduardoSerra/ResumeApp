//GET DATA FROM MOBILE SERVICE CUSTOM API AND BIND TO KENDO UI VIEWMODEL
$(function () {
    var client = new WindowsAzure.MobileServiceClient(
        "https://resume42.azure-mobile.net/",
        "tkVzDgMHBDTPKsuZliJuqwWIrFoEiF34"
    );
    client.invokeApi("getResume", {
        body: null,
        method: "get"
    }).done(function (results) {
        var resume = results.result;
        var viewModel = kendo.observable({
            name: resume.name,
            address: resume.address,
            phone: resume.phone,
            linkedIn: resume.linkedIn,
            linkedInLink: "https://" + resume.linkedIn,
            email: resume.email,
            emailLink: "mailto:" + resume.email,
            workExperienceItems: resume.workExperience,
            educationItems: resume.education,
            skillItems: resume.skills
        });
        kendo.bind($("#paper"), viewModel);
    });
})