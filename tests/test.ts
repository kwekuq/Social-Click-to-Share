import { assert } from 'chai';
import {SocialLinks} from "../src/SocialLinks";
import 'mocha';

describe('Facebook Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.FaceBook, 'string');
    })
});

describe('Reddit Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.Reddit, 'string');
    })
});

describe('Twitter Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.Twitter, 'string');
    })
});

describe('LinkedIn Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.LinkedIn, 'string');
    })
});

describe('Telegram Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.Telegram, 'string');
    })
});

describe('WhatsApp Test', () => {
    it('Should be a string', ()=>{
        assert.typeOf(SocialLinks.WhatsApp, 'string');
    })
});