import $, { ajaxPrefilter } from 'jquery';

class Search {
    // 1. initiate the object
    constructor() {
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".search-overlay__close");
        this.searchOverlay = $(".search-overlay");
        this.searchField = $("#search-term");
        this.searchResults = $("#search-overlay__results");
        this.events();
        this.typingTimer;
        this.isSpinnerVisible = false;
        this.previousValue;
    }
    // 2. events
    events() {
        this.openButton.on('click', this.openOverlay.bind(this));
        this.closeButton.on('click', this.closeOverlay.bind(this));
        $(document).on('keyup', this.keyPress.bind(this));
        this.searchField.on('keyup', this.typingLogic.bind(this));
    }

    // 3. methods
    typingLogic() {
        if(this.searchField.val() != this.previousValue) {
            clearTimeout(this.typingTimer);

            if(this.searchField.val()) {
                if(!this.isSpinnerVisible) {
                    this.searchResults.html('<div class="spinner-loader"></div>');
                    this.isSpinnerVisible = true;
                }
            } else {
                this.searchResults.html('');
                this.isSpinnerVisible = false;
            }
            this.typingTimer = setTimeout(this.getResults.bind(this), 600);
            this.previousValue = this.searchField.val();
        }
    }
    getResults() {
        $.getJSON('http://localhost:8888/wpcourse/wp-json/wp/v2/posts?search=' + this.searchField.val(), function(posts) {
            alert(posts[0].title.rendered);
        });
    }

    openOverlay() {
        this.searchOverlay.addClass('search-overlay--active');
        $('body').addClass('body-no-scroll');
    }

    closeOverlay() {
        this.searchOverlay.removeClass('search-overlay--active');
        $('body').removeClass('body-no-scroll');
    }
    keyPress(event) {
        if(event.keyCode == 27) {
            this.closeOverlay();
        }
    }
}

export default Search;