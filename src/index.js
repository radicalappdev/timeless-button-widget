//Here we're importing items we'll need. You can add other imports here.

// TODO: Pass this value in from FileMaker
const data = [
  { display: "0:05", value: 300 },
  { display: "0:10", value: 600 },
  { display: "0:30", value: 1800 },
  { display: "1:00", value: 3600 },
  { display: "2:00", value: 7200 },
  { display: "3:00", value: 10800 },
];

const createButton = (buttonData) => {
  console.info(buttonData);
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = buttonData.display;

  button.onclick = () => {
    console.log(buttonData.value);
  };

  return button;
};

const buttonContainer = document.getElementById("button-container");

data.forEach((element) => {
  buttonContainer.appendChild(createButton(element));
});
