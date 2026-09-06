const CACHE_NAME = "educonnect-v1";

const FILES_TO_CACHE = [
    "index.html",
    "login.html",
    "student-dashboard.html",
    "subjects.html",
    "progress.html",
    "achievements.html",
    "activities.html",
    "drawing.html",

    "math.html",

    "english.html",
    "english-progress.html",
    "english-reading.html",
    "english-vocabulary.html",
    "english-grammar.html",

    "science.html",
    "science-quiz.html",

    "computer.html",
    "computer-parts.html",
    "computer-keyboard.html",
    "computer-internet.html",
    "computer-safety.html",

    "general-knowledge.html",

    "css/style.css",
    "js/script.js",
    "computer.js",

    "manifest.json",

    "icon-192.png",
    "icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );
});