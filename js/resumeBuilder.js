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
        "images/fend1_nexus5.jpg",
        "images/fend1_laptop.jpg"
      ]
    }, {
      "title" : "Front-End Nanodegree Project 2: Online Resume",
      "dates" : "05/07/2015 - present",
      "description" : "Demonstrate mastery of JavaScript and jQuery to design an online resume.",
      "url" : "https://github.com/icsantos/frontend-nanodegree-resume",
      "images" : [
        "images/fend2_laptop.jpg"
      ]
    }
  ]
};

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

function editContact(pText, pType) {
  var contactData = bio.contacts[pType];
  var htmlEntity = icomoon.contacts[pType];
  var iconSpan = '<span class="orange-text contact-icon">' + htmlEntity + '</span>';
  var pos = pText.indexOf('<span class="orange-text">');
  pText = pText.replace("%data%", contactData);
  pText = pText.replace('orange-text', 'orange-text contact-text');
  pText = pText.slice(0, pos) + iconSpan + pText.slice(pos);
  return pText;
}

function editImage(imgClass, imgText, image_arr, width_arr) {
  var imageCnt = image_arr.length;
  var pos;
  if (imageCnt > 1 && imageCnt === width_arr.length) {
    var srcset = '';
    for (var i = 0; i < imageCnt; i++) {
      srcset = srcset + image_arr[i] + ' ' + width_arr[i] + (i+1 < imageCnt ? ', ' : '');
    }
    srcset = 'srcset="' + srcset + '" sizes="100vw" ';
    pos = imgText.indexOf('src="%data%"');
    imgText = imgText.slice(0, pos) + srcset + imgText.slice(pos);
  }
  //pos = imgText.indexOf(' ');
  //imgText = imgText.slice(0, pos) + ' class="' + imgClass + '"' + imgText.slice(pos);
  imgText = imgText.replace("%data%", image_arr[0]);
  return imgText;
}

bio.display = function () {
  $("#topContacts").before(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").before(HTMLheaderRole.replace("%data%", bio.role));
  if (bio.contacts) {
    var contacts = bio.contacts;
    if (contacts.generic) {
      $("#topContacts, #footerContacts").append(editContact(HTMLcontactGeneric, "generic"));
    }
    if (contacts.mobile) {
      $("#topContacts, #footerContacts").append(editContact(HTMLmobile, "mobile"));
    }
    if (contacts.email) {
      $("#topContacts, #footerContacts").append(editContact(HTMLemail, "email"));
    }
    if (contacts.github) {
      $("#topContacts, #footerContacts").append(editContact(HTMLgithub, "github"));
    }
    if (contacts.twitter) {
      $("#topContacts, #footerContacts").append(editContact(HTMLtwitter, "twitter"));
    }
    if (contacts.location) {
      $("#topContacts, #footerContacts").append(editContact(HTMLlocation, "location"));
    }
    if (contacts.blog) {
      $("#topContacts, #footerContacts").append(editContact(HTMLblog, "blog"));
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
  for (var school in education.schools) {
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
    for (var course in education.onlineCourses) {
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
  for (var job in work.jobs) {
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
  for (var project in projects.projects) {
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

    if (projects.projects[project].images.length > 0) {
      var projImage = editImage("project-image", HTMLprojectImage, projects.projects[project].images, ['400w', '800w']);
       $(".project-entry:last").append(projImage);
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
