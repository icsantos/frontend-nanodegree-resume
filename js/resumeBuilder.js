$(function() {
  'use strict';

  var model = {
    bio: {
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
    },
    
    education: {
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
    }
    
  };

  var controller = {
    init: function() {
      view.renderBio(model.bio);
      view.renderEducation(model.education);
    }
  };

  var view = {
    template: {
      headerName: '<h1 id="name">%data%</h1>',
      headerRole: '<span>%data%</span><hr/>',
      contact: '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
      bioPic: '<img src="%data%" class="biopic">',
      welcomeMsg: '<span class="welcome-message">%data%</span>',
      skillsStart: '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
      skills: '<li class="flex-item"><span class="white-text">%data%</span></li>',

      schoolStart: '<div class="education-entry"></div>',
      schoolName: '<a href="#">%data%',
      schoolDegree: ' -- %data%</a>',
      schoolDates: '<div class="date-text">%data%</div>',
      schoolLocation: '<div class="location-text">%data%</div>',
      schoolMajor: '<em><br>Major: %data%</em>',
      
      onlineClasses: '<h3>Online Classes</h3>',
      onlineTitle: '<a href="#">%data%',
      onlineSchool: ' - %data%</a>',
      onlineDates: '<div class="date-text">%data%</div>',
      onlineURL: '<br><a href="#">%data%</a>'
    },

    icomoon: {
      contacts: {
        generic: '&#xe972;',
        mobile: '&#xe958;',
        email: '&#xea84;',
        github: '&#xeab1;',
        twitter: '&#xea91;',
        location: '&#xe948;',
        blog: '&#xeaba;'
      }
    },

    renderBio: function (bio) {
      $('#topContacts').before(view.template.headerName.replace('%data%', bio.name));
      $('#topContacts').before(view.template.headerRole.replace('%data%', bio.role));
      var contactData,
        htmlText,
        htmlEntity,
        iconSpan,
        pos;
      Object.keys(bio.contacts).forEach(function (contactType) {
        contactData = bio.contacts[contactType];
        htmlText = view.template.contact.replace('%contact%', contactType) ;
        htmlEntity = view.icomoon.contacts[contactType];
        iconSpan = '<span class="contact-icon">' + htmlEntity + '</span>';
        pos = htmlText.indexOf('<span class="orange-text">');
        htmlText = htmlText.replace('%data%', contactData);
        htmlText = htmlText.replace('orange-text', 'contact-text');
        htmlText = htmlText.replace('white-text', 'contact-data');
        htmlText = htmlText.slice(0, pos) + iconSpan + htmlText.slice(pos);
        $('#topContacts, #footerContacts').append(htmlText);
      });
      $('#header').append(view.template.bioPic.replace('%data%', bio.biopic));
      $('#header').append(view.template.welcomeMsg.replace('%data%', bio.welcomeMessage));
      if (bio.skills.length > 0) {
        var formattedSkillsStart = view.template.skillsStart.replace('id="skillsH3"', 'class="skillsH3"');
        formattedSkillsStart = formattedSkillsStart.replace('class="flex-box"', 'class="skills flex-box"');
        $('#header').append(formattedSkillsStart);
        bio.skills.forEach(function (skill) {
          $('#skills').append(view.template.skills.replace('%data%', skill).replace('white-text', 'skill-data'));
        });
      }
    },

    renderEducation: function (education) {
      var formattedSchoolName,
        formattedSchoolDegree;
      education.schools.forEach(function (school) {
        formattedSchoolName = view.template.schoolName.replace('%data%', school.name);
        formattedSchoolName = formattedSchoolName.replace('#', school.url);
        formattedSchoolDegree = view.template.schoolDegree.replace('%data%', school.degree);
        $('#education').append(view.template.schoolStart);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(view.template.schoolDates.replace('%data%', school.dates));
        $('.education-entry:last').append(view.template.schoolLocation.replace('%data%', school.location));
        school.majors.forEach(function (major) {
          $('.education-entry:last').append(view.template.schoolMajor.replace('%data%', major));
        });
      });
      if (education.onlineCourses.length > 0) {
        var formattedTitle,
          formattedSchool;
        $('#education').append(view.template.onlineClasses);
        education.onlineCourses.forEach(function (course) {
          formattedTitle = view.template.onlineTitle.replace('%data%', course.title);
          formattedTitle = formattedTitle.replace('#', course.url);
          formattedSchool = view.template.onlineSchool.replace('%data%', course.school);
          $('#education').append(view.template.schoolStart);
          $('.education-entry:last').append(formattedTitle + formattedSchool);
          $('.education-entry:last').append(view.template.onlineDates.replace('%data%', course.dates));
          $('.education-entry:last').append('<br>');
        });
      }
    }

  };

  controller.init();
}());

var work = {
    jobs: [{
        employer: 'www.xmoppet.org',
        title: 'Web Developer',
        location: 'Saint Peters, MO',
        dates: '07/1998-present',
        description: 'Volunteer work involving research and web content development. Administered the Musgrave Foundation mailing list for two years.  Performed research in behalf of Van Ness Films for their production of "Biography: Roddy McDowall: Hollywood' + "'" + 's Best Friend", which aired on the A&E network on October 8, 1998. Coordinated with the Motion Picture and Television Fund Foundation for a fund-raising effort towards the Roddy McDowall Memorial Rose Garden; helped raise $5,125 in two years, earning the Musgrave Foundation naming rights to a bench in the rose garden.',
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

work.display = function () {
    'use strict';
    var formattedWorkEmployer,
        formattedWorkTitle;
    work.jobs.forEach(function (job) {
        formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        formattedWorkEmployer = formattedWorkEmployer.replace('#', job.url);
        formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
        $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    });
};

projects.display = function () {
    'use strict';
    var formattedProjectTitle;
    projects.projects.forEach(function (project) {
        formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        formattedProjectTitle = formattedProjectTitle.replace('#', project.url);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
        project.images.forEach(function (image) {
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
        });
    });
};

$('div.dark-gray').addClass('dark-background').removeClass('dark-gray');
$('div.gray').addClass('light-background').removeClass('gray');
$('div#header').addClass('header');
$('div#letsConnect').addClass('footer');
$('div#letsConnect h2').addClass('footerh2').removeClass('orange').removeClass('center-text');
$('div#mapDiv').addClass('mapDiv').append(googleMap);
$('div#map').addClass('googleMap');

work.display();
projects.display();
