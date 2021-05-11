namespace tutorialPoint {
    export namespace invoiceApp {
        export class Invoice {
            public calculateDiscount(price: number) {
                return price * .40;
            }
        }
    }
    export namespace example {
        export class Sample {
            public hello() {
                console.log("hi");
            }
        }
    }
}