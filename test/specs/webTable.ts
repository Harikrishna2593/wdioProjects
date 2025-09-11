
describe('Read data from webTable',  ()=>{

    it('Get text from cell', async ()=>{

        await browser.url('https://www.tutorialspoint.com/selenium/practice/webtables.php')

        const rows = await $$("//table[@class='table table-striped mt-3']/tbody/tr")
        const rowData: string[] = []
        for(const row of rows)
        {
            const columns = await row.$$('td')
           
            for(const column of columns)
            {
                const text = await column.getText()
                rowData.push(text)
            }

               
        }

        console.log('rowdata - '+rowData)
        await browser.pause(3000)

     



    })





})