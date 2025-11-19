class ElementActions{
    public click(element:string):void // method signature 1

    public click(element:string, forceClick:boolean):void //method signature 2

    //Single implementation for both the method signatures
    public click(element:string,forceClick?:boolean):void{

        if(forceClick){
            console.log(`Forcibly clicking the element ${element}`);
            
        } else{
            console.log(`Clicking the element ${element}`);
            
        }

    }
}


const actions = new ElementActions()
//actions.click("#Login")
actions.click("#Login",true)