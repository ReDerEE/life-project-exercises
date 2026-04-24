const traders_life = [
  {
    question: `Esimene inimene on Conrad Schmidt. Mees ja saksa päritolu. Ta abiellus kaks aastat tagasi ja andis truudusvande nädal aega tagasi. Ta on olnud tubli poiss siiamaani.
Kas me võtame ta liikmeks? 
`,
    options: ["Jah", "Ei"],
    correct_index: 0,
    correct_text: "Väga hea, läheme järgmise juurde!",
    incorrect_text: "Conrad sobib ikka meie sekka!",
  },
  {
    question: `Teiseks inimeseks on Elve Tamm. Vallaline naine ja eesti päritolu. Ta on kümme aastat olnud osa mustpeade vennaskonnast.
Kas me võtame ta liikmeks?`,
    options: ["Jah", "Ei"],
    correct_index: 1,
    correct_text: "Väga õige, ta ei saaks kunagi olla meie seas!",
    incorrect_text: "Kuidas te isegi jõudsite selle mõteni?",
  },
  {
    question: `Nüüd, läheme suuremate teemade juurde. Meie praegune juht on hukatud ning Ortwin Baasch- kõige tegusam liige meie seast. Ta astus meie sekka 2 aastat tagasi ning on osalenud kõikidel kogunemistel.
Kas me anname talle oldermanni rolli?
`,
    options: ["Jah", "Ei"],
    correct_index: 1,
    correct_text:
      "Jah, ta võib olla väga tegus. Aga ta ei ole me seast olnud küllalt aega!",
    incorrect_text: "Ta võib olla tegus, aga tal ei ole küllalt kogemust!",
  },
  {
    question: `Ja siis viimasena - Ägid Möller. Ta astus meie gildi 1731. aastal. Praegu on juba 1763. Ta on väga pikalt olnud meie gildi liige. 
Kas me anname talle raehärra tiitli?
`,
    options: ["Jah", "Ei"],
    correct_index: 0,
    correct_text: "Väga õige. Isegi oleks häbi kui keegi arvaks teisiti!",
    incorrect_text: "Kuidas nii? Ta on nii pikalt meiega olnud!",
  },
];

const trade = [
  {
    question: `Sul on kaasas 3 kotti vilja. Iga kott kaalub 24 naela.
        Kui palju kaalub kogu sinu kaup kokku`,
    options: ["24 naela", "96 naela", "72 naela", "80 naela"],
    correct_index: 2,
    correct_text: "Terav kui koorelahutaja!",
    incorrect_text: "Su matemaatika lonkab, noor kaupmees!",
  },
  {
    question: `Sul on kaasas 3 kotti vilja. Iga kott kaalub 24 naela.
    Meie vaekojas tuleb iga 10 naela pealt maksta 1 hõbemünt. Mitu hõbemünti pead maksma?`,
    options: ["5 hõbemünti", "7 hõbemünti", "8 hõbemünti"],
    correct_index: 1,
    correct_text: "Terav kui koorelahutaja!",
    incorrect_text: "Su matemaatika lonkab, noor kaupmees!",
  },
];

const tower = [
  {
    question: `Miks oli tulekahju keskajal ohtlikum kui tänapäeval?`,
    options: [
      "Tulekahju polnud sellel ajal ohtlik",
      "Majad olid tehtud puidust ja õlgedest",
      "Majad olid tehtud kividest",
    ],
    correct_index: 1,
    correct_text:
      "Keskajal oli tulekahju ohtlikum, sest majad olid enamasti ehitatud puidust ja katused õlgedest, mis süttisid väga kergesti. Samuti olid majad tihedalt üksteise kõrval ning puudusid korralikud tuletõrjevahendid ja -teenistus. Seetõttu levis tuli kiiresti ja seda oli raske kustutada.",
    incorrect_text:
      "Keskajal oli tulekahju ohtlikum, sest majad olid enamasti ehitatud puidust ja katused õlgedest, mis süttisid väga kergesti. Samuti olid majad tihedalt üksteise kõrval ning puudusid korralikud tuletõrjevahendid ja -teenistus. Seetõttu levis tuli kiiresti ja seda oli raske kustutada.",
  },
  {
    question: `Nimeta üks erinevus keskaja ja tänapäeva ohuteavituse vahel.`,
    options: [
      "Infot levitati SMS'ide läbi",
      "Infot levitati suitsusõnumite läbi",
      "Infot levitatu kirikukellade läbi",
    ],
    correct_index: 2,
    correct_text: "Just nii, kasutati kirikukellasid, et edastada infot!",
    incorrect_text:
      "Info levitus ei olnud nii aeglane kui suitsusõnum, aga ei olnud ka nii kiire kui SMS!",
  },
  {
    question: `Nimeta veel üks erinevus keskaja ja tänapäeva ohuteavituse vahel.`,
    options: [
      "Infot levitati hüüdmisega",
      "Infot levikuks kasutati jooksupoisse",
      "Infot levitati läbi tõrvikute",
    ],
    correct_index: 0,
    correct_text: "Just nii, info edastus oli veel läbi hüüdmise!",
    incorrect_text: "Kõige tavalisem viis- karju, et edastada infot!",
  },
  {
    question: `Kui Vana Toomas vaatab mere poole, kas ta siis vaatab loode suunas?`,
    options: ["Jah", "Ei"],
    correct_index: 1,
    correct_text: "Täpselt nii, ta vaatab põhja suunas hoopis!",
    incorrect_text:
      "Kui Vana Toomas vaatab mere poole, siis vaatab ta põhja suunas!",
  },
  {
    question: `Kui seisad Raekoja tornis ja vaatad lõuna poole, kas sa näed merd?`,
    options: ["Jah", "Ei"],
    correct_index: 1,
    correct_text: "Täpselt nii, sa näed linna hoopis!",
    incorrect_text:
      "Kui seisad Raekoja tornis ja vaatad lõuna poole, näed linna!",
  },
];

const apothecary = [
  {
    question: "Millest valmistati raeapteegis ravimeid keskajal?",
    options: [
      "Ainult veest",
      "Taimedest, loomadest ja mineraalidest",
      "Ainult tablettidest",
    ],
    correct_index: 1,
    correct_text:
      "Just nii, vanasti valmistati ravimeid taimedest, loomsetest saadustest ja mineraalidest!",
    incorrect_text:
      "Vanasti valmistati ravimeid taimedest, loomsetest saadustest ja mineraalidest!",
  },
  {
    question: "Mida kasutati keskajal unetuse või haiguste raviks?",
    options: [
      "Ravimteed ja looduslikke ravimeid",
      "Saadeti inimene koju voodisse puhkama",
      "Anti sibulat, puukoori ja paberit",
    ],
    correct_index: 0,
    correct_text:
      "Just nii, andsime haigele inimesele ravimteed ja teisi looduslikke ravimeid!",
    incorrect_text:
      "Vanasti andsime haigele inimesele ikka ravimteed ja looduslikke ravimeid!",
  },
  {
    question: "Milline tee sobib unetuse leevendamiseks?",
    options: [
      "Lihtsalt soe vesi",
      "Sibul ja puukoor",
      "Sidrunimeliss, pune, kanarbik, nurmenukk, lavendel",
    ],
    correct_index: 2,
    correct_text: "Just nii, see taimetee aitavb unetust leevendada!",
    incorrect_text: "Me ikka kasutasime mitut taime ravimteedes!",
  },
];

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

switch (type) {
  case "traders_life":
    question_answers = traders_life;
    break;
  case "trade":
    question_answers = trade;
    break;
  case "tower":
    question_answers = tower;
    break;
  case "apothecary":
    question_answers = apothecary;
    break;
}

let question_container = document.getElementById("question");
let button_container = document.getElementById("submit_container");
let answer_feedback = document.getElementById("answer_feedback");
let current_question_index = 0;
let correct_answers = 0;

function handleOption(index) {
  if (question_answers[current_question_index].correct_index == index) {
    correct_answers++;
    answer_feedback.innerHTML = `<div id="feedback_correct">${question_answers[current_question_index].correct_text}</div>`;
  } else {
    answer_feedback.innerHTML = `<div id="feedback_incorrect">${question_answers[current_question_index].incorrect_text}</div>`;
  }
  if (current_question_index + 1 >= question_answers.length) {
    button_container.innerHTML = `<button id="end" onclick="end()" class="bottomButton">Lõpeta</button>`;
  } else {
    button_container.innerHTML = `<button id="submit" class="bottomButton">Järgmine</button>`;
  }

  option_buttons = document.getElementsByClassName("question_option");
  for (let i = 0; i < option_buttons.length; i++) {
    option_buttons[i].onclick = "";
    if (question_answers[current_question_index].correct_index != i) {
      option_buttons[i].style.borderColor = "#a11b1b";
      option_buttons[i].style.color = "#a11b1b";
    } else {
      option_buttons[i].style.borderColor = "#265f26";
      option_buttons[i].style.color = "#265f26";
    }
  }

  $("#submit").on("click", () => {
    current_question_index++;
    updateQuestion(current_question_index);
  });
  console.log(index);
}

function updateQuestion(index) {
  const tempate = `<div>
    <div id="question_text">${question_answers[index].question}</div>
    <div id="question_options_container">
    ${question_answers[index].options
      .map(
        (option, option_index) =>
          `<div id="question_option_${option_index}" class="question_option" onclick="handleOption(${option_index})">${option}</div>`,
      )
      .join("")}
    </div>
    </div>`;
  button_container.innerHTML = "";
  answer_feedback.innerHTML = "";
  question_container.innerHTML = tempate;
}

function end() {
  let result_text = "";
  const answer_coef = correct_answers / question_answers.length;
  if (answer_coef >= 0.7) {
    result_text = "Ülesanne edukalt lõpetatud!";
  } else if (answer_coef >= 0.5 && answer_coef < 0.7) {
    result_text = "Ülesanne keskmiselt lõpetatud!";
  } else {
    result_text = "Ülesanne lõpetatud!";
  }

  whole = document.getElementById("container");
  whole.innerHTML = ` <div id="resultsTitle">
        ${result_text}
    </div>
    <div id="results">
        ${correct_answers}p / ${question_answers.length}p
    </div>`;
}

function start() {
  updateQuestion(current_question_index);
}

start();
