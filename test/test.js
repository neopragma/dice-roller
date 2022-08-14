/* 
  Unit test suite for Dice Roller
*/  
'use strict'
import * as diceroller from '../scripts/diceroller.js';
import { expect } from 'chai';
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const source_html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
const $ = cheerio.load(source_html);

describe('Project Setup', () => {

    it('can run mocha with chai assertions', () => {
        var numbers = [1, 2, 3, 4, 5];
        expect(numbers)
            .to.be.an('array')
            .with.lengthOf(5)
            .and.that.includes(2);
    });

    it('can use cheerio to reference the index.html file', () => {
        let title = $('title');
        expect(title.text()).to.equal('Dice Roller');
    });

    it('can access functions in the diceroller.js file', () => {
        expect(diceroller.appName()).to.equal('Dice Roller');
    });
});

describe('Dice Roller', () => {

    describe('The expected HTML elements are defined', () => {

        describe('The user can enter the number of dice to roll', () => {
            var inputElement = $("#diceToRoll");

            it('The document has an input element with id "diceToRoll"', () => {
                // Note: $('...').to.not.exist doesn't seem to work in this context.
                // When the selector doesn't match anything, it returns an empty object.
                // For not.exist to evalutate to true, it would have to return 'undefined'.
                expect(inputElement).length.to.be.greaterThan(0);            
            });

            it('It is a text input element', () => {
                expect(inputElement).to.match(/type="text"/);
            });

            it('The user must roll at least 1 die', () => {
                expect(inputElement).to.match(/min="1"/);
            });

            it('The user can roll up to 12 dice', () => {
                expect(inputElement).to.match(/max="12"/);
            });

            it('The field accepts up to two characters of input', () => {
                expect(inputElement).to.match(/maxlength="2"/);
            });

            it('The field is wide enough to accept two characters', () => {
                expect(inputElement).to.match(/size="2"/);
            });

            it('The input field only accepts numbers', () => {
                expect(inputElement).to.match(/pattern="\^\\d\{1,2\}\$"/); // ^\d{1,2}$ 
            });

            it('The input field gets focus automatically', () => {
                expect(inputElement).to.match(/autofocus/);
            });

            it('The default is to roll 2 dice', () => {
                expect(inputElement).to.match(/value="2"/);
            });
        });

        describe('The user can roll the dice', () => {
            var inputElement = $("#roll");

            it('It is a button input element', () => {
                expect(inputElement).to.match(/type="button"/);
            });


        });
    });
});