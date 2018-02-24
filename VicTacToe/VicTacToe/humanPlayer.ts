﻿class HumanPlayer{    

    public MakeMove() {
        let cellNumber = this.getUserInput();
        document.getElementById("td" + cellNumber).innerHTML = "X";
        GameState.updateGameState(cellNumber, true);
    }
    

    private getUserInput(): number {
        let validCellNumber: number = 0;
        do {
            let inputValue: string = prompt("Enter your move:");
            try {
                validCellNumber = this.validateInput(inputValue);
            }
            catch (err) {
                alert(err.message);
            }
        } while (validCellNumber == 0);
        return validCellNumber;
    }


    private validateInput(inputValue: any): number {

        if (inputValue == "") {
            throw new InvalidCellError();
        }
        else if (isNaN(parseInt(inputValue))) {
            throw new NanError();
        }
        else if (parseInt(inputValue) != Math.floor(parseInt(inputValue)) ||
            (parseInt(inputValue) < 1 || parseInt(inputValue) > Math.pow(GameState.numberOfDimensions, 2))) {
            throw new OutOfRangeError();
        }
        else if (GameState.isCellTaken(parseInt(inputValue))) {
            throw new InvalidCellError();
        }
        return parseInt(inputValue);
    }
    
}