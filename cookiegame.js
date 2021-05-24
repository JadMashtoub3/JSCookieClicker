// create cookie
var cookie = {
    cookieType: "ChocolateChip",
    cost: 0,
    count: 0,
    logMessage: "sup",
    purchaseID: 1,
    upgradesPurchased: [],
    numberOfUpgrades: 4,
    upgradesCount: 0,
    upgradeCosts: [5,10,15,20]
    };
    
    //When the page loads
    
    //Show the default number of clicks
    
    document.getElementById("clicker").innerHTML = 
    "Cookie clicks: " + cookie.count;
    
    document.getElementById("StatClickCount").innerHTML = 
    "Cookie clicks: " + cookie.count;

    //time

    var seconds = 0;
    var gamecount = document.getElementById("seconds-count");

    funtion incrementSeconds() {
        seconds +=1;
        gamecount.innerText = "Game duration (seconds): " + seconds;
    }

    setInterval(incrementSeconds, 1000); //repeat the function every thousand milliseconds

    for (var i = 0; i < cookie.numberOfUpgrades; i++){
        cookie.upgradesPurchased.push(false);
    }
    showUpgrades();
    //FUNCTIONS

    //DEBUG
    //Show the status of upgrades purchased as true or false
    function showUpgrades(){
        document.getElementById("UpgradePurchases").innerHTML = 
        "chocolate Chip " + cookie.upgradesPurchased[0] + "<br>"+
        "chocolate Swirl " + cookie.upgradesPurchased[1] + "<br>"+
        "Double Chocolate " + cookie.upgradesPurchased[2] + "<br>"+
        "M&M " + cookie.upgradesPurchased[3] + "<br>"
    }
    //Increase the count on cookie clicked

    function increaseCount() {
        cookie.count += 1;
        document.getElementById("clickCount").innerHTML =
        "Cookie clicks: " + cookie.count;

    }
function increaseUpgradeCount()
    cookie.upgradesCount +=1;
    document.getElementById("UpgradeCount").innerHTML =
    "Number of Upgrades: " + cookie.upgradesCount;
// add a log text to the log

function addLogText() {
    var li = document.createElement("li");
    var t = document.createTextNode(cookie.logMessage);

    li.appendChild(t);
    document.getElementById("logUl").appendChild(li);
    document.getElementById("LogText").value = "";
    var span = document.createElement("SPAN");
    li.appendChild(span);
}

//clicking on the choc chip upgrade
function purchaseChocChip() {
    if(!cookie.upgradesPurchased[0]) {
        if(cookie.count >= cookie.upgradeCosts[0])
        {
        cookie.cookieType = "Chocolate Chip";
        cookie.logMessage = "New Upgrade: " + cookie.cookieType;
        addLogText();
            cookie.upgradesPurchased[0] = true;
            increaseUpgradeCount();
            showUpgrades();
    }
        else {
            alert("you must have 5 clicks")
        }
    }
    else { 
        alert("you already purchased this upgrade");
}

//clicking on the choc swirl upgrade
function purchaseChocSwirl() {
    if(!cookie.upgradesPurchased[1]) {
        if(cookie.count >= cookie.upgradeCosts[1])
        {
    
        cookie.cookieType = "Chocolate Swirl";
        cookie.logMessage = "New Upgrade: " + cookie.cookieType;
        addLogText();
        cookie.upgradesPurchased[1] = true;
        increaseUpgradeCount();
        showUpgrades();
        }   
        else {
                alert("you must have 10 clicks")
         }
    }
            else {
                alert("you already purchased this upgrade");
        }
    } 

  


//clicking on the Double Chocolate upgrade
function purchaseDoubleChoc() {
    if(!cookie.upgradesPurchased[2]) {
        if(cookie.count >= cookie.upgradeCosts[2])
        {
        cookie.cookieType = "Double Chocolate";
        cookie.logMessage = "New Upgrade: " + cookie.cookieType;
        addLogText();
        cookie.upgradesPurchased[2] = true;
        increaseUpgradeCount();
        showUpgrades();
    }   
    else {
            alert("you must have 15 clicks")
        }
    }
    else { 
        alert("you already purchased this upgrade");
    }
    }
   

//clicking on the M&M upgrade

function purchaseMM() {
    if(!cookie.upgradesPurchased[3]) {
        if(cookie.count >= cookie.upgradeCosts[3])

        {
            cookie.cookieType = "M&M";
            cookie.logMessage = "New Upgrade: " + cookie.cookieType;
            addLogText();
            cookie.upgradesPurchased[3] = true;
            increaseUpgradeCount();
            showUpgrades();
        }   
        else { 
            alert("you must have 20 clicks")
             }
            }
            else { 
                alert("you already purchased this upgrade");
        }
    }
}