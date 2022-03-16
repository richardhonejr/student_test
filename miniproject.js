var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students(name, age, gender, nationality, gpa) {
        this.name = name;
        this.age = age;
        this.gender = 'female';
        this.nationality = nationality;
        this.gpa = gpa;
    }
    Students.prototype.displayStudent = function () {
        console.log("This person is ".concat(this.gender));
        console.trace(this.gender);
    };
    Students.prototype.getNationality = function () {
        console.log("The ".concat(this.gender, " student, ").concat(this.name, ", aged ").concat(this.age, ", is from ").concat(this.nationality, " with a GAP of ").concat(this.gpa, "."));
    };
    return Students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, gender, nationality, gpa, batch) {
        var _this = _super.call(this, name, age, gender, nationality, gpa) || this;
        _this.batch = batch;
        return _this;
    }
    UnderGraduates.prototype.showUndergrad = function () {
        console.log("The ".concat(this.gender, " student, ").concat(this.name, ", aged ").concat(this.age, ", is from ").concat(this.nationality, " with a GPA of ").concat(this.gpa, " from batch ").concat(this.batch, "."));
    };
    return UnderGraduates;
}(Students));
var student1 = new Students("Sandra Kid", 21, '', "France", 4.5);
student1.displayStudent();
student1.getNationality();
var underGrad1 = new UnderGraduates("James Tin", 23, 'male', "Germany", 3.6, 1234);
underGrad1.displayStudent;
underGrad1.showUndergrad();
