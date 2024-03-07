// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.

// void visit(string url) Visits url from the current page. It clears up all the forward history.

// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.

// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class BrowserHistory {
    constructor() {
        this.currentPage = new ListNode('homepage');
    }

    visit(url) {
        const newPage = new ListNode(url);
        this.currentPage.next = newPage;
        newPage.prev = this.currentPage;
        this.currentPage = this.currentPage.next;
        return;
    }

    back(steps) {
        while (this.currentPage.prev && steps > 0) {
            this.currentPage = this.currentPage.prev;
            steps--;
        }
        return this.currentPage.val;
    }

    forward(steps) {
        while (this.currentPage.next && steps >= 0) {
            this.currentPage = this.currentPage.next;
            steps--;
        }
        return this.currentPage.val;
    }
}

const myBrowsingHistory = new BrowserHistory(["BrowserHistory", "visit", "visit", "visit", "back", "back", "forward", "visit", "forward", "back", "back"]
[["leetcode.com"], ["google.com"], ["facebook.com"], ["youtube.com"], [1], [1], [1], ["linkedin.com"], [2], [2], [7]]);

