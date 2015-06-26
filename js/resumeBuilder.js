var bio = {
    name: 'Imelda Santos',
    role: 'Web Developer',
    contacts: {
        mobile: '636-555-5555',
        email: 'isantos@example.com',
        github: 'icsantos',
        twitter: '@isantos140',
        location: 'Saint Peters, MO'
    },
    welcomeMessage: 'Mabuhay!',
    skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'jQuery',
        'T-SQL',
        'PL/SQL',
        'C#'
    ],
    biopic: 'images/nene_mii_250x250.jpg'
};

var education = {
    schools: [{
        name: 'University of the Philippines',
        location: 'Quezon City, Philippines',
        degree: 'BS',
        majors: [
            'Statistics'
        ],
        dates: 1982,
        url: 'http://www.up.edu.ph/'
    }, {
        name: 'Ateneo De Manila University',
        location: 'Makati, Philippines',
        degree: 'Certificate',
        majors: [
            'C++ Programming'
        ],
        dates: 1996,
        url: 'http://www.admu.edu.ph/'
    }, {
        name: 'Quilogy Learning Center',
        location: 'Saint Charles, MO',
        degree: 'Certificate',
        majors: [
            'Core Web Application Technologies with Microsoft Visual Studio 2005',
            'Advanced Web Application Technologies with Microsoft Visual Studio 2005'
        ],
        dates: 2008,
        url: 'http://www.quilogy.com'
    }],
    onlineCourses: [{
        title: 'Introduction to C#',
        school: 'Saint Charles Community College',
        dates: 2008,
        url: 'http://www.ed2go.com/online-courses/c-sharp-programming-introduction'
    }, {
        title: 'Introduction to ASP.NET',
        school: 'Saint Charles Community College',
        dates: 2008,
        url: 'http://www.ed2go.com/online-courses/asp-net-introduction'
    }, {
        title: 'Introduction to HTML and CSS',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud304'
    }, {
        title: 'Responsive Web Design Fundamentals',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud893'
    }, {
        title: 'Responsive Images',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud882'
    }, {
        title: 'How to Use Git and GitHub',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud775'
    }, {
        title: 'JavaScript Basics',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud804'
    }, {
        title: 'Introduction to jQuery',
        school: 'Udacity',
        dates: 2015,
        url: 'http://www.udacity.com/course/ud245'
    }]
};

var work = {
    jobs: [{
        employer: 'www.xmoppet.org',
        title: 'Web Developer',
        location: 'Saint Peters, MO',
        dates: '07/1998-present',
        description: 'Volunteer work involving research and web content development. Administered the Musgrave Foundation mailing list for two years.  Performed research in behalf of Van Ness Films for their production of "Biography: Roddy McDowall: Hollywood Best' + "'" + 's Friend", which aired on the A&E network on October 8, 1998. Coordinated with the Motion Picture and Television Fund Foundation for a fund-raising effort towards the Roddy McDowall Memorial Rose Garden; helped raise $5,125 in two years, earning the Musgrave Foundation naming rights to a bench in the rose garden.',
        url: 'http://www.xmoppet.org'
    }, {
        employer: 'Aspect Software',
        title: 'Consultant',
        location: 'Saint Charles, MO',
        dates: '04/2008-present',
        description: 'Using SQL Server Management Studio (SSMS), created and optimized Transact-SQL (T-SQL) scripts to return datasets for display in Dynamics CRM 2011 forms or for incremental loading of data from client systems into CRM databases.  Created reports using SQL Server Reporting Services (SSRS), Business Intelligence Development Studio (BIDS), T-SQL and Visual Basic.  Supported data load and extract applications by maintaining existing solutions and writing new projects using Visual C#, Visual C++, PL/SQL, XML, HTML, Python and Pervasive Map Designer.',
        url: 'http://www.aspect.com/'
    }, {
        employer: 'RelayHealth',
        title: 'Programmer Analyst',
        location: 'Saint Louis, MO',
        dates: '02/1998-12/2007',
        description: 'Maintained the Electronic Remittance Advice (ERA) system, an Extract, Transform, Load (ETL) application written in Visual FoxPro with calls to Gawk scripts, using SQL to access and update data in SQL Server.  Maintained the Medical Billing and Accounts Receivable system, an application written in Clipper.',
        url: 'http://www.relayhealth.com/'
    }]
};

var projects = {
    projects: [{
        title: 'Front-End Nanodegree Project 1: Build a Portfolio',
        dates: '04/18/2015 - 04/22/2015',
        description: 'Replicate a design mockup in a responsive website using HTML5 and CSS3.',
        url: 'https://github.com/icsantos/FEND-build-a-portfolio',
        images: [
            'images/fend1_laptop.jpg'
        ]
    }, {
        title: 'Front-End Nanodegree Project 2: Online Resume',
        dates: '05/07/2015 - present',
        description: 'Demonstrate mastery of JavaScript and jQuery to design an online resume.',
        url: 'https://github.com/icsantos/frontend-nanodegree-resume',
        images: [
            'images/fend2_laptop.jpg'
        ]
    }]
};

var icomoon = {
    contacts: {
        generic: '&#xe972;',
        mobile: '&#xe958;',
        email: '&#xea84;',
        github: '&#xeab1;',
        twitter: '&#xea91;',
        location: '&#xe948;',
        blog: '&#xeaba;'
    }
};

var HTMLStrings = {
    contacts: {
        generic: HTMLcontactGeneric,
        mobile: HTMLmobile,
        email: HTMLemail,
        github: HTMLgithub,
        twitter: HTMLtwitter,
        location: HTMLlocation,
        blog: HTMLblog
    }
};

function editContact(pText, pType) {
    'use strict';
    var contactData = bio.contacts[pType];
    var htmlEntity = icomoon.contacts[pType];
    var iconSpan = '<span class="contact-icon">' + htmlEntity + '</span>';
    var pos = pText.indexOf('<span class="orange-text">');
    pText = pText.replace('%data%', contactData);
    pText = pText.replace('orange-text', 'contact-text');
    pText = pText.replace('white-text', 'contact-data');
    pText = pText.slice(0, pos) + iconSpan + pText.slice(pos);
    return pText;
}

bio.display = function () {
    'use strict';
    $('#topContacts').before(HTMLheaderName.replace('%data%', bio.name));
    $('#topContacts').before(HTMLheaderRole.replace('%data%', bio.role));
    if (bio.contacts) {
        var contacts = bio.contacts;
        if (contacts.generic) {
            $('#topContacts, #footerContacts').append(editContact(HTMLcontactGeneric, 'generic'));
        }
        if (contacts.mobile) {
            $('#topContacts, #footerContacts').append(editContact(HTMLmobile, 'mobile'));
        }
        if (contacts.email) {
            $('#topContacts, #footerContacts').append(editContact(HTMLemail, 'email'));
        }
        if (contacts.github) {
            $('#topContacts, #footerContacts').append(editContact(HTMLgithub, 'github'));
        }
        if (contacts.twitter) {
            $('#topContacts, #footerContacts').append(editContact(HTMLtwitter, 'twitter'));
        }
        if (contacts.location) {
            $('#topContacts, #footerContacts').append(editContact(HTMLlocation, 'location'));
        }
        if (contacts.blog) {
            $('#topContacts, #footerContacts').append(editContact(HTMLblog, 'blog'));
        }
    }
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    if (bio.skills.length > 0) {
        var formattedSkillsStart = HTMLskillsStart.replace('id="skillsH3"', 'class="skillsH3"');
        formattedSkillsStart = formattedSkillsStart.replace('class="flex-box"', 'class="skills flex-box"');
        $('#header').append(formattedSkillsStart);
        bio.skills.forEach(function (skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill).replace('white-text', 'skill-data'));
        });
    }
};

education.display = function () {
    'use strict';
    var school,
        formattedSchoolName,
        formattedSchoolDegree,
        major;
    for (school = 0; school < education.schools.length; school += 1) {
        formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace('#', education.schools[school].url);
        formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
        for (major = 0; major < education.schools[school].majors.length; major += 1) {
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
        }
    }

    if (education.onlineCourses.length > 0) {
        var course,
            formattedTitle,
            formattedSchool;
        $('#education').append(HTMLonlineClasses);
        for (course = 0; course < education.onlineCourses.length; course += 1) {
            formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
            formattedTitle = formattedTitle.replace('#', education.onlineCourses[course].url);
            formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedTitle + formattedSchool);
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates));
            $('.education-entry:last').append('<br>');
        }
    }
};

work.display = function () {
    'use strict';
    var job,
        formattedWorkEmployer,
        formattedWorkTitle;
    for (job = 0; job < work.jobs.length; job += 1) {
        formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        formattedWorkEmployer = formattedWorkEmployer.replace('#', work.jobs[job].url);
        formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
    }
};

projects.display = function () {
    'use strict';
    var project,
        formattedProjectTitle,
        image;
    for (project = 0; project < projects.projects.length; project += 1) {
        formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        formattedProjectTitle = formattedProjectTitle.replace('#', projects.projects[project].url);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[project].dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));

        for (image = 0; image < projects.projects[project].images.length; image += 1) {
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[project].images[image]));
        }
    }
};

$('div.dark-gray').addClass('dark-background').removeClass('dark-gray');
$('div.gray').addClass('light-background').removeClass('gray');
$('div#header').addClass('header');
$('div#letsConnect').addClass('footer');
$('div#letsConnect h2').addClass('footerh2').removeClass('orange').removeClass('center-text');
$('div#mapDiv').addClass('mapDiv').append(googleMap);
$('div#map').addClass('googleMap');

bio.display();
education.display();
work.display();
projects.display();