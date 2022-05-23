//https://practice.automationbro.com/


describe('Navigation menu', () => {
    it('Get all menu items text & assert all of them', async () => {
        await browser.url('https://practice.automationbro.com/')

        const ExpectedLI = [

            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ]

        const ActualLI = []

        //const NavLink = await $('#primary-menu').$$('li[id*=menu]') Dois modos de chamar a mesma função.
        const NavLink = await $$('#primary-menu li[id*=menu]')

        for (const link of NavLink) {
            ActualLI.push(await link.getText())
        }

        await expect(ExpectedLI).toEqual(ActualLI)

    });
    
});