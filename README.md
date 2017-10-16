# FoodForCause


## __Requirements / Need to Implement__
* Authentication
    * Reestablish Authentication (Disabled for ease of Presentation)
* Testing / Library
    * Using JEST (REG)
* Calculate remaining time until items expire
* Allow users to reserve a certain amount (lbs.) of an item
## __ISSUES WITH DESIGN__
* These issues seem to stem from the way that the info is centered on the top image.
    * Possible solution: Make the  `FoodForCause` text at the top a permanent part of the img, or fixed position, and then have the rest of the stuff centered in the remaining space. __(Thoughts, Meg?)__
    * add.html
        * top of page is cut off, can't see 'food for cause' title
    * available.html
        * The papge starts further down than 'view.html' ... maybe an extra div?


* __Update README__
    * Project Explanation
    * Problem / Target Consumer / Solution / How it works
    * __I'm happy with this right now, how about you guys?__

* __Final Steps__
    * Deploy on Heroku (When we have a stable build)


## Nice To Have:
* https://www.twilio.com/
    * Send Texts for notifications about specific items
* Tweets to notify of available items that will expire soon
* Connect on FB/ IG

# DRAFT DOCUMENTATION

## What does Food For Cause do for the community?

### Problem
* Kansas City does not have a resource to connect food suppliers and organizations that provide food stuffs to the community.

* Many grocery stores, and restaurants throw away food that could go to good use.
    * Some of these items will expire soon.
    * Others items may have damaged packaging or other small defects that do not affect the quality of the product, but the store is still unable to sell the items.
* Food banks and Kitchens provide a valuable service: feeding people in our community that need assistance and sustenance.
* A large amount of food is unnecessarily wasted.
* Our community needs food assistance programs to thrive and care for those in need.

### Solution
* Food For Cause provides a platform to connect local community outreach programs, like food banks and kitchens, with companies that have food to donate.
* This will help to reduce food waste, put the food to good use, and strengthen the community.

### How Does it work?
* Grocery Stores, restaurants, and other businesses login and then post their available food items (including quantity, and expiration date).
* Food banks, and kitchens may reserve and pick up items.
* Unreserved items that are nearing expiration will be tweeted and text (SMS) to let the community know about their availability.

### What powers FoodForCause?
* Node/ Express
* MySQL
* Heroku
* JEST Testing Suite
* Passport.js User Authentication



