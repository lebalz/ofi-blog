

// 
//     |_
//     /
//
module tri() {
    union() {
        cube(1);
        translate([1, 0, 0])
            cube(1);
        translate([0, 1, 0])
            cube(1);
        translate([0, 0, 1])
            cube(1);
    }
}

// 
//      _
//    |/
//
module snake() {
    union() {
        cube(1);
        translate([1, 0, 0])
            cube(1);
        translate([0, 1, 0])
            cube(1);
        translate([1, 0, 1])
            cube(1);
    }
}

// 
//    |_
//
module L() {
    union() {
        cube(1);
        translate([1, 0, 0])
            cube(1);
        translate([0, 1, 0])
            cube(1);
    }
}

//    |
//    |_
//
module BigL() {
    union() {
        cube(1);
        translate([0, 0, 1])
            cube(1);
        translate([0, 1, 0])
            cube(1);
        translate([0, 2, 0])
            cube(1);
    }
}

//     _|
//    |
//
module Flesh() {
    union() {
        cube(1);
        translate([1, 0, 0])
            cube(1);
        translate([0, 1, 0])
            cube(1);
        translate([1, -1, 0])
            cube(1);
    }
}

//   _ _
//    |
//
module T() {
    union() {
        cube(1);
        translate([1, 0, 0])
            cube(1);
        translate([0, 1, 0])
            cube(1);
        translate([0, -1, 0])
            cube(1);
    }
}


module magic_cube() {
    translate([2.5, 6, 0])
        Flesh();
    translate([0, 6, 0])
        T();

    BigL();
    translate([6, 5, 0])
        BigL();

    translate([5, 2.5, 0])
        L();

    translate([2, 0, 0])
        tri();
    translate([2, 2.5, 0])
        tri();
    translate([5, 0, 0])
        snake();
}

scale(8)
    magic_cube();