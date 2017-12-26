/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {

        // Makes sure that the allFeeds variable is defined and
        // contains at least one RSS feed.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loops through each feed and ensures it contains URLS
        // that are both defined and not empty.
        // "toBeTruthy" accomplishes both tasks at once.
         it('contain valid URLs', function() {
            allFeeds.forEach(function(feed) {
                var url = feed.url;
                expect(url).toBeTruthy();
            });
         });

        // Loops through each feed and ensures it contains names
        // that are both defined and not empty.
         it('contain valid names', function() {
            allFeeds.forEach(function(feed) {
                var name = feed.name;
                expect(name).toBeTruthy();
            });
         });
    });

    describe('The Menu', function() {

        var body = $('body'),
            menuIcon = $('.menu-icon-link');

        // Menu should be hidden by default
         it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

         // When menu link is clicked, visibility of menu toggles
          it('changes visibility when menu is clicked', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
          });

    });

    describe('Initial Entries', function() {
         var feedContainer = $('.feed');

         // loadFeed is asynchronous, so must use "done" operation
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         // Ensure there are children of feedContainer (i.e., feed items)
         it('has at least one .entry element within the feed container', function() {
            expect(feedContainer.children().length).not.toBe(0);
         });

    });

    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

     });

}());
