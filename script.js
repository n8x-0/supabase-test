"use strict";
const form = document.querySelector("form");
let imgSrc;
document.querySelector("#imageInp").addEventListener("change", (e) => {
    const target = e.target;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            imgSrc = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
form.onsubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, experience1, experience2, experience3, education1, education2, education3, skills1, skills2, skills3 } = form;
    const resumeData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        experience1: experience1.value,
        experience2: experience2.value,
        experience3: experience3.value,
        education1: education1.value,
        education2: education2.value,
        education3: education3.value,
        skills1: skills1.value,
        skills2: skills2.value,
        skills3: skills3.value,
    };
    if (imgSrc) {
        resumeData.imgSrc = imgSrc;
    }
    renderData(resumeData);
    const printBtn = document.querySelector("#printBtn");
    printBtn.innerText = "Print";
    printBtn.onclick = () => print();
};
const renderData = (data) => {
    const resumeOutputCont = document.querySelector("#resumeOutput");
    console.log(data);
    resumeOutputCont.innerHTML = `
        <div class="template" contenteditable="true">
        <div class="resume">
        <div class="header">
            <div>
              <h1>${data.name}</h1>
              <p>Web Developer</p>
            </div>
            <img src="${data.imgSrc ? data.imgSrc : "https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-173998594.jpg"}" alt="Profile Image">
        </div>

        <div class="contact-info">
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
        </div>

        <div class="section">
            <h2>Education</h2>
            <p>${data.education1}</p>
            <p>${data.education2}</p>
            <p>${data.education3}</p>
        </div>

        <div class="section">
            <h2>Experience</h2>
            <p>${data.experience1}</p>
            <p>${data.experience2}</p>
            <p>${data.experience3}</p>
        </div>

        <div class="section">
            <h2>Skills</h2>
            <div class="skills">
                <span>${data.skills1}</span>
                <span>${data.skills2}</span>
                <span>${data.skills3}</span>
            </div>
        </div>
    </div>
    </div>
    `;
};
