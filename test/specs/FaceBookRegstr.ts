describe('Facebook registration', ()=>{

    it('User registration', async ()=>{

        await browser.url('https://www.facebook.com/r.php?locale=en_GB')

        await browser.maximizeWindow()

        await browser.pause(2000)

        await $("//input[@name='firstname']").setValue('Hari Krishna')
        await $("//input[@name='lastname']").setValue('Thadaboina')

        //DateOfBirth
        const day = await $("#day")
        await day.selectByVisibleText('25')

        const month = await $("#month")
        await month.selectByVisibleText('Feb')

         const year = await $("#year")
        await year.selectByVisibleText('1993')

        //sex type

        await $("#sex").click()

        await $("//input[@name='reg_email__']").setValue('hari251993@gmail.com')

         await $('//input[@id="password_step_input"]').setValue('HariKrishna25')


        await browser.pause(2000)


        



    })


})