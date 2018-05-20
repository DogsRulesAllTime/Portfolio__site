var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 1000;
var navBtnId = 0;
var translateWidth = 0;
var skillCount = 0; // count for not reapet onClick funk(skills)

var skills = document.getElementById('skills');
var contacts = document.getElementById('contacts');
// alert(skills);
skills.onclick = function () {
        if (skillCount == 0) {
            var skillsClass = document.getElementsByClassName("skill-name");
            var statusClass = document.getElementsByClassName("skill-status");
            // document.getElementsByClassName("skill-name").classList.add ('skill-name-animation');
            // alert(3);
            // console.log(skillsClass); 
            console.log(skillsClass[0].classList); // output 1st elem of array
            console.log(skillsClass.length); // dlinna massiva
            for (let i = 0; i < skillsClass.length; i++) {
                skillsClass[i].className += " skill-name-animation";
            }
            for (let i = 0; i < statusClass.length; i++) {
                statusClass[i].className += " skill-status-animation";
                }
                // skillsClass.className += " skill-name-animation";
                skillCount++;
                // console.log(skillCount);
            }
        }
contacts.onclick = function () {
    let contactCount = 0;
    if (contactCount == 0){
        var contactIcons = document.querySelectorAll('.social-items a');
        var contactsHH = document.getElementsByClassName("hh");
        // console.log(contactIcons.length);
        // console.log(contactsHH);
        for (let i = 0; i < contactIcons.length; i++) {
            contactIcons[i].className += " contact-icon-animation";
        }
        contactsHH[0].className += " contact-hh-animation";
    }
}

        $(document).ready(function () {
            $('.slide-nav-btn').click(function () {
                navBtnId = $(this).index();

                if (navBtnId + 1 != slideNow) {
                    translateWidth = -$('#viewport').width() * (navBtnId);
                    $('#slidewrapper').css({
                        'transform': 'translate(' + translateWidth + 'px, 0)',
                        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                    });
                    $('.slide-nav-btn').removeClass(" active");
                    $(this).addClass(" active");

                    slideNow = navBtnId + 1;
                }
            });
        });