const raekoda = {
  options: [
    "Uute kondanike vastuvõtmine ja kodanikuvande kinnitamine",
    "Linnas korra ja seaduse kehtestamine",
    "Iga linlasele töö leidmine",
    "Linnamüüri ja maksude korraldamine",
    "Kaubanduse ja maksude korraldamine",
    "Otsustada, kes tohib saada linnakodanikuks",
    "Iga kaupmehe kauba müümine turul",
    "Kohtumõistmine ja kurjategijate karistamine",
    "Linna rahaliste tulude ja kulude arvestamine",
    "Kaupmeeste saatmine ohtlikele merereisidele",
    "Kodanike kehtivate reeglite (linnaõiguse) järgimise kontroll",
    "Iga pere igapäevase elu korraldamine",
  ],
  correct_indices: [2, 6, 9, 11],
};

let score = 0;

let option_container = document.getElementById("option_container");
let selected_indices = [];
let template = `
        ${raekoda.options
          .map(
            (option, option_index) =>
              `
            <div id ="multiple_option_container_${option_index}" class="multiple_option_container" onclick="handleOptionClick(${option_index})">
                <div id="multiple_option_text">${option}</div>
            </div>
            `,
          )
          .join("")}
    `;

option_container.innerHTML = template;

function handleOptionClick(index) {
  option_button = document.getElementById("multiple_option_container_" + index);
  if (option_button.className == "multiple_option_container_selected") {
    option_button.className = "multiple_option_container";
    item_index = selected_indices.indexOf(index);
    selected_indices.splice(item_index, 1);
  } else {
    option_button.className = "multiple_option_container_selected";
    selected_indices.push(index);
  }
  console.log(selected_indices);
}

function handleAnswer() {
  for (let i = 0; i < raekoda.correct_indices.length; i++) {
    // console.log(raekoda.correct_indices[i])
    for (let j = 0; j < selected_indices.length; j++) {
      // console.log(selected_indices[j])
      if (raekoda.correct_indices[i] == selected_indices[j]) {
        score++;
      }
    }
  }
  showCorrectAnswers();
  showScore();
}

function showCorrectAnswers() {
  for (let i = 0; i < raekoda.options.length; i++) {
    current_option = document.getElementById("multiple_option_container_" + i);
    for (let j = 0; j < raekoda.correct_indices.length; j++) {
      if (i == raekoda.correct_indices[j]) {
        current_option.className = "feedback_correct";
        current_option.onclick = "";
        break;
      } else {
        current_option.className = "feedback_incorrect";
        current_option.onclick = "";
      }
    }
  }
}

function showScore() {
  score_container = document.getElementById("submit_container");
  feedback_text = "";
  score_coef = score / raekoda.correct_indices.length;

  if (score_coef >= 0.7) {
    feedback_text = "Ülesanne edukalt lõpetatud!";
  } else if (score_coef >= 0.5 && score_coef < 0.7) {
    feedback_text = "Ülesanne keskmiselt lõpetatud!";
  } else {
    feedback_text = "Ülesanne lõpetatud!";
  }

  score_container.innerHTML = `
    <div id="multiple_score_container">
        <div id="multiple_option_feedback">
        ${score}p/${raekoda.correct_indices.length}p
        </div>
        <div id="multiple_option_feedback_text">${feedback_text}</div>
    </div>
    `;
}
