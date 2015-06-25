
var bio = {
  "name" : "Imelda Santos",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "636-555-5555",
    "email" : "isantos@example.com",
    "github" : "icsantos",
    "twitter" : "@isantos140",
    "location" : "Saint Peters, MO"
  },
  "welcomeMessage" : "Mabuhay!",
  "skills" : [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "T-SQL",
    "PL/SQL",
    "C#"
  ],
  "biopic" : "images/nene_mii_250x250.jpg"
};

var education = {
  "schools" : [{
      "name" : "University of the Philippines",
      "location" : "Quezon City, Philippines",
      "degree" : "BS",
      "majors" : [
        "Statistics"
      ],
      "dates" : 1982,
      "url" : "http://www.up.edu.ph/"
    }, {
      "name" : "Ateneo De Manila University",
      "location" : "Makati, Philippines",
      "degree" : "Certificate",
      "majors" : [
        "C++ Programming"
      ],
      "dates" : 1996,
      "url" : "http://www.admu.edu.ph/"
    }, {
      "name" : "Quilogy Learning Center",
      "location" : "Saint Charles, MO",
      "degree" : "Certificate",
      "majors" : [
        "Core Web Application Technologies with Microsoft Visual Studio 2005",
        "Advanced Web Application Technologies with Microsoft Visual Studio 2005"
      ],
      "dates" : 2008,
      "url" : "http://www.quilogy.com"
    }
  ],
  "onlineCourses" : [{
      "title" : "Introduction to C#",
      "school" : "Saint Charles Community College",
      "dates" : 2008,
      "url" : "http://www.ed2go.com/online-courses/c-sharp-programming-introduction"
    }, {
      "title" : "Introduction to ASP.NET",
      "school" : "Saint Charles Community College",
      "dates" : 2008,
      "url" : "http://www.ed2go.com/online-courses/asp-net-introduction"
    }, {
      "title" : "Introduction to HTML and CSS",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud304"
    }, {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud893"
    }, {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud882"
    }, {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud775"
    }, {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud804"
    }, {
      "title" : "Introduction to jQuery",
      "school" : "Udacity",
      "dates" : 2015,
      "url" : "http://www.udacity.com/course/ud245"
    }
  ]
};

var work = {
  "jobs" : [{
      "employer" : "www.xmoppet.org",
      "title" : "Web Developer",
      "location" : "Saint Peters, MO",
      "dates" : "07/1998-present",
      "description" : "Volunteer work involving research and web content development. Administered the Musgrave Foundation mailing list for two years.  Performed research in behalf of Van Ness Films for their production of Biography: Roddy McDowall: Hollywood Best's Friend, which aired on the A&E network on October 8, 1998. Coordinated with the Motion Picture and Television Fund Foundation for a fund-raising effort towards the Roddy McDowall Memorial Rose Garden; helped raise $5,125 in two years, earning the Musgrave Foundation naming rights to a bench in the rose garden.",
      "url" : "http://www.xmoppet.org"
    }, {
      "employer" : "Aspect Software",
      "title" : "Consultant",
      "location" : "Saint Charles, MO",
      "dates" : "04/2008-present",
      "description" : "Using SQL Server Management Studio (SSMS), created and optimized Transact-SQL (T-SQL) scripts to return datasets for display in Dynamics CRM 2011 forms or for incremental loading of data from client systems into CRM databases.  Created reports using SQL Server Reporting Services (SSRS), Business Intelligence Development Studio (BIDS), T-SQL and Visual Basic.  Supported data load and extract applications by maintaining existing solutions and writing new projects using Visual C#, Visual C++, PL/SQL, XML, HTML, Python and Pervasive Map Designer.",
      "url" : "http://www.aspect.com/"
    }, {
      "employer" : "RelayHealth",
      "title" : "Programmer Analyst",
      "location" : "Saint Louis, MO",
      "dates" : "02/1998-12/2007",
      "description" : "Maintained the Electronic Remittance Advice (ERA) system, an Extract, Transform, Load (ETL) application written in Visual FoxPro with calls to Gawk scripts, using SQL to access and update data in SQL Server.  Maintained the Medical Billing and Accounts Receivable system, an application written in Clipper.",
      "url" : "http://www.relayhealth.com/"
    }
  ]
};

var projects = {
  "projects" : [{
      "title" : "Front-End Nanodegree Project 1: Build a Portfolio",
      "dates" : "04/18/2015 - 04/22/2015",
      "description" : "Replicate a design mockup in a responsive website using HTML5 and CSS3.",
      "url" : "https://github.com/icsantos/FEND-build-a-portfolio",
      "images" : [
        "images/fend1_laptop.jpg",
        "images/fend1_nexus5.jpg"
      ]
    }, {
      "title" : "Front-End Nanodegree Project 2: Online Resume",
      "dates" : "05/07/2015 - present",
      "description" : "Demonstrate mastery of JavaScript and jQuery to design an online resume.",
      "url" : "https://github.com/icsantos/frontend-nanodegree-resume",
      "images" : [""]
    }
  ]
};

function inName(name) {
  var names = name.trim().split(" ");
  names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
}

function locationizer(work_obj) {
  var locations = [];
  for (var job in work_obj.jobs) {
    locations.push(work_obj.jobs[job].location);
  }
  return locations;
}

function editContact(pText, pHTMLentity) {
  var iconSpan = '<span class="orange-text contact-icon">' + pHTMLentity + '</span>';
  var pos = pText.indexOf('<span class="orange-text">');
  pText = pText.replace('orange-text', 'orange-text contact-text');
  return pText.slice(0, pos) + iconSpan + pText.slice(pos);
}

function editContact2(pText, pHTMLentity) {
  var iconSpan = '<span class="orange-text contact-icon">' + pHTMLentity + '</span>';
  var pos = pText.indexOf('<span class="orange-text">');
  pText = pText.replace('orange-text', 'orange-text contact-text');
  return pText.slice(0, pos) + iconSpan + pText.slice(pos);
}

function makeFigure(images_arr) {
  var figure = '';
  return figure;
}

var icomoon = {
  "contacts" : {
    "generic" : "&#xe972;",
    "mobile" : "&#xe958;",
    "email" : "&#xea84;",
    "github" : "&#xeab1;",
    "twitter" : "&#xea91;",
    "location" : "&#xe948;",
    "blog" : "&#xeaba;"
  }
}

bio.display = function () {
  $("#topContacts").before(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").before(HTMLheaderRole.replace("%data%", bio.role));
  if (bio.contacts) {
    var contacts = bio.contacts;
    if (contacts.generic) {
      contactGeneric = HTMLcontactGeneric.replace("%data%", contacts.generic);
      contactGeneric = editContact(contactGeneric, '&#xe972;');
      $("#topContacts, #footerContacts").append(contactGeneric);
    }
    if (contacts.mobile) {
      contactMobile = HTMLmobile.replace("%data%", contacts.mobile);
      contactMobile = editContact(contactMobile, '&#xe958;');
      $("#topContacts, #footerContacts").append(contactMobile);
    }
    if (contacts.email) {
      var contactEmail = HTMLemail.replace("%data%", contacts.email);
      contactEmail = editContact(contactEmail, '&#xea84;');
      $("#topContacts, #footerContacts").append(contactEmail);
    }
    if (contacts.github) {
      var contactGithub = HTMLgithub.replace("%data%", contacts.github);
      contactGithub = editContact(contactGithub, '&#xeab1;');
      $("#topContacts, #footerContacts").append(contactGithub);
    }
    if (contacts.twitter) {
      var contactTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
      contactTwitter = editContact(contactTwitter, '&#xea91;');
      $("#topContacts, #footerContacts").append(contactTwitter);
    }
    if (contacts.location) {
      var contactLocation = HTMLlocation.replace("%data%", contacts.location);
      contactLocation = editContact(contactLocation, '&#xe948;');
      $("#topContacts, #footerContacts").append(contactLocation);
    }
    if (contacts.blog) {
      var contactBlog = HTMLblog.replace("%data%", contacts.blog);
      contactBlog = editContact(contactBlog, '&#xeaba;');
      $("#topContacts, #footerContacts").append(contactBlog);
    }
  }
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (element, index, array) {
      $("#skills").append(HTMLskills.replace("%data%", element));
    });
  }
};

education.display = function () {
  for (school in education.schools) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    if (education.schools[school].majors.length > 0) {
      for (major in education.schools[school].majors) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
      }
    }
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
      $(".education-entry:last").append('<br>');
    }
  }
}

work.display = function () {
  for (job in work.jobs) {
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[job].url);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  };
}

projects.display = function () {
  for (project in projects.projects) {
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
      }
    }
  }
};

$('div#main').each(function () {
  orgText = $(this).html();
  newText = orgText.replace('Hello world!', '');
  $(this).html(newText);
});

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

// console.log(locationizer(work));
// $("#main").append(internationalizeButton);
