//Form inputs and resume 

$(document).ready(function () {
  // console.log("ready")
});


//I did try this on submit with the button id
$("#form").on("submit", function () {
  event.preventDefault();
  // console.log("click");

  //leave this console log for reference, until the form has full functionality 
  // console.log(event)
  // the below event returned a boolean
  //console.log(event.bubbles)



  //console.log(event.srcElement);
  let fullName = $('#fullname').val();
  $('#full-name').html(fullName);

  // let lastName = $('#lastname').val();
  // $('#last-name').html(lastName);

  let title = $('#title').val();
  $('#res-title').html(title);

  let cityState = $('#citystate').val();
  $('#city-state').html(cityState);

  let phone = $('#phonenumber').val();
  $('#phone-number').html(phone);

  let email = $('#email').val();
  $('#email-addy').html(email);

  let resumeSummary = $("#summary").val();
  $('#res-summary').html(resumeSummary);


  let skillsArray = [];
  let otherSkills = [];



  if ($('#javascript').is(":checked")) {
    skillsArray.push($("#javascript").val());
  }
  if ($('#es6').is(":checked")) {
    skillsArray.push($("#es6").val());
  }
  if ($('#html5').is(":checked")) {
    skillsArray.push($("#html5").val());
  }
  if ($('#css3').is(":checked")) {
    skillsArray.push($("#css3").val());
  }
  if ($('#react').is(":checked")) {
    skillsArray.push($("#react").val());
  }
  if ($('#redux').is(":checked")) {
    skillsArray.push($("#redux").val());
  }
  if ($('#expressjs').is(":checked")) {
    skillsArray.push($("#expressjs").val());
  }
  if ($('#nodejs').is(":checked")) {
    skillsArray.push($("#nodejs").val());
  }
  if ($('#jquery').is(":checked")) {
    skillsArray.push($("#jquery").val());
  }
  if ($('#bootstrap').is(":checked")) {
    skillsArray.push($("#bootstrap").val());
  }
  if ($('#d3js').is(":checked")) {
    skillsArray.push($("#d3js").val());
  }
  if ($('#sass').is(":checked")) {
    skillsArray.push($("#sass").val());
  }
  if ($('#oop').is(":checked")) {
    skillsArray.push($("#oop").val());
  }
  if ($('#json').is(":checked")) {
    skillsArray.push($("#json").val());
  }
  if ($('#datavis').is(":checked")) {
    skillsArray.push($("#datavis").val());
  }
  if ($('#agile').is(":checked")) {
    skillsArray.push($("#agile").val());
  }
  if ($('#comm').is(":checked")) {
    otherSkills.push($("#comm").val());
  }
  if ($('#leader').is(":checked")) {
    otherSkills.push($("#leader").val());
  }
  if ($('#create').is(":checked")) {
    otherSkills.push($("#create").val());
  }
  if ($('#trouble').is(":checked")) {
    otherSkills.push($("#trouble").val());
  }
  if ($('#probsolv').is(":checked")) {
    otherSkills.push($("#probsolv").val());
  }
  if ($('#proman').is(":checked")) {
    otherSkills.push($("#proman").val());
  }
  if ($('#timeman').is(":checked")) {
    otherSkills.push($("#timeman").val());
  }
  if ($('#confman').is(":checked")) {
    otherSkills.push($("#confman").val());
  }
  if ($('#collab').is(":checked")) {
    otherSkills.push($("#collab").val());
  }
  if ($('#strategic').is(":checked")) {
    otherSkills.push($("#strategic").val());
  }
  if ($('#critical').is(":checked")) {
    otherSkills.push($("#critical").val());
  }
  if ($('#office').is(":checked")) {
    otherSkills.push($("#office").val());
  }
  if ($('#dataman').is(":checked")) {
    otherSkills.push($("#dataman").val());
  }
  if ($('#analytics').is(":checked")) {
    otherSkills.push($("#analytics").val());
  }
  // console.log(skillsArray);

  let resultDisplayArray = [];
  for (let i = 0; i < skillsArray.length; i++) {
    resultDisplayArray.push(`<li class="skillList">${skillsArray[i]}</li>`)
  }

  let skillsFinal = resultDisplayArray.join(''); 
  // console.log(skillsFinal);


  $('#skills-list').html(skillsFinal);


  // new code for additional skills

  let otherDisplayArray = [];
  for (let i = 0; i < otherSkills.length; i++) {
    otherDisplayArray.push(`<li class="other-skills">${otherSkills[i]}</li>`)
  }

  let otherSkillsFinal = otherDisplayArray.join(''); 
  // console.log(otherSkillsFinal);


  $('#other-skills-list').html(otherSkillsFinal);


  let schoolOne = $('#school1').val();
  $('#school-1').html(schoolOne);

  let degreeOne = $('#degree1').val();
  $('#degree-1').html(degreeOne);

  let areaOne = $('#area1').val();
  $('#area-1').html(areaOne);

  let gradOne = $('#graddate1').val();
  $('#grad-1').html(gradOne);

  let schoolTwo = $('#school2').val();
  $('#school-2').html(schoolTwo);

  let degreeTwo = $('#degree2').val();
  $('#degree-2').html(degreeTwo);

  let areaTwo = $("#area2").val();
  $('#area-2').html(areaTwo);

  let gradTwo = $('#graddate2').val();
  $('#grad-2').html(gradTwo);

  let schoolThree = $('#school3').val();
  $('#school-3').html(schoolThree);

  let degreeThree = $('#degree3').val();
  $('#degree-3').html(degreeThree);

  let areaThree = $('#area3').val();
  $('#area-3').html(areaThree);

  let gradThree = $('#graddate3').val();
  $('#grad-3').html(gradThree);




  let jobOne = $('#employer1').val();
  $('#employer-1').html(jobOne);

  let positOne = $('#posit1').val();
  $('#posit-1').html(positOne);

  let datesOne = $('#dates1').val();
  $('#dates-1').html(datesOne);

  let descOne = $('#desc1').val();
  $('#desc-1').html(descOne);

  let jobTwo = $('#employer2').val();
  $('#employer-2').html(jobTwo);

  let positTwo = $('#posit2').val();
  $('#posit-2').html(positTwo);

  let datesTwo = $("#dates2").val();
  $('#dates-2').html(datesTwo);

  let descTwo = $('#desc2').val();
  $('#desc-2').html(descTwo);

  let jobThree = $('#employer3').val();
  $('#employer-3').html(jobThree);

  let positThree = $('#posit3').val();
  $('#posit-3').html(positThree);

  let datesThree = $('#dates3').val();
  $('#dates-3').html(datesThree);

  let descThree = $('#desc3').val();
  $('#desc-3').html(descThree);



  let project1 = $('#project1').val();
  $('#project-1').html(project1);

  let proDesc1 = $('#prodesc1').val();
  $('#prodesc-1').html(proDesc1);

  let proLink1 = $('#prolink1').val();
  $('#prolink-1').html(proLink1);


  let project2 = $('#project2').val();
  $('#project-2').html(project2);

  let proDesc2 = $('#prodesc2').val();
  $('#prodesc-2').html(proDesc2);

  let proLink2 = $('#prolink2').val();
  $('#prolink-2').html(proLink2);

//Scrolls to resume section after Submit button is clicked

$("html, body").animate({
  scrollTop: $("#resumeNav").offset().top
}, 500)


});



