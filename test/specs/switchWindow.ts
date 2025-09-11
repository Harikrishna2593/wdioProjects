describe('switch to window', ()=>{

    it('window handling', async ()=>{

        await browser.url('https://www.hdfcbank.com/')

        await browser.maximizeWindow()

        await $("//button[text()='Login']").moveTo()

        await browser.pause(2000)

        await $("//a[text()='NetBanking']").click()

        await browser.pause(1000)

        const handles = await browser.getWindowHandles()
        console.log('window handles - '+handles)

        await browser.switchToWindow(handles[1])

        const frame = await $("//frame[@name='login_page']")
        await browser.switchFrame(frame)

        await browser.pause(1000)
        await $("//input[@name='fldLoginUserId']").setValue('Hari2593')

        await browser.pause(1000)

        await browser.switchToWindow(handles[0])

         await browser.pause(2000)

         await $('#search-chatInput').setValue('Hyderabad ka badshaw..')

         await browser.pause(5000)




    })





})