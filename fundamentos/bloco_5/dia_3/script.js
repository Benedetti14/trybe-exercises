function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
  const days = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1){
    const value = dezDaysList[i];
    const numbersDays = document.createElement('li');
    numbersDays.innerHTML = value;
    days.appendChild(numbersDays);

    if (value === 24 || value === 31) {
      numbersDays.className = 'day holiday';
    } else if (value === 4 || value === 11 || value === 18) {
      numbersDays.className = 'day friday';
    } else if (value === 25) {
      numbersDays.className = 'day holiday friday';
    } else {
      numbersDays.className = 'day';
    }
  }
}
createDaysOfTheMonth();

const buttons = document.querySelector('.buttons-container')

function holidays(str) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = str;
  btnHoliday.id = 'btn-holiday';

  buttons.appendChild(btnHoliday);
}

holidays('Feriados');

function displayHolidays() {
  const holidayBtn = document.querySelector("#btn-holiday");
  let backgroundColor = 'rgb(238,238,238)';
  let holidaysClasses = document.querySelectorAll('.holiday');
  let setNewColor = 'white';
  
  holidayBtn.addEventListener('click', function() {
    for (let i = 0; i < holidaysClasses.length; i += 1) {
      if (holidaysClasses[i].style.backgroundColor === setNewColor) {
        holidaysClasses[i].style.backgroundColor = backgroundColor;
      } else {
        holidaysClasses[i].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();