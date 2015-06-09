var bio = {
    "name": "Imelda Santos",
    "role": "Web Developer",
    "welcomeMessage": "Mabuhay!",
    "contacts": {
        "mobile": "636-555-5555",
        "email": "isantos1206@gmail.com",
        "github": "icsantos",
        "twitter": "isantos140",
        "location": "Saint Peters, MO"
    },
    "skills": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "T-SQL",
        "PL/SQL",
        "C#"
    ]
};

var work = {
    "jobs": [
        {
            "employer": "www.xmoppet.org",
            "title": "Web Developer",
            "location": "Saint Peters, MO",
            "dates": "07/1998-present",
            "description": "Volunteer work involving research and web content development. Administered the Musgrave Foundation mailing list for two years.  Performed research in behalf of Van Ness Films for their production of Biography: Roddy McDowall: Hollywood Best's Friend, which aired on the A&E network on October 8, 1998. Coordinated with the Motion Picture and Television Fund Foundation for a fund-raising effort towards the Roddy McDowall Memorial Rose Garden; helped raise $5,125 in two years, earning the Musgrave Foundation naming rights to a bench in the rose garden."
        },
        {
            "employer": "Aspect Software",
            "title": "Consultant",
            "location": "Saint Charles, MO",
            "dates": "04/2008-present",
            "description": "Using SQL Server Management Studio (SSMS), created and optimized Transact-SQL (T-SQL) scripts to return datasets for display in Dynamics CRM 2011 forms or for incremental loading of data from client systems into CRM databases.  Created reports using SQL Server Reporting Services (SSRS), Business Intelligence Development Studio (BIDS), T-SQL and Visual Basic.  Supported data load and extract applications by maintaining existing solutions and writing new projects using Visual C#, Visual C++, PL/SQL, XML, HTML, Python and Pervasive Map Designer."
        },
        {
            "employer": "RelayHealth",
            "title": "Programmer Analyst",
            "location": "Saint Louis, MO",
            "dates": "02/1998-12/2007",
            "description": "Maintained the Electronic Remittance Advice (ERA) system, an Extract, Transform, Load (ETL) application written in Visual FoxPro with calls to Gawk scripts, using SQL to access and update data in SQL Server.  Maintained the Medical Billing and Accounts Receivable system, an application written in Clipper."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of the Philippines",
            "location": "Quezon City, Philippines",
            "degree": "BS",
            "majors": [
                "Statistics"
            ],
            "dates": "1978-1982",
            "url": "http://www.up.edu.ph/"
        },
        {
            "name": "Ateneo De Manila University",
            "location": "Makati, Philippines",
            "degree": "Certificate",
            "majors": [
                "C++ Programming"
            ],
            "dates": "04/1996",
            "url": "http://www.admu.edu.ph/"
        },
        {
            "name": "Quilogy Learning Center",
            "location": "Saint Charles, MO",
            "degree": "Certificate",
            "majors": [
                "Core Web Application Technologies with Microsoft Visual Studio 2005",
                "Advanced Web Application Technologies with Microsoft Visual Studio 2005"
            ],
            "dates": "04/2008",
            "url": "http://www.quilogy.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to C#",
            "school": "Saint Charles Community College",
            "dates": "03/2008",
            "url": "http://www.ed2go.com/online-courses/c-sharp-programming-introduction"
        },
        {
            "title": "Introduction to ASP.NET",
            "school": "Saint Charles Community College",
            "dates": "03/2008",
            "url": "http://www.ed2go.com/online-courses/asp-net-introduction"
        },
        {
            "title": "Introduction to HTML and CSS",
            "school": "Udacity",
            "dates": "04/2015",
            "url": "http://www.udacity.com/course/ud304"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "04/2015",
            "url": "http://www.udacity.com/course/ud893"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "04/2015",
            "url": "http://www.udacity.com/course/ud882"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "06/2015",
            "url": "http://www.udacity.com/course/ud775"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "06/2015",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Front-End Nanodegree Project 1: Build a Portfolio",
            "dates": "04/18/2015 - 04/22/2015",
            "description": "Replicated a design mockup in a responsive website using HTML5 and CSS3.",
            "images": [
                "https://raw.githubusercontent.com/icsantos/FEND-build-a-portfolio/master/screenshots/laptop.jpg"
            ]
        },
        {
            "title": "Front-End Nanodegree Project 2: Online Resume",
            "dates": "05/07/2015 - present",
            "description": "Demonstrate mastery of JavaScript and jQuery to design an online resume.",
            "images": [""]
        }
    ]
};


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(element, index, array) {
    $("#skills").append(HTMLskills.replace("%data%", element));
  });
};

function displayWork() {
  for(job in work.jobs) {
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  };
}

function locationizer(work_obj) {
  var locations = [];
  for (var job in work_obj.jobs) {
    locations.push(work_obj.jobs[job].location);
  }
  return locations;
}

function inName(name) {
  var names = name.trim().split(" ");
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
};

projects.display = function() {
  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
    
    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
      }
    }
  }
};

education.display = function() {
  for(school in education.schools) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    if(education.schools[school].majors.length > 0) {
      for(major in education.schools[school].majors) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
      }
    }
  }
  
  if(education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for(course in education.onlineCourses) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url)
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedTitle + formattedSchool);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
      $(".education-entry:last").append('<br>');
    }
  }
}


displayWork();
projects.display();
education.display();

console.log(locationizer(work));
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


