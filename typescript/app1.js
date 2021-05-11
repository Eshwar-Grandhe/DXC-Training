var tutorialPoint;
(function (tutorialPoint) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
    var example;
    (function (example) {
        var Sample = /** @class */ (function () {
            function Sample() {
            }
            Sample.prototype.hello = function () {
                console.log("hi");
            };
            return Sample;
        }());
        example.Sample = Sample;
    })(example = tutorialPoint.example || (tutorialPoint.example = {}));
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path = "invoicets.ts" />
var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
var invoice2 = new tutorialPoint.example.Sample();
invoice2.hello();
