class Page{ // Base Class
 
    public loadUrl():void{
        console.log(`Loading the base page`);
        
    }
}

class LoginPage extends Page{ // LoginPage derived class

    public loadUrl(): void {
        console.log(`Loading the Login Page (derived class method)`);
        
    }
}
const login = new LoginPage()
login.loadUrl()

//Derived class takes precedence over the base class