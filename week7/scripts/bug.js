// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
export default class Bug {
    constructor() {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc        
        
        this.reportedBy = "";
        this.system = ""; 
        this.subSystem = "";
        this.bugDesc = "";
    
        newUserInput.reportedBy = bugForm.reportedBy.value;
        newUserInput.system = bugForm.system.value;
        newUserInput.subSystem = bugForm.subSystem.value;
        newUserInput.bugDesc = bugForm.bugDesc.value;
    
}

    addBug() {
        const bugDiv =
        document.createElement('div');
        bugDiv.addEventListener('click', this.deleteBug);
        bugDiv.addEventListener('click', this.resolveBug);
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 

    }

    deleteBug() {
        const element = 
        document.getElementById();
        element.remove();
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        var element = document.getElementById("myDiv");
        element.style.backgroundColor = "#404040";
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
}
