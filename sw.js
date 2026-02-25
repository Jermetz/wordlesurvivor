self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "Survivor Tree Mail 🌴";
    const options = {
        body: data.body || "New update at camp!",
        icon: "icon.png",
        badge: "icon.png"
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
