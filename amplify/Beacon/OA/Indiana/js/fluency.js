var delay = 700;
var hght = '1200px';



function begin_reading() {
   document.getElementById('passageContainer').style.display = 'block';
   document.getElementById('start_reading_btn').style.display = 'none';
   //document.getElementById('start_questions_btn').style.display = 'block';
   document.getElementById('done_reading_btn').style.display = 'block';
 }

function done_reading() {
   document.getElementById('done_reading_btn').style.display = 'none';
   document.getElementById('start_questions_btn').style.display = 'block';
 }

 function start_questions() {
 	document.getElementById('questionContent').style.display = 'block';
 	document.getElementById('start_questions_btn').style.display = 'none';
 	document.getElementById('navButtonBar').style.display = 'block';
 }

 function turn_page(id1, id2) {
   document.getElementById(id1).style.display = 'none';
   document.getElementById(id2).style.display = 'block';
}

function switch_passage(passage_to_hide, passage_to_show, menu_to_hide, menu_to_show) {
   document.getElementById(passage_to_hide).className = "hidden";
   document.getElementById(passage_to_show).className = "";
   document.getElementById(menu_to_hide).className = "";
   document.getElementById(menu_to_show).className = "selected_passage";
}

function selectResponse(e) {
	// clear other selected response
	var r = document.getElementsByClassName('response');
	for (var i=0; i<r.length;i++) {
		r[i].className = 'response';
	}
	// set this selected response
	e.className += ' selectedResponse';
}
