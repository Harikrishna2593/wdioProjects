describe('Google search results', ()=>{

    it('Get text from search results', async ()=>{

        await browser.url('https://www.google.com/')

        await $("//textarea[@name='q']").setValue('webdriverio')

        const lists = await $$("//ul[@jsname='bw4e9b']/li")

        const results:string[] = []

        for(const list of lists){

            const listValue = await list.getText()
            console.log("listed value- "+ listValue)
            results.push(listValue)
        }

        console.log('collected results = '+results)
        await browser.pause(5000)








    })


})

