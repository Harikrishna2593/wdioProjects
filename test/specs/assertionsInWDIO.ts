import { expect } from 'chai';


describe('L&T email validation..', ()=>{


    it('Media email validations..', async ()=>{

        await browser.url('https://www.larsentoubro.com/')

        await browser.maximizeWindow()

        const title = await browser.getTitle()

        console.log('Title:- '+title)

        expect(title).to.equal('L&T India | Larsen & Toubro')

        await browser.pause(1000)

        await $('//body[@class="home"]/descendant::a[1]').click()

        const homebtn = await $('//a[text()="Home"]')
        homebtn.waitForClickable({timeout:5000})

        const sumitEmail = $('//a[text()="Sumeet.Chatterjee@larsentoubro.com"]')

        console.log('Email :- '+await sumitEmail.getText())

        expect(await sumitEmail.getText()).to.equal('Sumeet.Chatterjee@larsentoubro.com')


        await browser.pause(5000)












    })





})