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

    work: {
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
    },

    projects: {
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
    },
    
    locationFinder: function() {
      var locations = [];
      var school, job;

      // add the single location property from bio to the locations array
      locations.push(model.bio.contacts.location);

      // add each school location to the locations array
      for (school in model.education.schools) {
        locations.push(model.education.schools[school].location);
      }

      // add each work location to the locations array
      for (job in model.work.jobs) {
        locations.push(model.work.jobs[job].location);
      }

      return locations;
    }
  };

  var controller = {
    init: function() {
      view.init();
      view.renderBio(model.bio);
      view.renderWork(model.work);
      view.renderProjects(model.projects);
      view.renderEducation(model.education);
      view.renderMap(model.locationFinder());
      view.setEventHandlers();
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

      workStart: '<div class="work-entry"></div>',
      workEmployer: '<a href="#">%data%',
      workTitle: ' - %data%</a>',
      workDates: '<div class="date-text">%data%</div>',
      workLocation: '<div class="location-text">%data%</div>',
      workDescription: '<p><br>%data%</p>',

      projectStart: '<div class="project-entry"></div>',
      projectTitle: '<a href="#">%data%</a>',
      projectDates: '<div class="date-text">%data%</div>',
      projectDescription: '<p><br>%data%</p>',
      projectImage: '<img src="%data%">',

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
      onlineURL: '<br><a href="#">%data%</a>',
      
      googleMap: '<div id="map"></div>',
      internationalizeButton: '<button>Internationalize</button>'
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

    init: function() {
      $('div.dark-gray').addClass('dark-background').removeClass('dark-gray');
      $('div.gray').addClass('light-background').removeClass('gray');
      $('div#header').addClass('header');
      $('div#letsConnect').addClass('footer');
      $('div#letsConnect h2').addClass('footerh2').removeClass('orange').removeClass('center-text');
      $('div#mapDiv').addClass('mapDiv').append(view.template.googleMap);
      $('div#map').addClass('googleMap');
    },

    renderBio: function(bio) {
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

    renderWork: function(work) {
      var formattedWorkEmployer,
        formattedWorkTitle;
      work.jobs.forEach(function (job) {
        formattedWorkEmployer = view.template.workEmployer.replace('%data%', job.employer);
        formattedWorkEmployer = formattedWorkEmployer.replace('#', job.url);
        formattedWorkTitle = view.template.workTitle.replace('%data%', job.title);
        $('#workExperience').append(view.template.workStart);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(view.template.workDates.replace('%data%', job.dates));
        $('.work-entry:last').append(view.template.workLocation.replace('%data%', job.location));
        $('.work-entry:last').append(view.template.workDescription.replace('%data%', job.description));
      });
    },

    renderProjects: function(projects) {
      var formattedProjectTitle;
      projects.projects.forEach(function (project) {
        formattedProjectTitle = view.template.projectTitle.replace('%data%', project.title);
        formattedProjectTitle = formattedProjectTitle.replace('#', project.url);
        $('#projects').append(view.template.projectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(view.template.projectDates.replace('%data%', project.dates));
        $('.project-entry:last').append(view.template.projectDescription.replace('%data%', project.description));
        project.images.forEach(function (image) {
          $('.project-entry:last').append(view.template.projectImage.replace('%data%', image));
        });
      });
    },

    renderEducation: function(education) {
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
    },
    
    map: {},
    
    // Generate the custom Google Map for the website
    // https://developers.google.com/maps/documentation/javascript/reference
    renderMap: function(locations) {
      var mapOptions = {
        disableDefaultUI: true
      };
      // Make a new Google Map JavaScript Object and attach it to <div id='map'>
      view.map = new google.maps.Map(document.querySelector('#map'), mapOptions);
      // Set the boundaries of the map based on pin locations
      window.mapBounds = new google.maps.LatLngBounds();

      view.pinPoster(locations);
    },

    /*
      createMapMarker(placeData) reads Google Places search results to create map pins.
      placeData is the object returned from search results containing information
      about a single location.
    */
    createMapMarker: function(placeData) {

      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat();  // latitude from the place service
      var lon = placeData.geometry.location.lng();  // longitude from the place service
      var name = placeData.formatted_address;   // name of the place from the place service
      var bounds = window.mapBounds;            // current boundaries of the map window
      
      var country = $.trim(placeData.formatted_address.split(',').pop());
      var image = 'images/icon_' + country + '.png';
      $.get(image).fail(function() {
        image = 'images/orange-dot.png';
      });

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: view.map,
        position: placeData.geometry.location,
        title: name,
        icon: image
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      // hmmmm, I wonder what this is about...
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.close();
        infoWindow.open(view.map, marker);
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      view.map.fitBounds(bounds);
      // center the map
      view.map.setCenter(bounds.getCenter());
    },

    // If the search returned results for a location, create a new map marker.
    mapCallback: function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        view.createMapMarker(results[0]);
      }
    },

    // Create pins on the map for each location in the locations array
    pinPoster: function(locations) {
      // Create a Google place search service object.
      // PlacesService does the work of actually searching for location data.
      var service = new google.maps.places.PlacesService(view.map);

      // Iterate through the array of locations, creating a search object for each location
      for (var place in locations) {

        // the search request object
        var request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, view.mapCallback);
      }
    },
    
    // The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2
    clickLocations: [],
    
    logClicks: function(x,y) {
      view.clickLocations.push(
        {
          x: x,
          y: y
        }
      );
      console.log('x location: ' + x + '; y location: ' + y);
    },
    
    setEventHandlers: function() {
      // Make sure the map bounds get updated on page resize
      window.addEventListener('resize', function(e) {
        view.map.fitBounds(mapBounds);
      });
      
      // for the Collecting Click Locations quiz in Lesson 2
      $(document).click(function(loc) {
        view.logClicks(loc.pageX, loc.pageY);
      });
      
      // for the International Name challenge in Lesson 2 
      // where you'll create a function that will need this helper code to run. 
      // Don't delete! It hooks up your code to the button you'll be appending.
      $(document).ready(function() {
        $('button').click(function() {
          var iName = inName() || function(){};
          $('#name').html(iName);  
        });
      });
    }
  };

  controller.init();
}());
