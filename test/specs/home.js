//Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/

//O comando async junto do await faz com que o código seja lido em ordem!


 describe ('Home' , () => {
     it('Open URL & Assert the title', async () => {
//O proximo código vai abrir o URL, pela lógica a função "Browser" faz a busca no navegador.
       await browser.url('https://practice.automationbro.com/')

//O proximo código vai conferir o "title" da página. atráves da função expect.toHaveTitle que vai chamar a função browser.
       await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro')
     })

     it('Open Blog page & Assert the URL', async () => {
               await browser.url('https://practice.automationbro.com/blog/')
        
               await expect(browser).toHaveUrl('https://practice.automationbro.com/blog/')
             })                      // A função toHave é usada para checar o que deseja: Title, URL...

              it('Click get started btn & assert url contains get-started text', async () => {
                await browser.url('https://practice.automationbro.com/')

                await $('#get-started').click()
                  // O "$" é usado para achar um elemento na página e a função "click" como o própio nome diz clicará nesse elemento.
         
                await expect(browser).toHaveUrlContaining('get-started')
                
              })

              it('Click Logo btn & assert url DOES NOT contains get-started text', async () => {
                await browser.url('https://practice.automationbro.com/')

                await $('//img[@alt="Practice E-Commerce Site"]').click()
         
                await expect(browser).not.toHaveUrlContaining('get-started')
                
              })

              it('Finding the element & assert the text', async () => {
                await browser.url('https://practice.automationbro.com/')

                const HeaderEl = await $('.elementor-text-editor')

                const HeaderText = await HeaderEl.getText()
         
                await expect(HeaderText).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed proin eget eu sit nec risus. Sed ut quam integer a nisl amet.  Ed ut quam integer a nisl amet') 
 
              })
  })