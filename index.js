// ** Nav
const clickHardSkills = document.getElementById('NavHardSkills');
const clickSoftSkills = document.getElementById('NavSoftSkills');
const clickMadSkills = document.getElementById('NavMadSkills');

let toggleHardSkills = false;
let toggleSoftSkills = false;
let toggleMadSkills = false;

clickHardSkills.addEventListener('click', () => {
    toggleHardSkills = !toggleHardSkills
    document.getElementById('contentHardSkills').setAttribute("class", toggleHardSkills ? 'NavDeployed' : 'notVisible');
});
clickSoftSkills.addEventListener('click', () => {
    toggleSoftSkills = !toggleSoftSkills
    document.getElementById('contentSoftSkills').setAttribute("class", toggleSoftSkills ? 'NavDeployed' : 'notVisible');
});
clickMadSkills.addEventListener('click', () => {
    toggleMadSkills = !toggleMadSkills
    document.getElementById('contentMadSkills').setAttribute("class", toggleMadSkills ? 'NavDeployed' : 'notVisible');
})

// ** Share
const btnShare = document.getElementById('btn_ShareCv');
const myUrl = encodeURIComponent(document.location.href);
const urlShare = "https://www.linkedin.com/shareArticle?url=" + myUrl;
const strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"

btnShare.addEventListener('click', (e) => {
    e.preventDefault()
    window.open(
        urlShare,
        "Share as LinkedIn",
        strWindowFeatures
    );
})
