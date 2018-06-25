/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Search Container');
      })
  ).timeout(20000);;

  it("should have an h4 tags for sub-title", () =>
  nightmare
  .goto(url)
  .evaluate(() => document.querySelector('h4').innerText)
  .end()
  .then((text) => {
    expect(text).to.equal('Search for a Movie!');
  })
).timeout(20000);;

  it("should have an search bar for user to search a movie title", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector("input"))
      .end()
      .then(input => {
        expect(input).to.exist;
      })).timeout(20000);

  it("should have a button that performs an axios calls", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName("button"))
      .end()
      .then(button => {
        expect(button).to.exist;
      })).timeout(20000);

  it("should have a button that displays more details about the movie", () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementsByClassName("details"))
      .end()
      .then(button => {
        expect(button).to.exist;
      })).timeout(20000);

  it("should return the correct movie title from title search", () =>
    nightmare
      .goto(url)
      .type("input", "Holes")
      .click("#search")
      .wait("#title1")
      .evaluate(() => document.querySelector("#title1").innerText)
      .end()
      .then(cardTitle => {
        expect(cardTitle).to.equal("Holes")
      })).timeout(40000);

  it("should return the correct movie year from title search", () =>
    nightmare
      .goto(url)
      .type("input", "Holes")
      .click("#search")
      .wait("#year")
      .evaluate(() => document.querySelector("#year").innerText)
      .end()
      .then(cardTitle => {
        expect(cardTitle).to.equal("(2003)")
      })).timeout(40000);

      it('should display a movie poster', () =>
    nightmare
      .goto(url)
      .type('input', 'Holes')
      .click('#search')
      .wait('.col-5')
      .evaluate(() => document.querySelector('.col-5 img').src)
      .end()
      .then(cardPoster => {
        expect(cardPoster).to.not.equal('');
      })).timeout(50000);


      it("should respond with an array of movies", () =>
      axios.get(url).then(response => expect(response.data == Array)));
  

});
