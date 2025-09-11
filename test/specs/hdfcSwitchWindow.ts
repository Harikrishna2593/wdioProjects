describe('HDFC Switch windows', ()=>{

it('switch window operation', async ()=>{

    await browser.url('https://www.hdfcbank.com/')

    await browser.maximizeWindow()

    const loginBtn = await $('[class="desktop-login position-find btn btn-primary login-btn hide-in-mobileApp ng-scope"]')
    loginBtn.moveTo()

    const parentWindow = await browser.getWindowHandle();

    await $("//a[text()='NetBanking']").click()

     await browser.pause(2000)

     const windows = await browser.getWindowHandles()

     for(const window of windows)
     {
        if(window!==parentWindow)
        {
            await browser.switchToWindow(window)
        }

     }

     const frameEle = await $('[name="login_page"]')
     await browser.switchFrame(frameEle)

     await browser.pause(3000)

    await $('//input[@name="fldLoginUserId"]').setValue('HYD500013')

    await browser.pause(2000)


    await browser.closeWindow()

    await browser.pause(2000)

    await $('//input[@id="search-chatInput"]').setValue('Hyderabad ka DON!')


    await browser.pause(6000)


})

})