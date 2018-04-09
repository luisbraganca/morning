var main = (function () {
    var dateElement;
    var timeElement;
    var searchEnginesElement;
    var searchEngineElement;
    var searchForm;
    var searchInput;
    var toastElement;
    var isFirstStart = !(localStorage.getItem("morningData") && JSON.parse(localStorage.getItem("morningData")).visited);
    var engines = {
        "dd": {
            "action": "https://duckduckgo.com",
            "name": "duckduckgo",
            "paramName": "q",
        },
        "gg": {
            "action": "https://www.google.pt/search",
            "name": "google",
            "paramName": "q",
            "track": true
        },
        "qw": {
            "action": "https://www.qwant.com",
            "name": "qwant",
            "paramName": "q"
        },
        "fb": {
            "action": "https://www.facebook.com/search/top",
            "name": "facebook",
            "paramName": "q",
            "track": true
        },
        "yt": {
            "action": "https://www.youtube.com/results",
            "name": "youtube",
            "paramName": "search_query",
            "track": true
        },
        "wp": {
            "action": "https://wikipedia.org/wiki/Special:Search",
            "name": "wikipedia",
            "paramName": "search"
        },
        "ri": {
            "action": "https://www.reddit.com/search",
            "name": "reddit",
            "paramName": "q"
        },
        "eb": {
            "action": "https://www.ebay.com/sch/i.html",
            "name": "ebay",
            "paramName": "_nkw",
            "track": true
        },
        "sc": {
            "action": "https://soundcloud.com/search",
            "name": "soundcloud",
            "paramName": "q"
        },
        "st": {
            "action": "http://store.steampowered.com/search",
            "name": "steam",
            "paramName": "term"
        },
        "tz": {
            "action": "https://torrentz2.me/search",
            "name": "torrentz",
            "paramName": "f"
        },
        "li": {
            "action": "https://www.linkedin.com/search/results/index",
            "name": "linkedin",
            "paramName": "keywords",
            "track": true
        }
    };
    var refreshDateTime = (function () {
        var weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        var yearMonths = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var numberFormat = function (number, digits) {
            return ("0".repeat(digits - number.toString().length)) + number.toString();
        };
        var fetchDateTime = function () {
            var date = new Date();
            var weekDay = weekdays[date.getDay()];
            var yearMonth = yearMonths[date.getMonth()];
            return {
                date: weekDay + ", " + date.getDate() + " " + yearMonth + " " + date.getFullYear(),
                time: numberFormat(date.getHours(), 2) + ":" + numberFormat(date.getMinutes(), 2)
            };
        };
        return function () {
            var dateTime = fetchDateTime();
            dateElement.innerHTML = dateTime.date;
            timeElement.innerHTML = dateTime.time;
        };
    })();
    var showToast = (function () {
        var mergeOptions = (function () {
            var defaultOptions = {
                delay: 3000,
                type: "neutral",
                align: "center",
                bold: true
            };
            return function (options) {
                if (!options) {
                    return defaultOptions;
                }
                for (var option in defaultOptions) {
                    if (!options.hasOwnProperty(option)) {
                        options[option] = defaultOptions[option];
                    }
                }
                return options;
            };
        })();

        return (function () {
            var hide = function (callback) {
                toastElement.onclick = null;
                toastElement.className = "";
                if (callback) {
                    setTimeout(callback, 500);
                }
            };
            return function (content, options, callback) {
                options = mergeOptions(options);
                toastElement.innerHTML = content;
                toastElement.className = "show " + options.type + " " + options.align;
                if (options.bold) {
                    toastElement.className += " bold";
                }
                var timeout = setTimeout(hide.bind(null, callback), options.delay);
                toastElement.onclick = function (timeout, callback) {
                    clearTimeout(timeout);
                    hide(callback);
                }.bind(null, timeout, callback);
            };
        })();
    })();
    var toggleSearchEngines = function () {
        if (searchEnginesElement.style.maxHeight) {
            searchEnginesElement.style.maxHeight = null;
        } else {
            searchEnginesElement.style.maxHeight = searchEnginesElement.scrollHeight + "px";
        }
    };
    var searchEngineHandler = function (engineKey) {
        var engine = engines[engineKey];
        searchForm.action = engine.action;
        searchEngineElement.style.backgroundImage = "url('./img/ico/" + engine.name + ".png')";
        searchInput.name = engine.paramName;
        searchInput.placeholder = "Search " + engine.name;
        searchEnginesElement.style.maxHeight = null; // Close after search engine is selected
        if (engine.track) {
            showToast("Warning: if you're signed in, this search will be tracked by " + engine.name + ".", { bold: true, align: "left", type: "warning" });
        }
        searchInput.focus();
    };
    var bangHandler = function () {
        var content = searchInput.value.trim();
        if (content.length === 3 && content.indexOf("!") === 0 && engines[content.substring(1)]) {
            searchEngineHandler(content.substring(1));
            searchInput.value = "";
        }
    };
    var attachEvents = function () {
        searchEngineElement.addEventListener("click", toggleSearchEngines);
        searchInput.addEventListener("keyup", bangHandler);
        searchInput.addEventListener("focus", function () { searchEnginesElement.style.maxHeight = null; });
    };

    var attachSearchEngines = function () {
        searchEngineHandler(Object.keys(engines)[0]);
        for (var engine in engines) {
            var element = document.createElement("a");
            element.style.backgroundImage = "url('./img/ico/" + engines[engine].name + ".png')";
            element.className = "ico";
            element.addEventListener("click", searchEngineHandler.bind(null, engine));
            searchEnginesElement.append(element);
        }
    };
    var handleFirstStart = function () {
        var toastContent = "morning, we have Bang! notation support:<br/>"
        for (var engine in engines) {
            toastContent += "<br/><span class='alignLeft'>!" + engine + " - Changes to " + engines[engine].name + " search engine</span>";
        }
        var options = { type: "neutral", delay: 30000, align: "left", bold: false };
        toastContent += "<br/><br/>Click me!";
        showToast(toastContent, options, function () {
            showToast("Keep in mind that, since we're looking forward to keep this website simple, we're avoiding account management and therefore,\
            all your notes will be deleted if you (or something) cleans your browser data.<br/><br/>Click me again! (I promise we're almost finished)", options, function () {
                    showToast("As a way of 'helping us to help you', if you manage to find any vulnerability or bug please take some time to report it on our\
                GitHub page, on the 'issues' section.<br/>For better usage make sure you add us as your home page.<br/><br/>\
                Now click me one last time and I'm gone.", options, false);
                });
        });
        var toSave = JSON.parse(localStorage.getItem("morningData")) || {};
        toSave.visited = true;
        localStorage.setItem("morningData", JSON.stringify(toSave));
    };

    return function () {
        timeElement = document.getElementById("time");
        dateElement = document.getElementById("date");
        searchEnginesElement = document.getElementById("searchEngines");
        searchEngineElement = document.getElementById("searchEngine");
        searchForm = document.getElementById("searchForm");
        searchInput = document.getElementById("searchText");
        toastElement = document.getElementById("toast");
        attachEvents();
        attachSearchEngines();
        refreshDateTime();
        setInterval(refreshDateTime, 1000);
        if (isFirstStart) {
            handleFirstStart();
        }
    };
})();

window.onload = main;