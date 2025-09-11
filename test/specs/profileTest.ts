describe('Open google website', ()=>{

it('should enter some text in search box in google..', async ()=>{

await browser.url('https://www.google.com/')
const title = await browser.getTitle()
console.log('The google title: '+ title)

const searchBx = await $("//textarea[@jsname='yZiJbe']")
await searchBx.setValue('Om Sai Ram')

browser.pause(3000)

await browser.newWindow("https://www.facebook.com/",{

    windowName: 'Facebook',
    windowFeatures: 'noopener,noreferrer'

})


console.log('the second window title: ' + await browser.getTitle())

browser.pause(5000)




})

})