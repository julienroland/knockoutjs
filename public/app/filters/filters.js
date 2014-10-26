function filters(filters) {
    console.log(filters);
    //before
    if (typeof filters.before !== "undefined") {

        require([filters.before + "Filter"], function () {
            if (filters.before == "auth") {
                new authFilter();
            }
            
            if (filters.before == "guest") {
                new guestFilter();
            }
        });
    }
}
