var original = document.body.innerHTML;
var courses = [];

window.onload = function addCourses() {
    var course = {id: document.getElementById('course-id').value, description: document.getElementById('course-reason').value};
    course.push(course);
    document.getElementById('intro-courses').innerHTML = courses;
}

function loadImage() {
    var input = document.getElementById('image');
    var file = input.files[0];
    if (file) {
        var imageURL = URL.createObjectURL(file);
        document.getElementById('preview').src = imageURL;
    }
    else {
        var defaultimageURL = "images/intro-chinatown-ny.jpg";
        document.getElementById('preview').src = defaultimageURL;
    }
    return imageURL;
}

function reset() {
    document.body.innerHTML = original;
}

var index = 1;
var defaultCoursesid = [];
    defaultCoursesid.push('ITIS3200 - Intro to Security and Privacy');
    defaultCoursesid.push('ITSC2181 - Intro to Computer Systems');
    defaultCoursesid.push('STAT2122 - Intro to Probability and Statistics');
    defaultCoursesid.push('ITSC3146 - Intro to Operating Systems and Networking');
    defaultCoursesid.push('ITIS3135 - Web App Design and Development');
var defaultCoursesreason = [];
    defaultCoursesreason.push('It is required for my degree and concentration.');
    defaultCoursesreason.push('It is required for my degree.');
    defaultCoursesreason.push('Unfortunately, I need this for my degree.');
    defaultCoursesreason.push('It is required for my degree.');
    defaultCoursesreason.push('It is required for my degree, but I am also thrilled to learn more about this subject.');

function addCourses() {
    var li = document.createElement('li');
    var textareaCourseID = document.createElement('textarea');
    var textareaCourseReason = document.createElement('textarea');
    textareaCourseID.setAttribute("type", "textarea");
    textareaCourseID.setAttribute("id", "course-id");
    textareaCourseID.setAttribute("rows", "2");
    textareaCourseID.setAttribute("cols", "20");
    textareaCourseID.textContent = defaultCoursesid[index];
    textareaCourseReason.setAttribute("type", "textarea");
    textareaCourseReason.setAttribute("id", "course-reason");
    textareaCourseReason.setAttribute("rows", "2");
    textareaCourseReason.setAttribute("cols", "20");
    textareaCourseReason.textContent = defaultCoursesreason[index];
    let form = document.getElementById('courses');
    li.appendChild(textareaCourseID)
    li.append(" : ");
    li.appendChild(textareaCourseReason);
    form.appendChild(li);    
    index++;
}

function deleteCourse() {
    var li = document.getElementById('courses').lastChild;
    li.parentNode.removeChild(li);
}

let form = document.getElementById('byo-introduction');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var mascot = document.getElementById('mascot').value;
    var image = document.getElementById('preview').src;
    var image_caption = document.getElementById('image-caption').value;
    var personal_background = document.getElementById('personal-background').value;
    var professional_background = document.getElementById('professional-background').value;
    var academic_background = document.getElementById('academic-background').value;
    var background_in_web_development = document.getElementById('background-in-web-development').value;
    var platform = document.getElementById('platform').value;
    var course = {id: document.getElementById('course-id').value, description: document.getElementById('course-reason').value};
    courses.push(course);
    var funny_thing = document.getElementById('funny-thing').value;
    var anything_else = document.getElementById('anything-else').value;

    if (username =="" || mascot =="" || image=="" || image_caption =="" || personal_background =="" || professional_background =="" || academic_background =="" || background_in_web_development =="" || platform =="" || courses =="") 
    { alert('A field wasn\'\'t filled out.'); return false; } 

    document.getElementById('form').style.display = 'none';
    document.getElementById('byo-intro').style.display = 'block';
    
    document.getElementById('intro-username').innerHTML = username;
    document.getElementById('intro-mascot').innerHTML = mascot;
    document.getElementById('intro-image').src = image;
    document.getElementById('intro-image-caption').innerHTML = image_caption;
    document.getElementById('intro-personal-background').innerHTML = personal_background;
    document.getElementById('intro-professional-background').innerHTML = professional_background;
    document.getElementById('intro-academic-background').innerHTML = academic_background;
    document.getElementById('intro-background-in-web-development').innerHTML = background_in_web_development;
    document.getElementById('intro-platform').innerHTML = platform;
    /*
    var courseList = [];
    var courseText = "";
    for (var i=0; i < courses.length; i++) {
        var courseItem = document.createElement('li');
        courseText = document.createTextNode(courses[i].id) + ': ' + document.createTextNode(courses[i].description);
        courseItem.appendChild(courseText);
        courseList.appendChild(courseItem);
    }
    document.getElementById('intro-courses').innerHTML = courseList;
    */
    var extra;
    var child;
    if (funny_thing == "") { 
        extra = document.getElementById('additional-info1');
        child = document.getElementById('intro-funny-thing');
        extra.removeChild(child); 
    } else { 
        document.getElementById('intro-funny-thing').innerHTML = funny_thing; 
    }

    if (anything_else == "") { 
        extra = document.getElementById('additional-info2');
        child = document.getElementById('intro-anything-else');
        extra.removeChild(child); 
    } else { 
        document.getElementById('intro-anything-else').innerHTML = anything_else; 
    }
    
    alert('Successfully created your page!');
});