describe('Contact', () => {
    
    it('Fill the inputs', async () => {

        await browser.url('https://practice.automationbro.com/contact/')

        await $('//input[@id="evf-277-field_ys0GeZISRs-1"]').setValue('Davi Aguiar')
        await $('//input[@type="email"]').setValue('testemail@gmail.com')
        await $('//input[@name="everest_forms[form_fields][66FR384cge-3]"]').setValue('999887766')
        await $('//textarea').setValue('Hello World!')

        await  $('//button[@name="everest_forms[submit]"]').click()
    
        expect('//div[@role="alert"]').toHaveText('Thanks for contacting us! We will be in touch with you shortly')

    });
});