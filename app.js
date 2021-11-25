let handleHover = function (event) {

    const oTarget = event.currentTarget;
    oTarget.classList.add('touch');
    setTimeout(() => {oTarget.classList.remove('touch');}, 500);

};

let makeRowBox = function (parentBox) {

    let box = document.createElement('div');
    parentBox.appendChild(box);

    return box;

};

let makeBox = function (parentBox, sizeOfBox, x, y) {

    let box = document.createElement('div');
    parentBox.appendChild(box);

    box.style.width = sizeOfBox + 'px';
    box.style.height = sizeOfBox + 'px';
    box.id = `${x}:${y}`;
    box.onmouseover = handleHover;

    return box;

};

let makeInput = function () {
    let input = document.createElement('input');
    document.body.appendChild(input);
    return input;
};

let clearGrid = function () {
    let boxes = document.getElementsByTagName('div');
    let indexOfLastBox;
    let lastBox;
    let parentElement;
    while (boxes.length > 0) {
        indexOfLastBox = boxes.length - 1;
        lastBox = boxes.item(indexOfLastBox);
        parentElement = lastBox.parentElement;
        parentElement.removeChild(lastBox);
    } 
};

let handleNumberOfRowChange = function (event) {
    numberOfRows = event.target.value;
    clearGrid();
    makeGrid(numberOfRows, sizeOfBox);
};
let handleSizeOfBoxChange = function (event) {
    sizeOfBox = event.target.value;
    clearGrid();
    makeGrid(numberOfRows, sizeOfBox);
};

let makeGrid = function (numberOfRows, sizeOfBox) {
    let numberOfColumns = numberOfRows;
    let y = 0;
    let x = 0;
    let rowBox;
    while (y < numberOfRows) {
        x = 0;
        rowBox = makeRowBox(document.body);
        while (x < numberOfColumns) {
            makeBox(rowBox, sizeOfBox);
            x = x + 1;
        }
    y = y + 1; 
    }
};

let numberOfRowInput = makeInput();
let sizeOfBoxInput = makeInput();

numberOfRowInput.onchange = handleNumberOfRowChange;
sizeOfBoxInput.onchange = handleSizeOfBoxChange;

let numberOfRows = 4;
let sizeOfBox = 16;
makeGrid(numberOfRows, sizeOfBox);