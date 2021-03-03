import {
    NgForm,
    FormGroup,//step1 import these for validations, client side validations
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'


export class Customer {
    id: number = 0;
    customerName: string = "";
    address: string = "";

    //1 to many relationship
    products: Array<Product> = new Array<Product>();

    //step 2 create hte instnace for formgroup
    formGroup: FormGroup;

    constructor() {
        //step 3 use builder to create empty hierachy
        var _builder = new FormBuilder();
        this.formGroup = _builder.group({});

        //step 4 add required validation on customer name
        this.formGroup.addControl("addressControl", new FormControl('', Validators.required));

        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[a-zA-Z]{3,10}$"));

        this.formGroup.addControl("customerNameControl", new FormControl('', Validators.compose(validationcollection)));

    }
}

export class Product {
    id: number = 0;
    name: string = "";

}