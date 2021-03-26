import { AbstractControl } from "@angular/forms";

export class FormValidations
{
    

    static emailMatcher(control: AbstractControl): { [key: string]: boolean } | null 
    {
        const email = control.get('email');
        const confirmEmail = control.get('confirmEmail');

        if (email.pristine || confirmEmail.pristine) return null

        if (email.value === confirmEmail.value) return null;


        return { emailMatch: true };
    }

    static passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null 
    {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');

        if (password.pristine || confirmPassword.pristine) return null

        if (password.value === confirmPassword.value) return null;


        return { passwordMatch: true };
    }

}