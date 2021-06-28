import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages-objects/home-page';
import TrendingPage from '../../pages-objects/trending-page';

Given('the user accesses the Trending section on the giphy page', () => {

    HomePage.accessTrendingSection();
});

When('clicks on the first giphy', () => {

    TrendingPage.openFirstGiphy();
});

Then('the giphy is displayed', () => {

    TrendingPage.checkGiphy();
});

Given('the user accesses the giphy page', () => {

    HomePage.accessGiphyPage();
});

When('the user searches for a party giphy', () => {

    const type = "party";
    HomePage.searchForAnGiphy(type);
});

And('the short link is available', () => {

    HomePage.copyShortLink();
});

Given('the user accesses the short link', () => {

    HomePage.accessShortLink();
});

Then('the url displays the long link', () => {

    HomePage.validateShortLinkUrl();
});
