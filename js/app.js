'use strict';
var userName = prompt('Hello, Welcome To My Website!\nMy Name Is Bushra.\n\
You Can Get To Know Me Better By Playing A Guess Game And Reading About Me In This Website.\nSo What is your name?');
alert('Welcome '+userName+'!\nSo Let Us Start The Guess Game :)\nI Will Ask You 7 Questions About Me '+userName+', \
And You Make a Yes (Y) or No (N) Guess.\nHave Fun!');
var q1, q2, q3, q4, q5, q6, q7 = '';
var score = 0;
var i;
q1 = prompt('Q.1: Is Coffe My Favourite Drink?').toLowerCase();
console.log('q1 user response is: ' + q1);
switch(q1) {
case 'yes':
case 'y':
  alert('Correct!\nI love coffe! it is not just a favourite drink, it is one my favourite things in life!');
  score ++;
  console.log('current score is: '+score);
  break;
case 'no':
case 'n':
  alert('Nope! Actually coffe is one my favourite things in life!\nI hope you love coffe too, '+userName+'.');
  break;
}
q2 = prompt('Q.2: Do I love Reading?').toLowerCase();
console.log('q2 user response is: ' + q2);
switch(q2) {
case 'yes':
case 'y':
  alert('Right Guess!\nI love reading so much\nReading novels and literature is a hobby of mine.\nAnd I like reading\
in general, whether it is articles, blogs or study materials.');
  score ++;
  console.log('current score is: '+score);
  break;
case 'no':
case 'n':
  alert('Not a right guess, '+userName+'! Reading is actually my favourite hobby!\nI like reading novels and literature,\
articles, blogs and even study materials.');
  break;
}
q3 = prompt('Q.3: Is Blue My Favourite Color?').toLowerCase();
console.log('q3 user response is: ' + q3);
switch(q3) {
case 'yes':
case 'y':
  alert('Hahaha Blue is my least favourite color.\nI know it is a VERY popular color, but I never really\
  liked it much.');
  break;
case 'no':
case 'n':
  alert('Right, I am not a fan of this color and I do not like it that much.\n\
My BEST color of all is Grean!\nI mean, how can one not LOVE Grean!');
  score ++;
  console.log('current score is: '+score);
  break;
}
q4 = prompt('Q.4: Do You Think I Speak A Foreign Language - Other Than English - ?').toLowerCase();
console.log('q4 user response is: ' + q4);
switch(q4) {
case 'yes':
case 'y':
  alert('Corretto! Io parlo un po l\'italiano, e mi piacciono le lingue in generale - I speak a little Italian,\
 and I like languages in general.');
  score ++;
  console.log('current score is: '+score);
  break;
case 'no':
case 'n':
  alert('In realtà, parlo un po l\'italiano, e mi piacciono le lingue in generale\
   - Actually, I speak a little Italian, and I like languages in general.');
  break;
}
q5 = prompt('Q.5: Am I Good At Coding?').toLowerCase();
console.log('q5 user response is: ' + q5);
switch(q5) {
case 'yes':
case 'y':
  alert('Thank you for your good opinion in me, '+userName+'! I am still a beginner learning to code\
and I really hope I get to be very good at it.');
  score ++;
  console.log('current score is: '+score);
  break;
case 'no':
case 'n':
  alert('Well, I am still a beginner so I can not claim to be so good right now,\
but I am working on becoming skilled at it.');
  break;
}
var correctAnswer = false;
for (i=1; i < 5; i++) {
  q6 = Number(prompt('Q.6: Guess how many sisters do I have?\
  \nNote: I will give you 4 attempts to answer this question.\nThis is attempt\
 number '+i));
  console.log('q6 response is: '+q6);
  if (q6 === 0) {
    alert('Right Guess! I have no sisters.\nBut I do have two amazing brothers!');
    console.log('q6 response is: '+q6);
    score ++;
    console.log('current score is: '+score);
    correctAnswer = true;
    break;
  }
  else if (q6 > 0 && q6 <= 3) {
    alert('Not the correct answer, but you are close!');
    console.log('q6 response is: '+q6);
  }
  else if (q6 >= 4 && q6 <= 6) {
    alert('Not the correct answer, you\'r a little too far');
    console.log('q6 response is: '+q6);
  }
  else if (q6 >= 7) {
    alert('Not the correct answer, you\'r too far!');
    console.log('q6 response is: '+q6);
  }
}
if (correctAnswer === false) {
  alert('Sorry you have used all your attempts.\nThe correct answer is zero!\nI don\'t have any sisters :p');
}
var months = ['jan ', 'feb ', 'mar ', 'apr ', 'may ', 'jun ', 'jul ', 'aug ', 'sep ', 'oct ', 'nov ', 'dec '];
correctAnswer = false;
forLoop:
for (i=1; i < 7; i++) {
  q7 = prompt('Q.7: Which month was I born in?\n'+months+' ?\nNote: You have 6 attempts to answer this question \nThis is attempt\
 number '+i).toLowerCase();
  switch(q7) {
  case months[0]:
  case 'january':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[1]:
  case 'february':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[2]:
  case 'march':
    alert('Correct! I was born in March 29th');
    console.log('q7 response: '+q7);
    score ++;
    console.log('current score is: '+score);
    correctAnswer = true;
    break forLoop;
  case months[3]:
  case 'april':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[4]:
  case 'may':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[5]:
  case 'june':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[6]:
  case 'july':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[7]:
  case 'august':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[8]:
  case 'september':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[9]:
  case 'october':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[10]:
  case 'november':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  case months[11]:
  case 'december':
    alert('Not the right answer, try again!');
    console.log('q7 response: '+q7);
    break;
  }
}
if (correctAnswer === false) {
  alert('Sorry you have used all your attempts.\nThe correct answer is March!\nI was born in March 29th');
}
alert('Thank You For Playing This Game '+userName+', your final score is: '+score+' / 7\
\nI Hope You Enjoyed It And Knowed A Little Bit About Me!.');

