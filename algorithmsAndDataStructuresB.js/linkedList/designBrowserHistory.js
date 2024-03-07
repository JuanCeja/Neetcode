// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.

// void visit(string url) Visits url from the current page. It clears up all the forward history.

// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.

// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class BrowserHistory {
    constructor() {
        this.history = ['homepage'];
        this.location = { 'homepage': 0 };
        this.currentPage = null;
    }

    visit(url) {
        if (this.location[url]) {
            this.history.splice(this.location[url]);
            return this;
        } else return;
    }

    back(steps) {

    }

    forward(steps) {

    }
}

const myBrowsingHistory = new BrowserHistory()