
describe('Access ekart site', ()=>{

    it('Go to ekart and perform some operations', async ()=>{


        await browser.url('https://www.ekartlogistics.com/ekartlogistics-web')
        await browser.pause(5000)
        const title = await browser.getTitle()

        console.log('ekart page title  - '+ title)

       const shipment = await $("//input[@placeholder='TRACK YOUR SHIPMENT']")
       await shipment.setValue('hari s order')
       await browser.pause(5000)
       const value = await shipment.getAttribute('value')
       console.log('shipment field value - '+value)
        await browser.pause(5000)

        





    })




})

