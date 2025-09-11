describe('Facebook registration', ()=>{

it('Create a user in facebook', async ()=>{

    await browser.url('https://www.facebook.com/')

    const facebookLoginPageTitle = await browser.getTitle()
    console.log('Login page title - '+facebookLoginPageTitle)

    expect(facebookLoginPageTitle).toContain('Facebook – log in or sign up')

    await $("//a[contains(text(),'Create new account')]").click()

    await browser.pause(1000)
    await browser.maximizeWindow() //maximize window
    await browser.pause(2000)

    //registration form
""
    await $("//input[@name='firstname']").setValue('hanish krishna')
    await $("//input[@name='lastname']").setValue('Thadaboina')

    //date of birth
   const day = await $('#day')    // Day
   await day.selectByVisibleText('25')

   const month = await $('#month') //month
   await month.selectByVisibleText('Feb')

   const year = await $('#year')
   await year.selectByVisibleText('1993') //year


   await $("//span[@data-name='gender_wrapper']/descendant::input[2]").click()
   await $("//input[@name='reg_email__']").setValue('hanishkrishna25@gmail.com')
   await $("//input[@type='password']").setValue('Hanumansai@2502')

   await browser.pause(30000)


})

})

